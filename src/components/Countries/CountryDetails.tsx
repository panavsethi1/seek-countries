// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	CountriesState,
	SelectedCountryState,
} from '../../store/CountriesAtom';

// Types
import { Country } from '../../global/types';

// Styles
import './styles/country-details.css';

function CountryDetails() {
	const [country, setCountry] = useRecoilState(SelectedCountryState);
	const allCountries = useRecoilValue(CountriesState);

	const handleBackClick = () => {
		setCountry({} as Country);
	};

	return (
		<div className='country-details'>
			<div className='country-details-container'>
				<div className='country-details-header'>
					<div
						onClick={handleBackClick}
						className='country-detials-back-button'>
						<span>&larr;</span> Back
					</div>
				</div>
				<div className='country-details-content'>
					<div className='country-details-content-flag'>
						<img src={country.flags.svg} alt='' />
					</div>
					<div className='country-details-content-info'>
						<p className='country-details-content-info-name'>
							{country.name.common}
						</p>
						<div className='country-details-content-info-wrapper'>
							<div className='country-details-content-info-column'>
								<p className='country-details-content-info-item'>
									<span>Native Name: </span>
									{Object.keys(country.name.nativeName)
										.map((native) => {
											return country.name.nativeName[native].common;
										})
										.join(', ')}
								</p>
								<p className='country-details-content-info-item'>
									<span>Population: </span>
									{country.population.toLocaleString()}
								</p>
								<p className='country-details-content-info-item'>
									<span>Region: </span>
									{country.region}
								</p>
								<p className='country-details-content-info-item'>
									<span>Subregion: </span>
									{country.subregion}
								</p>
								<p className='country-details-content-info-item'>
									<span>Capital: </span>
									{country.capital}
								</p>
							</div>
							<div className='country-details-content-info-column'>
								<p className='country-details-content-info-item'>
									<span>Top Level Domain: </span>
									{country.tld}
								</p>
								<p className='country-details-content-info-item'>
									<span>Currencies: </span>
									{Object.values(country.currencies)
										.map((currency) => {
											return currency.name;
										})
										.join(', ')}
								</p>
								<p className='country-details-content-info-item'>
									<span>Languages: </span>
									{Object.values(country.languages).join(', ')}
								</p>
							</div>
						</div>
						<div className='country-details-content-borders'>
							<span>Border Countries: </span>
							{country.borders.length ? (
								country.borders.map((border) => {
									const borderCountry = allCountries.find(
										(borderCountry) => borderCountry.cca3 === border
									);

									const borderCountryName = borderCountry?.name.common;

									const handleBorderCountryClick = () => {
										borderCountry && setCountry(borderCountry);
									};

									return (
										<span
											onClick={handleBorderCountryClick}
											className='country-details-content-borders-item'>
											{borderCountryName}
										</span>
									);
								})
							) : (
								<span className='country-details-content-borders-item'>
									None
								</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CountryDetails;
