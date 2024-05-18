import React from 'react';
import { Box, Typography } from '@mui/material';

const ScrollingText = ({ reverse }) => {
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const time = getRandomNumber(25, 30);
	return (
		<Box className="infinite-scroll">
			<Box className="infinite-scroll__title">
				<Box
					sx={{
						display: 'flex',
						animation: reverse
							? `scrollText ${time}s infinite linear reverse`
							: `scrollText ${time}s infinite linear`,
					}}
				>
					<Typography variant="h2">projects&nbsp;</Typography>
					<Typography variant="h2">projects&nbsp;</Typography>
					<Typography variant="h2">projects&nbsp;</Typography>
					<Typography variant="h2">projects&nbsp;</Typography>
					<Typography variant="h2">projects&nbsp;</Typography>
					<Typography variant="h2">projects&nbsp;</Typography>
					<Typography variant="h2">projects&nbsp;</Typography>
					<Typography variant="h2">projects&nbsp;</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default ScrollingText;
