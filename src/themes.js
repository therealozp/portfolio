import { createTheme } from '@mui/material';

const myTheme = createTheme({
	typography: {
		fontFamily: ['"Nunito"', 'Calibri', 'sans-serif'].join(','),
	},
	palette: {
		primary: {
			main: '#fa8072',
		},

		secondary: {
			main: '#7729d1',
		},
		themeBlack: {
			main: '#02120D',
			viridian: '#063828',
			sacrGreen: '#35876E',
		},
		themeWhite: {
			main: '#FAF0F1',
		},
		blue: {
			light: '#7292fa',
			main: '#4264d4',
		},
		text: {
			primary: '#FAF0F1',
			secondary: '#FAF0F1',
		},
	},
});

export default myTheme;
