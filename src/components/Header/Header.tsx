// Recoil
import { useRecoilState } from 'recoil';
import { DarkModeState } from '../../store/ThemeAtom';

// Assets
import darkModeIcon from '../../assets/icons/dark-mode-icon.svg';
import lightModeIcon from '../../assets/icons/light-mode-icon.svg';

// Styles
import './styles/header.css';

function Header() {
	const [isDark, setIsDark] = useRecoilState(DarkModeState);

	return (
		<div className='header'>
			<div className='header-container'>
				<p className='header-title'>Where in the world?</p>
				<div onClick={() => setIsDark(!isDark)} className='header-theme-toggle'>
					<img src={isDark ? darkModeIcon : lightModeIcon} alt='' />
					<p>Dark Mode</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
