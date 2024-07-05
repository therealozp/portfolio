import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import gsap, { Expo, Elastic } from 'gsap';

const GreetingText = ({ children, className }) => {
	return (
		<Typography
			sx={{
				fontFamily: 'Rubik',
				fontSize: 'clamp(2rem, 7vw, 7rem)',
				fontWeight: '900',
				color: (theme) => theme.palette.text.greenCream,
				letterSpacing: 2,
				maxWidth: '100%',
				textAlign: 'center',
			}}
			className={className}
		>
			{children}
		</Typography>
	);
};

const IntroBlock = ({ setFinished }) => {
	useEffect(() => {
		// dynamically find the offset
		const intro = document.querySelector('#intro-block');
		const introRect = intro.getBoundingClientRect();
		const introCenter = introRect.x + introRect.width / 2;
		const viewportXCenter = window.innerWidth / 2;
		const offset = viewportXCenter - introCenter;
		// console.log('center of intro block located at: ', introCenter);
		// console.log('center of viewport located at: ', viewportXCenter);
		// im not too sure why but the website WILL break without this line
		console.log('the offset is: ', offset);
		const tline = gsap.timeline({
			onComplete: () => {
				setFinished(true);
				// console.log('finished');
			},
		});
		tline.from('.hi', {
			y: 100,
			duration: 0.5,
			ease: Elastic.easeOut.config(1.1, 0.4),
			opacity: 0,
			delay: 0.5,
		});
		tline.from('.i', {
			y: 100,
			duration: 0.5,
			ease: Expo.easeInOut,
			opacity: 0,
		});
		tline.from('.am', {
			y: 100,
			duration: 0.25,
			ease: Expo.easeInOut,
			opacity: 0,
			delay: 0.2,
		});
		tline.from('.khang', {
			y: 100,
			duration: 0.5,
			ease: Expo.easeInOut,
			opacity: 0,
		});
		tline.from('.intro', {
			x: offset,
			ease: Expo.easeOut,
			duration: 0.5,
			delay: 0.5,
		});
	}, []);
	// useEffect(() => {
	// 	console.log(screen.width);
	// 	const center = screen.width / 2;
	// });
	return (
		<Box
			sx={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className="intro"
			id="intro-block"
		>
			<GreetingText className="hi">hello ✌️</GreetingText>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<GreetingText className="i">i</GreetingText>
				<GreetingText>&nbsp;</GreetingText>
				<GreetingText className="am">am</GreetingText>
			</Box>
			<GreetingText className="khang">khang</GreetingText>
		</Box>
	);
};

export default IntroBlock;
