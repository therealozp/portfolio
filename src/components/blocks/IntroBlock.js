import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import gsap, { Expo, Elastic } from 'gsap';

const IntroBlock = ({ setFinished }) => {
	useEffect(() => {
		const tline = gsap.timeline({
			onComplete: () => {
				setFinished(true);
				console.log('finished');
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
			x: 400,
			ease: Expo.easeOut,
			duration: 0.5,
			delay: 0.5,
		});
	}, []);

	return (
		<Box>
			<Box
				sx={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				className="intro"
			>
				<Typography
					sx={{
						fontFamily: 'Rubik',
						fontSize: '6rem',
						color: (theme) => theme.palette.text.greenCream,
						letterSpacing: 2,
						fontWeight: '900',
					}}
					className="hi"
				>
					hello !
				</Typography>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Rubik',
							fontSize: '6rem',
							color: (theme) => theme.palette.text.greenCream,
							letterSpacing: 2,
							fontWeight: '900',
						}}
						className="i"
					>
						i
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Rubik',
							fontSize: '6rem',
							fontWeight: '900',
						}}
					>
						&nbsp;
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Rubik',
							fontSize: '6rem',
							color: (theme) => theme.palette.text.greenCream,
							letterSpacing: 2,
							fontWeight: '900',
						}}
						className="am"
					>
						am
					</Typography>
				</Box>
				<Typography
					sx={{
						fontFamily: 'Rubik',
						fontSize: '6rem',
						color: (theme) => theme.palette.text.greenCream,
						letterSpacing: 2,
						fontWeight: '900',
					}}
					className="khang"
				>
					khang.
				</Typography>
			</Box>
		</Box>
	);
};

export default IntroBlock;
