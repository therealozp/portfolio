import React, { useEffect } from 'react';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';
import gsap, { Expo, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TextPlugin from 'gsap/dist/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const AboutBlock = () => {
	const Title = styled(Typography)(() => ({
		fontSize: '1.8rem',
		lineHeight: '2rem',
		fontWeight: 'bold',
		fontFamily: 'Inconsolata',
	}));
	const Text = styled(Typography)(() => ({
		fontSize: '1.2rem',
		lineHeight: '2rem',
		fontWeight: '400',
	}));

	useEffect(() => {
		gsap.to('.cursor', {
			opacity: 0,
			ease: Power1.easeInOut,
			repeat: -1,
		});

		const words = ['aboot', 'about me'];

		let textTL = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.aboutTriggerBox',
				},
				delay: 0.5,
			})
			.pause();

		words.forEach((word, index) => {
			if (index != words.length - 1) {
				let tl = gsap.timeline({ yoyo: true, repeat: 1 });
				tl.to('.text', { duration: 0.5, text: word });
				textTL.add(tl);
			} else {
				let tl = gsap.timeline({});
				tl.to('.text', { duration: 1, text: word });
				textTL.add(tl);
			}
		});

		gsap.from('.divider-about', {
			scrollTrigger: {
				trigger: '.divider-about',
			},
			x: -1000,
			ease: Expo.easeInOut,
			duration: 1,
		});

		const sections = document.querySelectorAll('.about-container');

		sections.forEach((section) => {
			if (section.classList.contains('left')) {
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						start: 'top bottom',
						end: 'top top',
						scrub: 0.6,
					},
					borderTopRightRadius: 10,
				});
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						start: 'bottom bottom',
						end: 'bottom top',
						scrub: 0.6,
					},
					borderBottomRightRadius: '700px 700px',
				});
			} else {
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						start: 'top bottom',
						end: 'top top',
						scrub: 0.6,
					},
					borderTopLeftRadius: 10,
				});
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						start: 'bottom bottom',
						end: 'bottom top',
						scrub: 0.6,
					},
					borderBottomLeftRadius: '700px 700px',
				});
			}
		});
	}, []);

	return (
		<Box>
			<Box sx={{ height: '100px' }} />
			<Box
				sx={{
					backgroundColor: '#444c33',
					padding: 5,
					borderTopRightRadius: '700px 700px',
					borderBottomRightRadius: '0 0',
				}}
				className="about-container left"
			>
				<Box sx={{ height: '100vh' }} />
				<Box
					sx={{
						position: 'relative',
						overflow: 'hidden',
						fontSize: '4.5rem',
						display: 'flex',
						fontFamily: 'Simplon Mono Medium Regular',
						fontWeight: '800',
						letterSpacing: '0.1rem',
						height: '20vh',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					className="aboutTriggerBox"
				>
					<Box
						className="text"
						sx={{
							paddingLeft: '1.2vw',
						}}
					></Box>
					<Box
						className="cursor"
						sx={{
							fontWeight: 'bold',
						}}
					>
						_
					</Box>
				</Box>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						overflow: 'hidden',
					}}
				>
					<Typography
						sx={{
							fontSize: '1.5rem',
							fontFamily: 'Montserrat',
							fontWeight: 200,
							alignSelf: 'flex-end',
						}}
					>
						01
					</Typography>
					<Box
						className="divider-about"
						sx={{
							height: '2px',
							backgroundColor: 'white',
							width: '100%',
							borderRadius: '3px',
							marginBottom: '6vh',
						}}
					/>
				</Box>
				<Box sx={{ padding: 5 }}>
					<Title>Nice to meet you!</Title>
					<br />
					<Text>
						I love building cool stuff. Every project is a chance for me to
						build something that I can be proud of. Doesn&apos;t have to be the
						most practical of applications, but as long as I am throwing ideas
						together, I feel alive.
					</Text>
					<br />
					<br />
					<Title>The best projects are the friends we made along the way</Title>
					<br />
					<Text>
						Be it front end web development to low-level data processing, I am
						constantly out exploring new waters. From writing simple Python
						scripts to automate my Arch (btw) workspace to working on full-blown
						machine learning models, I am always looking for new ways to
						challenge myself.
						<br />
					</Text>
					<br />
					<Text>
						I am currently in the works at RANCS to make an automated vehicle
						from scratch, as well as being the data acquisition lead of my
						university&apos;s racing team. For me, curiosity will always lead
						the way, and most importantly:{' '}
						<strong>never letting people know my next move.</strong>
					</Text>
					<br />
					<br />
					<Title>What&apos;s life without trying?</Title>
					<br />
					<Text>
						When I am not online, I am out snapping photos of the city on sports
						bike, or jamming in my bedroom with a guitar. Things gives me the
						adrenaline I need to keep me sane...
						<br />
						...until the next coding session.
					</Text>
				</Box>
				<Box sx={{ height: '50vh' }} />
			</Box>
		</Box>
	);
};

export default AboutBlock;
