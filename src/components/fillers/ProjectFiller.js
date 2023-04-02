import React, { useEffect, useCallback, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
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
	const [vertCount, setVertCount] = useState(Array(0).fill(0));
	const [horizCount, setHorizCount] = useState(Array(0).fill(0));
	const [vertOffset, setVertOffset] = useState(0);
	const [horizOffset, setHorizOffset] = useState(0);

	const projFillerGridRef = useRef();

	const handleResize = useCallback(() => {
		let horizLength;
		let vertLength;

		let containerWidth = projFillerGridRef.current.clientWidth;
		let containerHeight = projFillerGridRef.current.clientHeight;

		vertLength = Math.floor(containerWidth / 45);
		horizLength = Math.floor(containerHeight / 44);

		setVertOffset(
			Math.floor(containerWidth / (Math.floor(containerWidth / 45) - 1) / 2)
		);
		setHorizOffset(
			Math.floor(containerHeight / (Math.floor(containerHeight / 44) - 1) / 2)
		);

		setVertCount(Array(vertLength - 2).fill(0));
		setHorizCount(Array(horizLength).fill(0));
	}, []);

	useEffect(() => {
		let horizLength;
		let vertLength;

		let containerWidth = projFillerGridRef.current.clientWidth;
		let containerHeight = projFillerGridRef.current.clientHeight;

		vertLength = Math.floor(containerWidth / 45);
		horizLength = Math.floor(containerHeight / 44);

		setVertOffset(
			Math.floor(containerWidth / (Math.floor(containerWidth / 45) - 1) / 2)
		);
		setHorizOffset(
			Math.floor(containerHeight / (Math.floor(containerHeight / 44) - 1) / 2)
		);

		setVertCount(Array(vertLength - 2).fill(0));
		setHorizCount(Array(horizLength).fill(0));

		const doc = document.documentElement;
		const trailer = document.getElementById('trailer');
		const text = document.getElementById('projFillerGridText');
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

	useEffect(() => {
		window.addEventListener('resize', handleResize, false);
		return () => {
			window.removeEventListener('resize', handleResize, false);
		};
	}, [handleResize]);

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
				ref={projFillerGridRef}
			>
				{horizCount.map((_, i) => (
					<Horizontal key={`horiz-${i}`} sx={{ top: 32 + 44 * i }} />
				))}
				{vertCount.map((_, i) => (
					<Vertical key={`vert-${i}`} sx={{ right: 48 + 45 * i }} />
				))}
				<Box id="projFillerGridText" className="projFillerGridText">
					<Typography fontSize={30}>
						find fun in every little challenge
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default ProjectFiller;
