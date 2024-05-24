'use client';
import React, { useRef } from 'react';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from 'next/link';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const HackerText = ({ name, value, href }) => {
	const textRef = useRef(null);
	const shuffle = () => {
		let iterations = 0;
		const text = value;
		const interval = setInterval(() => {
			if (textRef && textRef.current) {
				textRef.current.innerHTML = textRef.current.innerHTML
					.split('')
					.map((letter, index) => {
						if (index < iterations) {
							return text[index];
						}
						return letters[Math.floor(Math.random() * 26)];
					})
					.join('');
				if (iterations === text.length) {
					clearInterval(interval);
				}
				iterations += 1 / 2;
			}
		}, 30);
	};

	return (
		<Link href={href}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '80%',
					height: '100px',
					margin: 2,
					backgroundColor: 'transparent',
					borderRadius: '8px',
					color: '#FAF0F1',
					'&:hover': {
						backgroundColor: (theme) => theme.palette.text.primary,
						color: '#171C27',
						cursor: 'pointer',
					},
					transition: 'all 0.3s ease-in-out',
				}}
				onMouseOver={() => shuffle()}
			>
				<Typography
					id={name}
					ref={textRef}
					sx={{
						fontFamily: 'monospace',
						fontSize: 'clamp(1.5rem, 3vw, 3rem)',
						// fontWeight: '900',
						letterSpacing: '5px',
						color: 'inherit',
						textTransform: 'lowercase',
						pointerEvents: 'none',
					}}
				>
					{value}
				</Typography>
			</Box>
		</Link>
	);
};

const NewSideBar = ({ open, setOpen }) => {
	return (
		<Drawer
			open={open}
			onClose={() => setOpen(false)}
			PaperProps={{
				sx: {
					height: '95vh',
					margin: ['2.5vh 5vw', '2.5vh 4vw', '2.5vh 1vw'],
					backgroundColor: '#171C27',
					borderRadius: '8px',
					width: ['90vw', '80vw', '60vw', '40vw', '30vw'],
				},
			}}
			ModalProps={{
				sx: {},
			}}
			disableScrollLock
		>
			<IconButton
				onClick={() => setOpen(false)}
				sx={{ width: '60px', height: '60px', margin: '8px' }}
			>
				<CloseRoundedIcon sx={{ color: 'white' }} />
			</IconButton>

			<Box
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<HackerText value="HOME" name="test" href="/" />
				<HackerText value="PROJECTS" name="proj" href="/projects" />
				{/* <HackerText value="ABOUT ME" name="me" href='/about'/> */}
			</Box>
		</Drawer>
	);
};

export default NewSideBar;
