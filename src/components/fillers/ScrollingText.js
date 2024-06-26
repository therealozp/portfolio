import React from 'react';
import { Box, Typography } from '@mui/material';
import '../../../styles/ScrollingText.module.scss';

const ScrollingText = ({
	reverse,
	text,
	fontFamily = 'Simplon Mono Medium Regular',
	fontSize = '7vw',
	textColor,
	bgColor,
	tapeHeight = '100%',
	tapeWidth = '100%',
	count = 8,
	padding = '0 0 0 0',
	...props
}) => {
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const time = getRandomNumber(25, 30);

	return (
		<Box
			className="marquee"
			sx={{
				height: tapeHeight,
				width: tapeWidth,
				overflow: 'hidden',
				position: 'relative',
				bgcolor: bgColor,
				padding: padding,
			}}
		>
			<Box
				className="marquee__content"
				sx={{
					display: 'flex',
					animation: reverse
						? `scroll ${time}s linear infinite reverse`
						: `scroll ${time}s linear infinite`,
				}}
			>
				{Array.from({ length: count }).map((_, index) => (
					<Typography
						variant="h2"
						fontSize={fontSize}
						color={textColor || '#f7f4ec'}
						key={index}
						fontFamily={fontFamily}
						{...props}
					>
						{text}&nbsp;
					</Typography>
				))}
			</Box>
			<Box
				className="marquee__content"
				sx={{
					display: 'flex',
					animation: reverse
						? `scroll ${time}s linear infinite reverse`
						: `scroll ${time}s linear infinite`,
				}}
				aria-hidden="true"
			>
				{Array.from({ length: count }).map((_, index) => (
					<Typography
						variant="h2"
						fontSize={fontSize}
						color={textColor || '#f7f4ec'}
						key={index}
						fontFamily={fontFamily}
						{...props}
					>
						{text}&nbsp;
					</Typography>
				))}
			</Box>
		</Box>
	);
};

export default ScrollingText;
