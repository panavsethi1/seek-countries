// Types
import { useSetRecoilState } from 'recoil';
import { Country } from '../../global/types';

// Styles
import './styles/country-card.css';
import { SelectedCountryState } from '../../store/CountriesAtom';

type CountryCardProps = {
	country: Country;
};

function CountryCard({ country }: CountryCardProps) {
	const setSelectedCountry = useSetRecoilState(SelectedCountryState);

	const handleCountryClick = () => {
		setSelectedCountry(country);
	};

	return (
		<div onClick={handleCountryClick} className='country-card-wrapper'>
			<div className='country-card'>
				<img
					style={{ height: country.name.common === 'Nepal' ? '16rem' : 'auto' }}
					src={country.flags.svg}
					alt={country.flags.alt}
				/>
				<p className='country-name'>{country.name.common}</p>
				<div className='country-info'>
					<p className='country-info-item'>
						<span>Population: </span>
						{country.population.toLocaleString()}
					</p>
					<p className='country-info-item'>
						<span>Region: </span>
						{country.region}
					</p>
					<p className='country-info-item'>
						<span>Capital: </span>
						{country.capital}
					</p>
				</div>
			</div>
		</div>
	);
}

export default CountryCard;
