import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { DarkModeState } from './store/ThemeAtom';
import Header from './components/Header/Header';

import './App.css';
import Countries from './components/Countries/Countries';

function App() {
	const isDark = useRecoilValue(DarkModeState);

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
			<Countries />
		</div>
	);
}

export default App;
