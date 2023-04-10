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
			light: '#7292fa',
			main: '#4264d4',
			dark: '#171C27',
		},
		green: {
			main: '#9CDE9F',
			dark: '#363627',
		},
		yellow: {
			main: '#FABC3C',
			cream: '#E2DBBE',
		},
		red: {
			main: '#F25F5C',
		},
		text: {
			primary: '#FAF0F1',
			creme: '#ece2d0',
			greenCream: '#fffeb9',
		},
	},
});

export default myTheme;
