import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const LeftDiagonal = ({ left }) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: -100,
				left: -10 + left,
				width: '2px',
				height: '300px',
				backgroundColor: (theme) => `${theme.palette.text.creme}`,
				transform: 'rotate(45deg)',
				// transformOrigin: '0 0',
			}}
		/>
	);
};

const RightDiagonal = ({ right }) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 2,
				right: -70 + right,
				width: '2px',
				height: '300px',
				backgroundColor: (theme) => `${theme.palette.text.creme}`,
				transform: 'rotate(45deg)',
				// transformOrigin: '0 0',
			}}
		/>
	);
};
const TitleBackground = ({ children }) => {
	const spacing = 15;
	useEffect(() => {
		const titleBackgroundContainer = document.querySelector(
			'.titleBackgroundContainer'
		);
		const width = titleBackgroundContainer.offsetWidth;
		console.log(width);
	});

	return (
		<Box
			sx={{
				position: 'relative',
				backgroundColor: 'transparent',
				borderRadius: '10px',
				border: (theme) => `4px solid ${theme.palette.text.creme}`,
				height: '250px',
				width: '90%',
				overflow: 'hidden',
			}}
			className="titleBackgroundContainer"
		>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					height: '10%',
					backgroundColor: (theme) => `${theme.palette.text.creme}`,
					color: (theme) => `${theme.palette.blue.dark}`,
					fontFamily: 'Montserrat',
					fontWeight: 'bold',
					// alignItems: 'flex-start',
					justifyContent: 'flex-start',
					paddingRight: '16px',
				}}
			>
				<Typography
					sx={{
						color: (theme) => `${theme.palette.blue.dark}`,
						zIndex: 5,
						fontWeight: 'bold',
						marginBottom: '2px',
						marginLeft: '8px',
					}}
				>
					projects.exe
				</Typography>
				<Typography
					sx={{
						color: (theme) => `${theme.palette.blue.dark}`,
						marginLeft: 'auto',
					}}
				>
					x
				</Typography>
			</Box>
			<LeftDiagonal left={0} />
			<LeftDiagonal left={spacing * 2} />
			<LeftDiagonal left={spacing * 4} />
			<LeftDiagonal left={spacing * 6} />
			{/* <LeftDiagonal left={spacing * 8} /> */}
			<Box
				sx={{
					width: '100%',
					height: '90%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					// border: (theme) => `4px solid red`,
				}}
			>
				{children}
			</Box>
			<RightDiagonal right={0} />
			<RightDiagonal right={spacing * 2} />
			<RightDiagonal right={spacing * 4} />
			<RightDiagonal right={spacing * 6} />
			{/* <RightDiagonal right={spacing * 8} /> */}
		</Box>
	);
};

export default TitleBackground;
