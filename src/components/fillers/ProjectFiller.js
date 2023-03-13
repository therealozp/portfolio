import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';

const Horizontal = ({ ...props }) => {
	const { sx } = props;
	return (
		<Box
			className="horizontalLine"
			sx={{
				height: '1px',
				width: '95%',
				backgroundColor: (theme) => theme.palette.yellow.cream,
				...sx,
				position: 'absolute',
			}}
		/>
	);
};

const Vertical = ({ ...props }) => {
	const { sx } = props;
	return (
		<Box
			className="verticalLine"
			sx={{
				height: '95%',
				width: '1px',
				backgroundColor: (theme) => theme.palette.yellow.cream,
				margin: '0 20px',
				// rotate: '90deg',
				position: 'absolute',
				...sx,
			}}
		/>
	);
};

const ProjectFiller = () => {
	const vertcount = Array(30).fill(0);
	const horizcount = Array(10).fill(0);
	useEffect(() => {
		const trailer = document.getElementById('trailer');
		const projectFillerGrid = document.getElementById('projFillerGrid');

		projectFillerGrid.addEventListener('mouseenter', () => {
			trailer.classList.add('visible');
			document.addEventListener('mousemove', onMouseMove);
		});

		projectFillerGrid.addEventListener('mouseleave', () => {
			trailer.classList.remove('visible');
			document.removeEventListener('mousemove', onMouseMove);
		});

		const onMouseMove = (event) => {
			const x = event.clientX - trailer.offsetWidth / 2;
			const y = event.clientY - trailer.offsetHeight / 2;

			trailer.style.transform = `translate(${x}px, ${y}px)`;
		};
	}, []);
	return (
		<>
			<Box
				sx={{
					position: 'relative',
					height: '80%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				className="projFillerGrid"
				id="projFillerGrid"
			>
				{horizcount.map((_, i) => (
					<Horizontal key={`horiz-${i}`} sx={{ top: 32 + 44 * i }} />
				))}
				{vertcount.map((_, i) => (
					<Vertical key={`vert-${i}`} sx={{ right: 48 + 45 * i }} />
				))}
			</Box>
		</>
	);
};

export default ProjectFiller;
