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
				<meta
					name="description"
					content="Khang's personal portfolio website, a proficient web developer skilled in NextJS, React, and modern web technologies. View projects, skills, and contact information."
				/>
				<meta
					name="keywords"
					content="Khang Le, Phu Anh Khang Le, Khang, web developer, NextJS, React, JavaScript, front-end developer, web development portfolio, software engineer, modern web technologies, web development, web design, University of South Florida, USF, C, C++, C#, Java, Python, HTML, CSS, JavaScript, TypeScript, SQL, MongoDB, NodeJS, ExpressJS, ReactJS, NextJS, Material-UI, Bootstrap, TailwindCSS, Git, GitHub, Bitbucket, Jira, Confluence, Agile, Scrum, Kanban, RESTful APIs, GraphQL, web development projects, web development skills, web development contact information"
				/>
				<meta name="robots" content="index, follow" />
			</Head>

			<WrapperNoSSR>
				<HomePage />
			</WrapperNoSSR>
		</>
	);
};

export default index;
