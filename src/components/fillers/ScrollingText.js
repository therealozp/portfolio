import React from 'react';
import { Box, Typography } from '@mui/material';

const ScrollingText = ({
	reverse,
	text,
	fontSize,
	textColor,
	bgColor,
	tapeHeight,
	tapeWidth = '100%',
	count = 8,
}) => {
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const time = getRandomNumber(25, 30);
	return (
		<Box
			className="infinite-scroll"
			sx={{ height: tapeHeight, width: tapeWidth }}
		>
			<Box className="infinite-scroll__title">
				<Box
					sx={{
						display: 'flex',
						animation: reverse
							? `scrollText ${time}s infinite linear reverse`
							: `scrollText ${time}s infinite linear`,
						bgcolor: bgColor,
					}}
				>
					{Array.from({ length: count }).map((_, index) => {
						return (
							<Typography
								variant="h2"
								fontSize={fontSize}
								color={textColor ? textColor : '#f7f4ec'}
								key={index}
							>
								{text}&nbsp;
							</Typography>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export default ScrollingText;
