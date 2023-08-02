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
						fontFamily: 'Rubik',
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
						I am a first-year university student @ University of South Florida,
						majoring in Computer Science. With a passion for telling stories
						through front-end web development, I am always looking for new
						things to learn and experiment with. Now, I am currently in my
						personal lab tinkering with 3D graphics, animation, and machine
						learning.
					</Text>
					<br />
					<br />
					<br />

					<Title>It&apos;s about the journey</Title>
					<br />

					<Text>
						It is a dream, but I want to become a person who can implement
						machine learning as easily as writing a simple web app. It is all
						about the journey for me. First, I was given a computer. Then, I
						discovered Python. And THEN, I discovered HackerRank. And the rest
						is history.
						<br />
					</Text>
					<br />
					<Text>
						For now, web development is more of a hobby, but I am always looking
						out for new opportunities to explore. My main interests lie in the
						field of Artificial Intelligence and Machine Learning, and in the
						age of ChatGPT, I feel the need to learn more about it.
					</Text>
					<br />
					<br />
					<br />

					<Title>Even more about me</Title>
					<br />

					<Text>
						When I am not online, I am out adventuring with his camera
						(conveniently thrifted at the price of $100), speeding down the
						roads with his sports bike, or jamming in my bedroom with a guitar.
						Things like these keep me sane until the next session of coding.
					</Text>
				</Box>
				<Box sx={{ height: '50vh' }} />
			</Box>
		</Box>
	);
};

export default AboutBlock;
