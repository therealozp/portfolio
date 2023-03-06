import React from 'react';
import { Box } from '@mui/system';
import { Typography, Avatar } from '@mui/material';
import Image from 'next/image';

const IntroBlock = () => {
	return (
		<>
			<Box
				sx={{
					padding: '32px 0',
					position: 'absolute',
				}}
			>
				<Box sx={{}}>
					<Typography
						sx={{
							filter: 'brightness(0.7)',
							marginLeft: '36px',
							marginTop: '20px',
						}}
					></Typography>
				</Box>
			</Box>
		</>
	);
};

export default IntroBlock;
