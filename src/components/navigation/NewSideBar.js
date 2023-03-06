import React from 'react';
import { Box, Drawer, IconButton, Divider } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from 'next/link';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomShuffle = ({ name, value }) => {
	let iterations = 0;
	const text = value;
	const interval = setInterval(() => {
		document.getElementById(name).innerHTML = document
			.getElementById(name)
			.innerHTML.split('')
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
	}, 30);
};

const HackerText = ({ name, value }) => {
	return (
		<Link href="" passHref>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '80%',
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
				onMouseOver={() => randomShuffle({ name, value })}
			>
				<p
					id={name}
					style={{
						fontFamily: 'Major Mono Display, monospace',
						fontSize: 'clamp(1.5rem, 2vw, 2rem)',
						fontWeight: '500',
						letterSpacing: '5px',
						color: 'inherit',
					}}
				>
					{value}
				</p>
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
					width: '30vw',
					height: '95vh',
					margin: '2.5vh 1vw',
					backgroundColor: '#171C27',
					borderRadius: '8px',
				},
			}}
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
				<HackerText value="HOME" name="test" />
				<HackerText value="PROJECTS" name="proj" />
				<HackerText value="ABOUT ME" name="me" />
			</Box>
		</Drawer>
	);
};

export default NewSideBar;
