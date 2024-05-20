export type Country = {
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
	name: {
		common: string;
		official: string;
		nativeName: {
			[key: string]: {
				official: string;
				common: string;
			};
		};
	};
	tld: string[];
	currencies: {
		[key: string]: {
			name: string;
			symbol: string;
		};
	};
	capital: string[];
	region: string;
	subregion: string;
	languages: {
		[key: string]: string;
	};
	borders: string[];
	population: number;
};
