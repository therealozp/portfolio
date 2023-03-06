import React, { useEffect } from 'react';
import ProjectCard from '../projects/ProjectCard';
import { Box } from '@mui/material';
import NameTags from '../navigation/NameTags';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
	}, []);
	return (
		<Box
			sx={{
				// width: '100vw',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Box>
				<NameTags sx={{ marginLeft: '-64px' }}>{'<my-projects>'}</NameTags>
				<Box>
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
				<NameTags sx={{ marginLeft: '-64px' }}>{'</my-projects>'}</NameTags>
			</Box>
		</Box>
	);
};

export default ProjectBlock;
``;
