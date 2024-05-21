export const BASE_URL = 'https://restcountries.com/v3.1/all';
export const FIELDS_PARAM =
	'?fields=name,tld,currencies,capital,region,subregion,flags,population,languages,borders,cca3';

export enum Region {
	AFRICA = 'Africa',
	AMERICAS = 'Americas',
	ASIA = 'Asia',
	EUROPE = 'Europe',
	OCEANIA = 'Oceania',
}
