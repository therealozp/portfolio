import React from 'react';
import { Box, Drawer } from '@mui/material';

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
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '5px',
			}}
		>
			<p
				id={name}
				onMouseOver={() => randomShuffle({ name, value })}
				style={{
					fontFamily: 'Inconsolata',
					fontSize: 'clamp(1.5rem, 2vw, 2rem)',
					fontWeight: '500',
					letterSpacing: '5px',
				}}
			>
				{value}
			</p>
		</Box>
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
				},
			}}
		>
			<Box>
				<HackerText value="HOME" name="test" />
				<HackerText value="PROJECTS" name="proj" />
				<HackerText value="ABOUT ME" name="me" />
			</Box>
		</Drawer>
	);
};

export default NewSideBar;
