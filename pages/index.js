import React from 'react';
import HomePage from '../src/pages/HomePage';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const index = () => {
	return (
		<>
			<Head>
				<title>khang.dev</title>
				<meta name="robots" content="index, follow" />
			</Head>

			<WrapperNoSSR>
				<HomePage />
			</WrapperNoSSR>
		</>
	);
};

export default index;
