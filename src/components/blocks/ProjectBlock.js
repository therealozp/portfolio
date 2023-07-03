import React, { useEffect, useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Typography from '@mui/material/Typography';
import TitleBackground from '../fillers/TitleBackground';
import anime from 'animejs';
import RotatingText from '../fillers/RotatingText';

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
	const [rotateShowing, setRotateShowing] = useState(true);
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
				x: -1800,
				duration: 1.7,
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
	}, []);

	const title = 'my projects';

	const handleClick = () => {
		setRotateShowing(false);
		anime.timeline().add({
			targets: '.projectTitle',
			translateY: -100,
			opacity: 1,
			easing: 'easeOutExpo',
			delay: (el, i) => 20 * i,
		});
	};
	return (
		<Box
			sx={{
				scale: '0.9',
				width: '100%',
				backgroundColor: (theme) => theme.palette.blue.dark,
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
				}}
			>
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
			<TitleBackground>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						transform: 'translateY(100px)',
					}}
					// className="projTitleContainer"
				>
					{title.split('').map((char, i) => {
						// console.log(char);

						return (
							<Typography
								className={`projectTitle`}
								key={`projectTitle-${i}`}
								sx={{
									fontFamily: 'Montserrat',
									fontSize: '4rem',
									letterSpacing: '0.1 rem',
									opacity: 0,
									fontWeight: '900',
								}}
							>
								{/\s/.test(char) ? '\xA0' : char}
							</Typography>
						);
					})}
				</Box>
				{rotateShowing && (
					<RotatingText
						text="looking for something? - "
						radius={75}
						onClick={handleClick}
					/>
				)}
			</TitleBackground>
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
					/>
				))}
			</Box>
			<Box sx={{ height: '100vh' }} />
		</Box>
	);
};

export default ProjectBlock;
