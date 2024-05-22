import { useEffect, useState } from 'react';

// NPM
import axios from 'axios';
import { Input, Select, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

// Constants
import { BASE_URL, FIELDS_PARAM, Region } from '../../global/constants';

// Recoil
import {
	CountriesSearchSelector,
	CountriesState,
} from '../../store/CountriesAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// Components
import CountryCard from './CountryCard';

// Styles
import './styles/countries.css';

function Countries() {
	const [search, setSearch] = useState<string>('');
	const [region, setRegion] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const setAllCountries = useSetRecoilState(CountriesState);
	const searchCountries = useRecoilValue(
		CountriesSearchSelector([search, region])
	);

	const { Option } = Select;

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleRegionSelect = (value: string | undefined) => {
		value ? setRegion(value) : setRegion('');
	};

	const regions = Object.values(Region);

	// To minimize network calls, one call is made to fetch all countries and searching is handled on the frontend
	useEffect(() => {
		setLoading(true);
		axios
			.get(BASE_URL + FIELDS_PARAM)
			.then((res) => {
				setAllCountries(res.data);
				setLoading(false);
			})
			.then(() => {})
			.catch(() => {
				setLoading(false);
				alert('Error while fetching data, please try again later.');
			});
	}, [setAllCountries]);

	return (
		<div className='countries'>
			<div className='countries-container'>
				<div className='countries-header'>
					<Input
						className='countries-search'
						placeholder='Search for a country...'
						value={search}
						onChange={handleSearchChange}
						prefix={
							<SearchOutlined className='countries-search-icon' />
						}></Input>
					<Select
						className='countries-region-select'
						popupClassName='countries-region-select-dropdown'
						allowClear
						onChange={handleRegionSelect}
						placeholder='Filter by Region'>
						{regions.map((region) => (
							<Option key={region} value={region}>
								{region}
							</Option>
						))}
					</Select>
				</div>
				<div
					style={{ alignItems: loading ? 'center' : 'initial' }}
					className='countries-list'>
					{searchCountries.map((country, index) => {
						return <CountryCard key={index} country={country} />;
					})}
					{loading && (
						<div className='countries-list-loader'>
							<Spin size='large' />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Countries;
