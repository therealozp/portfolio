import React, { useEffect } from 'react';
import Navbar from '../components/navigation/Navbar';
import IntroBlock from '../components/blocks/IntroBlock';
import ProjectBlock from '../components/blocks/ProjectBlock';
import AboutBlock from '../components/blocks/AboutBlock';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import gsap, { Expo, Power1 } from 'gsap';

// import { Timeline } from 'gsap/all';
const HomePage = () => {
	useEffect(() => {
		const tl = gsap.timeline();
		tl.from('.kore', {
			y: -100,
			opacity: 0,
			duration: 0.5,
			delay: 0.75,
			ease: Expo.easeInOut,
		});
		tl.from('.ga', {
			y: -100,
			opacity: 0,
			duration: 0.5,
			ease: Expo.easeInOut,
		});

		tl.from('.khang', {
			y: -100,
			opacity: 0,
			duration: 0.5,
			ease: Expo.easeInOut,
		});
		tl.from('.dot1', {
			y: -100,
			opacity: 0,
			duration: 0.25,
			ease: Expo.easeInOut,
		});
		tl.from('.dot2', {
			y: -100,
			opacity: 0,
			duration: 0.25,
			ease: Expo.easeInOut,
		});
		tl.from('.dot3', {
			y: -100,
			opacity: 0,
			duration: 0.25,
			ease: Expo.easeInOut,
			delay: 0.25,
		});
		tl.from('.da', {
			y: -100,
			opacity: 0,
			duration: 0.5,
			ease: Expo.easeInOut,
		});
		tl.to('.overlay', {
			y: '-100%',
			opacity: 0,
			duration: 0.5,
			delay: 1,
			ease: Power1.easeInOut,
		});
	}, []);
	return (
		<>
			<Box
				className="overlay"
				sx={{
					position: 'absolute',
					height: '100%',
					width: '100%',
					zIndex: 9999,
					background: (theme) => theme.palette.blue.main,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box sx={{ display: 'flex', marginLeft: '6vw' }}>
					<Typography
						variant="h1"
						sx={{
							color: 'black',
							marginRight: '32px',
							fontWeight: 'bold',
						}}
						className="kore"
					>
						これ
					</Typography>
					<Typography
						variant="h1"
						sx={{
							color: 'black',
							marginRight: '24px',
							fontWeight: 'bold',
						}}
						className="ga"
					>
						が
					</Typography>

					<Typography
						variant="h1"
						sx={{
							color: 'black',
							marginRight: '32px',
							fontWeight: 'bold',
						}}
						className="khang"
					>
						Khang
					</Typography>
					<Typography
						variant="h1"
						sx={{
							color: 'black',
							marginRight: '24px',
						}}
						className="dot1"
					>
						。
					</Typography>
					<Typography
						variant="h1"
						sx={{
							color: 'black',
							marginRight: '24px',
						}}
						className="dot2"
					>
						。
					</Typography>
					<Typography
						variant="h1"
						sx={{
							color: 'black',
							marginRight: '32px',
						}}
						className="dot3"
					>
						。
					</Typography>
					<Typography
						variant="h1"
						sx={{
							color: 'black',
							marginRight: '32px',
							fontWeight: 'bold',
						}}
						className="da"
					>
						だ。
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', marginTop: '20px', marginLeft: '60vw' }}>
					<Typography
						variant="h4"
						sx={{
							marginRight: '20px',
						}}
						className="kore"
					>
						This is...
					</Typography>
					<Typography variant="h4" className="khang">
						Khang.
					</Typography>
				</Box>
			</Box>
			<Box sx={{ padding: '0 64px' }}>
				<Navbar />
				<IntroBlock />
				<ProjectBlock />
				<AboutBlock />
			</Box>
		</>
	);
};

export default HomePage;
