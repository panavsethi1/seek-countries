import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { BASE_URL, FIELDS_PARAM, Region } from '../../global/constants';
import {
	CountriesSearchSelector,
	CountriesState,
} from '../../store/CountriesAtom';
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './styles/countries.css';

function Countries() {
	const [search, setSearch] = useState<string>('');

	const setAllCountries = useSetRecoilState(CountriesState);
	const searchCountries = useRecoilValue(CountriesSearchSelector(search));

	const { Option } = Select;

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const regions = Object.values(Region);

	// To minimize network calls, one call is made to fetch all countries and searching is handled on the frontend
	useEffect(() => {
		axios.get(BASE_URL + FIELDS_PARAM).then((res) => {
			setAllCountries(res.data);
		});
	}, [setAllCountries]);

	// Logging searchedCountries onChange
	useEffect(() => {
		console.log(searchCountries);
	}, [searchCountries]);

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
						placeholder='Filter by Region'>
						{regions.map((region) => (
							<Option key={region} value={region}>
								{region}
							</Option>
						))}
					</Select>
				</div>
			</div>
		</div>
	);
}

export default Countries;
