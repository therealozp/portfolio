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
		blue: {
			light: '#7292fa',
			main: '#4264d4',
		},
		green: {
			main: '#9CDE9F',
		},
		yellow: {
			main: '#FABC3C',
		},
		text: {
			primary: '#FAF0F1',
		},
	},
});

export default myTheme;
