import { atom, selectorFamily } from 'recoil';
import { Country } from '../global/types';

export const CountriesState = atom({
	key: 'CountriesState',
	default: [] as Country[],
});

export const CountriesSearchSelector = selectorFamily({
	key: 'CountriesSearchSelector',
	get:
		(search: string) =>
		({ get }) => {
			const allCountries = get(CountriesState);
			return allCountries.filter((country) =>
				country.name.common.toLowerCase().includes(search)
			);
		},
});

export const CountriesRegionSelector = selectorFamily({
	key: 'CountriesRegionSelector',
	get:
		(region: string) =>
		({ get }) => {
			const allCountries = get(CountriesState);
			return allCountries.filter((country) => country.region === region);
		},
});
