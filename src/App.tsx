import { useEffect } from 'react';

// Recoil
import { useRecoilValue } from 'recoil';
import { DarkModeState } from './store/ThemeAtom';
import { SelectedCountryState } from './store/CountriesAtom';

// Components
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

// Styles
import './App.css';
import CountryDetails from './components/Countries/CountryDetails';

function App() {
	const isDark = useRecoilValue(DarkModeState);
	const selectedCountry = useRecoilValue(SelectedCountryState);

	// Handling theme
	useEffect(() => {
		if (isDark) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [isDark]);

	return (
		<div className='app-container'>
			<Header />
			{selectedCountry.name ? <CountryDetails /> : <Countries />}
		</div>
	);
}

export default App;
