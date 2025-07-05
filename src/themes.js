import { createTheme } from '@mui/material';

const myTheme = createTheme({
	typography: {
		fontFamily: ['"Satoshi"', 'Calibri', 'sans-serif'].join(','),
	},
	palette: {
		primary: {
			main: '#fa8072',
		},
		secondary: {
			main: '#7729d1',
		},
		blue: {
			light: '#8ea4d2',
			main: '#6279B8',
			dark: '#171C27',
		},
		green: {
			main: '#9CDE9F',
			dark: '#363627',
		},
		yellow: {
			main: '#FCEC52',
			cream: '#E2DBBE',
		},
		red: {
			main: '#DB504A',
		},
		text: {
			primary: '#FAF0F1',
			creme: '#ece2d0',
			greenCream: '#fffeb9',
			secondary: '#d1d1d1',
		},
	},
});

export default myTheme;
