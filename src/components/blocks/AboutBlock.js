import React, { useEffect } from 'react';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';
import NameTags from '../navigation/NameTags';
import gsap, { Expo, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const AboutBlock = () => {
	const Title = styled(Typography)(({ theme }) => ({
		fontSize: '1.8rem',
		lineHeight: '2rem',
		fontWeight: 'bold',
	}));
	const Text = styled(Typography)(({ theme }) => ({
		fontSize: '1.2rem',
		lineHeight: '2rem',
	}));
	useEffect(() => {
		const sections = document.querySelectorAll('.about-container');
		sections.forEach((section) => {
			if (section.classList.contains('left')) {
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						markers: true,
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
						markers: true,
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
		<>
			<Box sx={{ height: '100px' }} />

			<Box
				sx={{
					width: '50vw',
					backgroundColor: '#325886',
					padding: 10,
					borderTopRightRadius: '700px 700px',
					borderBottomRightRadius: '0 0',
				}}
				className="about-container left"
			>
				<Box sx={{ height: '50vh' }} />
				<Title>Nice to meet you!</Title>
				<br />

				<Text>
					Khang is a first-year university student @ University of South
					Florida, majoring in Computer Science, and with a passion for telling
					stories through front-end web development. He is always looking for
					new things to learn and experiment with, and is currently in his lab
					with 3D graphics, animation, and machine learning.
				</Text>
				<br />
				<br />
				<br />

				<Title>2b || !2b</Title>
				<br />

				<Text>
					It is a dream, but he wants to become a person who can implement
					machine learning as easily as writing a simple web app. It is all
					about the journey for him: first, he was given a computer. Then, he
					discovered Python. And THEN, he discovered HackerRank. And the rest is
					history.
					<br />
				</Text>
				<br />
				<Text>
					For now, web development is more of a hobby, but he is always looking
					out for new opportunities to explore. His main interests lies in the
					field of Artificial Intelligence and Machine Learning, and in the age
					of ChatGPT, he feels the need to learn more about it.
				</Text>
				<br />
				<br />
				<br />

				<Title>Even more about me</Title>
				<br />

				<Text>
					When he is not online, he is out venturing with his camera
					(conveniently thrifted at the price of $100), speeding down the roads
					with his sports bike, or jamming in his bedroom with a guitar. Things
					like these keep him sane until the next session of coding.
				</Text>
				<Box sx={{ height: '50vh' }} />
			</Box>
		</>
	);
};

export default AboutBlock;
