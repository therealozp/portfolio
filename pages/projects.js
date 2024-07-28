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
					content="Explore my projects and experience in NextJS, React, and other web development technologies. View detailed descriptions and live demos."
				/>
			</Head>

			<WrapperNoSSR>
				<ProjectPage />
			</WrapperNoSSR>
		</>
	);
};

export default project;
