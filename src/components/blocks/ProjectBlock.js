import React, { useEffect } from 'react';
import ProjectCard from '../projects/ProjectCard';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Typography from '@mui/material/Typography';

gsap.registerPlugin(ScrollTrigger);
const projects = [
	{
		name: 'Lexi',
		description:
			'Vocabulary web app, utilizes Dictionary API to help English learners in their vocabulary learning.',
		status: 'ready',
		href: 'https://lexi.vercel.app/',
	},
	{
		name: 'VSPACE Marketing Website',
		description:
			'A marketing website for VSPACE, an organization that provides English online courses for Vietnamese students.',
		status: 'ready',
		href: 'https://www.vspace.org.vn/',
	},
	{
		name: 'Cureator',
		description:
			'A medical website, displays symptoms and curates medicine, built-in pharmacy locator',
		status: 'prototype',
		href: 'https://cureator.care/',
	},
	{
		name: 'ChanceMap',
		description:
			'A social media platform where students can find the extracurriculars that they are truly passionate about and discover new opportunities!',
		status: 'unavailable',
		href: 'https://www.chancemap.com/',
	},
	{
		name: 'Excellaca',
		description:
			'Non-profit organization that delivers new knowledge to students through video-based courses.',
		status: 'unavailable',
		href: 'https://excellaca.vercel.app/',
	},
];

const ProjectBlock = () => {
	useEffect(() => {
		const cards = gsap.utils.toArray('.innerBox');
		const innerContent = gsap.utils.toArray('.infoBox');
		const innerButtons = gsap.utils.toArray('.buttonBox');
		const innerDev = gsap.utils.toArray('.developing');

		const projectChars = gsap.SplitText('.projectTitle', {
			type: 'words,chars',
		});
		const chars = projectChars.chars;

		chars.forEach((char) => {
			gsap.to(char, {
				scrollTrigger: {
					trigger: char,
				},
				duration: 0.5,
				opacity: 0,
				y: 80,
				rotationX: 180,
				stagger: 0.01,
			});
		});

		cards.forEach((card, i) => {
			gsap.to(card, {
				scrollTrigger: {
					trigger: card,
					// markers: true,
					// start: '-40 center',
					// end: '',
					toggleActions: 'play none play reset',
				},
				x: -1150,
				duration: 1.1,
			});
			gsap.to(innerContent[i], {
				scrollTrigger: {
					trigger: card,
					// markers: true,
					// start: '-40 center',
					// end: '',
					toggleActions: 'play none play reset',
				},
				y: 0,
				delay: 0.55,
				duration: 0.5,
			});
			gsap.to(innerButtons[i], {
				scrollTrigger: {
					trigger: card,
					// markers: true,
					// start: '-40 center',
					// end: '',
					toggleActions: 'play none play reset',
				},
				y: 0,
				delay: 0.6,
				duration: 0.4,
			});
			gsap.to(innerDev[i], {
				scrollTrigger: {
					trigger: card,
					// markers: true,
					// start: '-40 center',
					// end: '',
					toggleActions: 'play none play reset',
				},
				y: 0,
				delay: 0.6,
				duration: 0.4,
			});
		});

		gsap.from('.projectContainer', {
			scrollTrigger: {
				trigger: '.projectContainer',
				start: 'top bottom',
				end: 'top top',
				scrub: 0.6,
			},
			scale: 0.9,
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
			borderBottomRightRadius: '100px 100px',
			borderBottomLeftRadius: '100px 100px',
		});
	}, []);
	return (
		<Box
			sx={{
				width: '100%',
				backgroundColor: (theme) => theme.palette.blue.dark,
				borderRadius: '100px 100px 40px 40px',
			}}
			className="projectContainer"
		>
			<Box sx={{ height: '50vh' }}>
				<Typography className="projectTitle">SOME OF MY WORKS</Typography>
			</Box>
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
					/>
				))}
			</Box>
			<Box sx={{ height: '25vh' }} />
		</Box>
	);
};

export default ProjectBlock;
