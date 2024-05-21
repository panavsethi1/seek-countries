import { atom, selectorFamily } from 'recoil';
import { Country } from '../global/types';

export const CountriesState = atom({
	key: 'CountriesState',
	default: [] as Country[],
});

export const SelectedCountryState = atom({
	key: 'SelectedCountryState',
	default: {} as Country,
});

export const CountriesSearchSelector = selectorFamily({
	key: 'CountriesSearchSelector',
	get:
		([search, region]: string[]) =>
		({ get }) => {
			const allCountries = get(CountriesState);
			const searchCountries = allCountries.filter((country) =>
				country.name.common.toLowerCase().includes(search.toLowerCase())
			);
			return region.length
				? searchCountries.filter((country) => country.region === region)
				: searchCountries;
		},
});
