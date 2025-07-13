import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Box, Typography } from '@mui/material';
import ProjectCard from '../projects/ProjectCard';
import ScrollingText from '../fillers/ScrollingText';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);
const projects = [
	{
		name: 'diminshed Java compiler',
		description:
			'a fully functional for a mini-Java language, written from scratch using C. supports functions, classes, inheritance, and more.',
		status: 'ready',
		date: 'Jan - Apr 2025',
	},
	{
		name: 'fingerprint generator',
		description:
			'a fingerprint generator based on Sfinge to generate fingerprints via a differentiable process, implemented using PyTorch, with a focus on realism.',
		date: 'May 2025 - Present',
		status: 'in development',
	},
	{
		name: 'Resume Optim-AI-zer',
		description:
			'a local Ollama-powered resume optimization tool that analyzes resumes and job descriptions for maximum tailoring power, with a focus on ATS compatibility.',
		date: 'Jan 2025 - Present',
		status: 'in development',
	},
	{
		name: 'Lazy3D',
		description:
			'a 3D model generator that uses ControlNet and Gemini Flash to generate 3D render images from user sketches, and TRELLIS for GLTF model generation.',
		status: 'completed',
		date: 'Apr 2025',
	},
	{
		name: 'the last data structures visualizer you will ever need',
		description:
			'a data structures visualizer that is so good, you will never need another one. complete with data visualizers and a pathfinding sandbox!',
		status: 'ready',
		href: 'https://visual-dsa-theta.vercel.app/',
		date: 'Jan 2024',
	},
	{
		name: 'ARIS AR Toolkit',
		description:
			'An AR viewer implemented with model-viewer and AR.js that allows viewing GLTF models in AR, with an optimized scene editing experience and asset bar.',
		status: 'prototype',
		date: 'Jun 2023 - Jun 2024',
	},
	{
		name: 'Cureator',
		description:
			'A medical service finding service. Allows searching for symptoms and curates medicine, with built-in pharmacy locator provided by Maps API.',
		status: 'ready',
		href: 'https://cureator.care/',
		date: '2022',
	},
	{
		name: 'Lexi',
		description:
			'Vocabulary web app, utilizes Oxford Dictionary API to help English learners in their vocabulary learning.',
		status: 'ready',
		href: 'https://lexi.vercel.app/',
		date: '2022',
	},
];

const ProjectBlock = () => {
	useEffect(() => {
		gsap.to('.projectContainer', {
			scrollTrigger: {
				trigger: '.projectContainer',
				start: 'top bottom',
				end: 'top top',
				scrub: 0.6,
			},
			scale: 1,
			borderTopRightRadius: 10,
			borderTopLeftRadius: 10,
		});

		gsap.to('.projectContainer', {
			scrollTrigger: {
				trigger: '.projectContainer',
				start: 'bottom bottom',
				end: 'bottom top',
				scrub: 0.6,
			},
			borderBottomRightRadius: '200px 200px',
			borderBottomLeftRadius: '200px 200px',
		});

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	}, []);

	return (
		<Box
			sx={{
				scale: '0.9',
				width: '100%',
				backgroundColor: '#172d36',
				borderRadius: '200px 200px 40px 40px',
				display: 'flex',
				// justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				// padding: '16px',
			}}
			className="projectContainer"
		>
			<Box
				sx={{
					height: '150vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Box display={'flex'} alignItems={'center'} mb="20vh">
					<Box
						sx={{
							width: '35vw',
							height: '2px',
							backgroundColor: (theme) => `${theme.palette.text.creme}`,
						}}
					/>
					<Typography
						sx={{
							// fontFamily: 'Montserrat',
							fontSize: '4rem',
							fontWeight: '900',
							letterSpacing: '0.1rem',
							color: (theme) => theme.palette.text.creme,
							margin: '0 3vw',
						}}
					>
						02
					</Typography>
					<Box
						sx={{
							width: '35vw',
							height: '2px',
							backgroundColor: (theme) => `${theme.palette.text.creme}`,
						}}
					/>
				</Box>
				<Box>
					<Typography
						fontFamily={'monospace'}
						fontSize={'1.5rem'}
						sx={{ opacity: 0.7 }}
					>
						- so, what do you do in your free time?
						<br /> - ...what free time?
					</Typography>
				</Box>
			</Box>
			<ScrollingText
				reverse
				text="projects"
				count={4}
				fontFamily="Vanguard Extra"
				textTransform="uppercase"
				fontSize="max(10vh, 7vw)"
				padding="0 0 8px 0"
			/>
			<ScrollingText
				text="projects"
				tapeHeight="max(120px, max-content)"
				count={4}
				fontFamily="Vanguard Extra"
				textTransform="uppercase"
				fontSize="max(10vh, 7vw)"
				padding="0 0 8px 0"
			/>
			<ScrollingText
				reverse
				text="projects"
				tapeHeight="max(120px, max-content)"
				count={4}
				fontFamily="Vanguard Extra"
				textTransform="uppercase"
				fontSize="max(10vh, 7vw)"
				padding="0 0 8px 0"
			/>

			<Box sx={{ height: '50vh' }} />
			<Box
				sx={{
					// width: '100vw',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{projects.map((d, i) => (
					<ProjectCard
						name={d.name}
						description={d.description}
						key={`card-${i}`}
						href={d.href}
						status={d.status}
						index={i}
						date={d.date}
					/>
				))}
			</Box>
			<Typography fontFamily={'monospace'} variant="h5" marginTop="10vh">
				check out my other works <Link href="/projects">here!</Link>
			</Typography>
			<Box sx={{ height: '100vh' }} />
		</Box>
	);
};

export default ProjectBlock;
