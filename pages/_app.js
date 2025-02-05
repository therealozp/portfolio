import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// non nextjs imports
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import myTheme from '../src/themes';
import '../styles/globals.scss';
export default function MyApp(props) {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>khang.dev</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<meta name="author" content="Khang Le" />
				<meta
					name="google-site-verification"
					content="iFEqvLmzfyfps9JTWDXWagjDL1EqTzG0MCTGs1dutSE"
				/>
				<meta
					name="description"
					content="Khang's developer portfolio. AI Intern @ Kyanon Digital. Full-stack web development @ many self-initated projects and other startups. Computer Science @ University of South Florida. "
				/>
			</Head>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			<ThemeProvider theme={myTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
