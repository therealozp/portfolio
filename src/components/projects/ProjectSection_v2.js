'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { gsap } from 'gsap';
import Draggable from 'gsap/dist/Draggable';
import Image from 'next/image';
import { verticalLoop } from './verticalLoop';

gsap.registerPlugin(Draggable);

const projects = [
	{
		id: 1,
		name: 'tldvuwen',
		fullName: 'the last data structures visualizer you will ever need',
		image: '/images/dsa-viz/dsa-viz-astar.gif',
		description:
			'Vite + raw data structures knowledge. a data structures visualizer that is actually interactive, and a pathfinder that I am especially proud of.',
		status: 'deployed',
		url: 'https://visual-dsa.vercel.app/',
		date: '01/2024 - present',
		imageAlt: 'a GIF of the A-star pathfinding algorithm on a grid',
	},
	{
		id: 2,
		name: 'LegAI',
		fullName: 'LegAI',
		image: 'N/A',
		description:
			'an AI retrieval system for legal documents. per-case information retrieval with Chroma and Postgres, complete with a NextJS frontend. runner up for Morgan & Morgan AI challenge.',
		status: 'github',
		url: '',
		date: '10/2023',
	},
	{
		id: 9,
		name: 'Cash Clams',
		fullName: 'Cash Clams',
		image: '/images/cash-clams/cash-clams.png',
		description:
			'ShellHacks hackathon submission. a finance literacy app that allows user to pick a theme, and develop 10 section courses on that very theme to learn finance concepts. includes a quiz module.',
		status: 'github',
		url: 'https://github.com/therealozp/cash-clams',
		date: '09/2023',
		imageAlt: 'a screenshot of the home page of the Cash Clams app.',
	},
	{
		id: 3,
		name: 'ARIS',
		fullName: 'ARIS Platform',
		image: 'N/A',
		description:
			"a custom 3D editor for 3D models using ThreeJS that allows for scene editing. AR viewer created with Google's model-viewer.",
		status: 'deployed',
		url: 'https://arisplatform.io/',
		date: '06/2023 - present',
	},
	{
		id: 4,
		name: 'ChanceMap',
		fullName: 'ChanceMap',
		image: '/images/chancemap/chancemap.png',
		description:
			'a social media for college students and high school students who are looking for extracurricular opportunities. 1000+ users in first iteration.',
		status: 'down',
		url: 'https://chancemap.com/',
		date: '06/2021 - 06/2022',
		imageAlt: 'a screenshot of the home page of the ChanceMap app.',
	},
	{
		id: 5,
		name: 'Cureator',
		fullName: 'Cureator',
		image: '/images/cureator/Cureator.png',
		description:
			'a medicine and pharmacy finder for the Vietnamese market. includes local and international medicine, breakdowns of causes and common symptoms. made as a PWA with NextJS and custom backend with GraphQL and Go.',
		status: 'down',
		url: 'https://cureator.vercel.app/',
		date: '06/2021 - 10/2021',
		imageAlt: 'a design layout of multiple different screens of Cureator.',
	},
	{
		id: 6,
		name: 'Excellaca',
		fullName: 'Excel Academy',
		image: '/images/excellaca/excellaca-mockup.png',
		description:
			'a learning platform that is made by students, for students. includes video courses, a discussion community, and other nifty features. 100+ weekly users when active.',
		status: 'down',
		url: 'https://excellaca.org',
		date: '06/2021 - 10/2022',
		imageAlt: 'a preview of the Excellaca website.',
	},
	{
		id: 7,
		name: 'VSPACE Ed',
		fullName: 'VSPACE Education',
		image: '/images/vspace/vspace-img.png',
		description:
			'marketing website made for an educational institution that provides English courses to students of all abilities. 5000+ visits in first month launch of website. Framer Animations, Figma, and NextJS.',
		status: 'down',
		url: 'https://vspace.org.vn',
		date: '06/2021 - 10/2021',
		imageAlt: 'a snippet of the VSPACE marketing website.',
	},
	{
		id: 8,
		name: 'Lexi',
		fullName: 'Lexi',
		image: '/images/lexi/landing.png',
		description:
			'a quiz app that helps you learn English vocabulary. 1000+ users in first month of launch.',
		status: 'deployed',
		url: 'https://lexi.vercel.app',
		date: '01/2021',
		imageAlt: 'a screenshot of the landing page of the Lexi app.',
	},
	{
		id: 10,
		name: 'Queb',
		fullName: 'Queb',
		image: '/images/queb/queb.png',
		description:
			'a platform that matches prospective mentors and students through a strict set of criteria. built the recommendation system, and the feedback framework. won 3rd prize in city-wide scientific research competition.',
		status: 'down',
		url: '',
		date: '03/2022',
		imageAlt: 'an assortment of pages on Queb.',
	},
];

const ProjectSection = () => {
	const [selectedProject, setSelectedProject] = useState(0);
	// const [timeline, setTimeline] = useState(null);
	const timelineRef = useRef(null);

	const handleProjectChange = (index) => {
		setSelectedProject(index);
		timelineRef.current.toIndex(index, { duration: 1, ease: 'power1.inOut' }); // Reduced duration for snappier animation
	};

	useEffect(() => {
		if (!timelineRef.current) {
			const projectPageNames = gsap.utils.toArray('.projectPageName');
			const tl = verticalLoop(projectPageNames, {
				center: true,
				paused: true,
				draggable: true,
				intertia: false,
			});
			timelineRef.current = tl;
		}
	});

	return (
		<Grid
			display="flex"
			alignItems="center"
			p={2}
			height="90vh"
			container
			overflow="hidden"
		>
			<Grid
				sx={{
					height: '75vh',
				}}
				item
				xs={6}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '80vh',
						// overflowY: 'hidden',
					}}
				>
					{projects.map((project, index) => (
						<Typography
							key={project.name}
							variant="h1"
							sx={{
								cursor: 'pointer',
								fontFamily: 'Simplon Mono Medium Regular',
								textTransform: 'uppercase',
								fontWeight: '700',
								lineHeight: '1.4',
								letterSpacing: '0.05em',
								filter:
									selectedProject === index
										? 'brightness(1)'
										: 'brightness(0.6)',
								transition: 'filter 0.3s ease-in-out',
								fontSize: 'clamp(1.5rem, 6vw, 7rem)',
							}}
							className="projectPageName"
							onClick={() => handleProjectChange(index)}
						>
							{project.name}
						</Typography>
					))}
				</Box>
			</Grid>
			<Grid xs={6} item>
				<Box
					width="100%"
					height="100%"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box
						sx={{
							position: 'relative',
							height: '40vh',
							aspectRatio: '16/9',
							marginBottom: '32px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{projects[selectedProject].image !== 'N/A' ? (
							<Image
								src={projects[selectedProject].image}
								layout="fill"
								objectFit="cover"
								// placeholder="blur"
								alt={projects[selectedProject].imageAlt}
							/>
						) : (
							<Typography sx={{ fontFamily: 'monospace' }}>
								this project doesn&apos;t have an image ╥ᆺ╥； (yet!)
							</Typography>
						)}
					</Box>
					<Box width="100%" height="30vh">
						<Typography
							variant="h3"
							sx={{ fontFamily: 'Simplon Mono Medium Regular' }}
						>
							{projects[selectedProject].fullName}
						</Typography>
						<Typography sx={{ fontFamily: 'monospace', fontSize: '1.4rem' }}>
							{projects[selectedProject].description}
						</Typography>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProjectSection;
