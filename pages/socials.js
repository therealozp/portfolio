import React from 'react';
import Links from '../src/pages/Links';
import Head from 'next/head';

const hello = () => {
	return (
		<>
			<Head>
				<title>contact and socials - khang.dev</title>
				<meta
					name="description"
					content="Get in touch with Khang, a skilled web developer specializing modern web technologies. Contact via email or social media."
				/>
				<meta
					name="keywords"
					content="Your Name contact, web developer contact, NextJS developer contact, front-end developer contact, software engineer contact"
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<Links />
		</>
	);
};

export default hello;
