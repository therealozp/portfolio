import React, { useEffect, useState } from 'react';
import {
	ProjectPageCard,
	SmallProjectPageCard,
} from '../components/projects/ProjectPageCard';
import { Box, Typography } from '@mui/material';
import ContactBlock from '../components/blocks/ContactBlock';
const projects = [
	{
		name: 'ARIS Viewer',
		description: 'An AR viewer for your own models!',
		year: '2023',
		status: 'development',
	},
	{
		name: 'Dumbull (Mobile)',
		description: 'A Tinder for Studyding???',
		year: '2023',
		src: '/2chool.png',
	},
	{
		name: 'ChanceMap',
		description:
			'Extracurriculars are yet to be received by all student communities, and ChanceMap helps you make the transition!',
		status: 'ready',
		href: 'https://www.chancemap.com/',
		src: '/chancemap.png',
		subtitle: 'Social Media Platform',
		button: 'visit',
		year: '2021',
	},
	{
		name: 'VSPACE Education',
		description: 'Learning English made easy (and affordable too!)',
		status: 'ready',
		href: 'https://www.vspace.org.vn',
		src: '/vspace.png',
		subtitle: 'Marketing Website',
		button: 'visit',
		year: '2021',
	},
	{
		name: 'Excellaca',
		description:
			'Interesting knowledge, passed down from one student to the other. After all, why should we be discouraged from trying out new things? ',
		status: 'ready',
		href: 'https://excellaca.org',
		src: '/excellaca.png',
		subtitle: 'Student-powered Courses',
		button: 'visit',
		year: '2021',
	},
	{
		name: 'Lexi',
		description:
			'A ready-made quiz app that accompanies you on all your English lexicon pursuits!',
		status: 'ready',
		href: 'https://lexi.vercel.app/',
		src: '/lexi.png',
		subtitle: 'Got Vocabulary?',
		button: 'visit',
		year: '2021',
	},
	// {
	// 	name: 'Cureator',
	// 	description:
	// 		'Diagnose your symptoms, find local medicine and nearby pharmacies for illnesses commonly come across',
	// 	status: 'prototype',
	// 	href: 'https://cureator.care/',
	// 	src: '/cureator.png',
	// 	subtitle: 'Stay safe, stay healthy',
	// 	button: 'preview',
	// 	year: '2021',
	// },
	// {
	// 	name: '2SchoolQueb',
	// 	description:
	// 		'Where students can become tutors, and where learners can become students! ...wait, something is still off...',
	// 	status: 'prototype',
	// 	href: 'https://the-rice-powered-queb.vercel.app/',
	// 	src: '/queb.png',
	// 	subtitle: 'School is 2cool',
	// 	button: 'preview',
	// 	year: '2021',
	// },
];

const sides = [
	{
		name: 'canvas notification API',
		description:
			'A simple API reminds you of upcoming due dates that sends email notificatins',
		year: '2023',
		tags: 'api',
		href: 'https://github.com/therealozp/canvas-notis-api',
	},
	{
		name: 'bank statement parser',
		description:
			'A simple Python script that parses bank statements for ease of management',
		year: '2023',
		tags: 'python',
		href: 'https://github.com/therealozp/statements_parser',
	},
	{
		name: 'ASCII art generator',
		description: 'A webapp that converts images to ASCII art',
		year: '2023',
		tags: 'web',
		href: 'https://github.com/therealozp/ascii-art-project-ichi',
	},
	{
		name: 'rate-my-teammate',
		description:
			"A webapp that helps you find the perfect teammate (I didn't get to finish it)",
		year: '2022',
		tags: 'web',
		href: 'https://github.com/therealozp/rate-my-teammate',
	},
];

const MissionStatement = () => {
	const [scaleFactorX, setScaleFactorX] = useState(1);
	const [scaleFactorY, setScaleFactorY] = useState(1);

	useEffect(() => {
		const container = document.getElementById('backdrop-container');
		const text = document.getElementById('backdrop-text');

		function scaleText() {
			const containerWidth = container.clientWidth;
			const containerHeight = container.clientHeight;
			const textWidth = text.clientWidth;
			const textHeight = text.clientHeight;

			setScaleFactorX(containerWidth / textWidth);
			setScaleFactorY(containerHeight / textHeight);
		}

		window.addEventListener('resize', scaleText);
		scaleText(); // Call the function initially

		return () => {
			// cleanup
			window.removeEventListener('resize', scaleText);
		};
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '32px',
					margin: '32px',
					height: '80%',
					border: '1px solid #4a4a4a',
					borderRadius: '16px',
					position: 'relative',
				}}
				id="backdrop-container"
			>
				<Typography
					sx={{
						fontFamily: 'Rubik',
						position: 'absolute',
						transform: `scale(${scaleFactorX}, ${scaleFactorY})`,
						opacity: '0.1',
						lineHeight: '0.75',
						fontWeight: '700',
						// top: '50%',
						// left: '50%',
					}}
					id="backdrop-text"
				>
					PROJECTS
				</Typography>
				<Typography
					sx={{
						fontSize: '3rem',
						fontWeight: '400',
						marginBottom: '16px',
						zIndex: '1',
					}}
				>
					&emsp;&emsp;&emsp;&emsp;When it comes to web development and front-end
					design, I have only one core principle:{' '}
					<span
						style={{
							fontFamily: 'Rubik',
							fontSize: '3.1rem',
							letterSpacing: '0.1rem',
						}}
					>
						simplicity.
					</span>{' '}
					From design to code, I keep things minimalistic, so that every single
					element is highlighted.
				</Typography>
			</Box>
		</Box>
	);
};

const MoreProjectsStatement = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '75vh',
				position: 'relative',
			}}
		>
			<Typography
				sx={{
					fontSize: '4rem',
					fontFamily: 'Rubik',
					fontWeight: '900',
				}}
			>
				But why stop there?
			</Typography>
			<Box
				sx={{
					width: '50vw',
					textAlign: 'center',
				}}
			>
				<Typography>
					I am also working on many other, non-web-dev, side projects.
					<br></br> This year, I am throwing myself into new waters, so follow
					me along in my journey!
				</Typography>
			</Box>
		</Box>
	);
};

const ProjectPage = () => {
	return (
		<>
			<MissionStatement />
			<Box
				sx={{
					padding: '16px',
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
				}}
			>
				{projects.map((project) => (
					<ProjectPageCard
						key={project.name}
						name={project.name}
						description={project.description}
						year={project.year}
						src={project.src}
					/>
				))}
			</Box>
			<MoreProjectsStatement />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					minHeight: '50vh',
				}}
			>
				{sides.map((project) => (
					<SmallProjectPageCard key={project.name} {...project} />
				))}
			</Box>
			<ContactBlock />
		</>
	);
};

export default ProjectPage;
