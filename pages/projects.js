import React from 'react';
import ProjectPage from '../src/pages/ProjectPage';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const project = () => {
	return (
		<>
			<Head>
				<title>projects - khang.dev</title>
				<meta
					name="description"
					content="Explore the projects of Your Name, showcasing expertise in NextJS, React, and other web development technologies. View detailed descriptions and live demos."
				/>
				<meta
					name="keywords"
					content="Your Name projects, NextJS projects, React projects, web development projects, portfolio projects, JavaScript projects, front-end development, personal projects, C++ projects, student projects, USF proejcts"
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<WrapperNoSSR>
				<ProjectPage />
			</WrapperNoSSR>
		</>
	);
};

export default project;
