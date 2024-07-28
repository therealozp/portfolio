import React from 'react';
import {
	ProjectPageCard,
	SmallProjectPageCard,
} from '../components/projects/ProjectPageCard';
import { Box, Typography, Grid } from '@mui/material';
import ContactBlock from '../components/blocks/ContactBlock';
import ScrollingText from '../components/fillers/ScrollingText';
import UnknownPleasures from '../components/fillers/UnknownPleasures';
import Backdrop from '../components/fillers/Backdrop';
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
					fontSize: '3rem',
					fontFamily: 'Rubik',
					fontWeight: '900',
					textAlign: 'center',
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

const ProjectIntro = () => {
	const RotationWrapper = ({ children, rot = 0, trX = '0%', trY = '0%' }) => {
		return (
			<Box
				sx={{
					transform: `rotate(${rot}deg) translateX(${trX}) translateY(${trY})`,
					position: 'static',
				}}
			>
				{children}
			</Box>
		);
	};
	const textSize = '4vw';
	const text1 = 'じぎょう';
	const text3 = 'les projets';
	const text4 = 'projekte';
	return (
		<Box height="100vh" overflow="hidden">
			<RotationWrapper rot={-20} trX="-50%" trY="-300%">
				<ScrollingText
					text={text1}
					fontSize={textSize}
					textColor="#181616"
					bgColor="#f7f4ec"
					count={10}
					tapeWidth="200vw"
				/>
			</RotationWrapper>
			<RotationWrapper rot={12} trX="-10%" trY="100%">
				<ScrollingText
					text={text3}
					fontSize={textSize}
					textColor="#181616"
					bgColor="#f7f4ec"
					count={7}
					tapeWidth="200vw"
					reverse
				/>
			</RotationWrapper>
			<RotationWrapper rot={-5} trX="-10%" trY="500%">
				<ScrollingText
					text={text4}
					fontSize={textSize}
					textColor="#181616"
					bgColor="#f7f4ec"
					count={9}
					tapeWidth="200vw"
					reverse
				/>
			</RotationWrapper>
		</Box>
	);
};

const ProjectPage = () => {
	return (
		<>
			<Box>
				<Backdrop />
				<Box position="absolute" zIndex={2}>
					<ProjectIntro />
				</Box>
				<Box zIndex={3}>
					<UnknownPleasures />
				</Box>
			</Box>
			<Grid
				sx={{
					padding: '16px',
				}}
				container
			>
				{projects.map((project) => (
					<Grid key={project.name} item xs={6} md={4}>
						<ProjectPageCard
							name={project.name}
							description={project.description}
							year={project.year}
							src={project.src}
						/>
					</Grid>
				))}
			</Grid>
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
			<Box height="15vh"></Box>
			<ContactBlock />
		</>
	);
};

export default ProjectPage;
