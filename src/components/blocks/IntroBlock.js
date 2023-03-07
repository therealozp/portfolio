import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography, Avatar } from '@mui/material';
import gsap, { Expo, Elastic } from 'gsap';

const IntroBlock = ({ setFinished }) => {
	useEffect(() => {
		const tline = gsap.timeline();
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
		});
		return () => {
			setFinished(true);
		};
	});

	return (
		<>
			<Box sx={{}}>
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
							fontFamily: 'Montserrat',
							fontSize: '5rem',
							color: (theme) => theme.palette.text.creme,
							wordSpacing: 2,
						}}
						className="hi"
					>
						HELLO!
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
								fontFamily: 'Montserrat',
								fontSize: '5rem',
								color: (theme) => theme.palette.text.creme,
								wordSpacing: 2,
							}}
							className="i"
						>
							I
						</Typography>
						<Typography
							sx={{
								fontFamily: 'Montserrat',
								fontSize: '5rem',
							}}
						>
							&nbsp;
						</Typography>
						<Typography
							sx={{
								fontFamily: 'Montserrat',
								fontSize: '5rem',
								color: (theme) => theme.palette.text.creme,
								wordSpacing: 2,
							}}
							className="am"
						>
							AM
						</Typography>
					</Box>
					<Typography
						sx={{
							fontFamily: 'Montserrat',
							fontSize: '5rem',
							color: (theme) => theme.palette.text.creme,
							wordSpacing: 2,
						}}
						className="khang"
					>
						KHANG.
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default IntroBlock;
