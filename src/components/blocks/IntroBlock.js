import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const IntroBlock = () => {
	return (
		<Box
			sx={{
				height: '100vh',
				padding: '32px',
				display: 'grid',
				gridTemplateColumns: '50% 50%',
			}}
		>
			<Box sx={{ marginTop: '35vh', marginLeft: '3vw' }}>
				<Typography variant="h1">
					<span style={{ color: '#4264d4' }}>Hi!</span> I am
					<span style={{ color: '#4264d4' }}> Khang</span>
				</Typography>
				<Typography
					sx={{
						filter: 'brightness(0.7)',
						marginLeft: '36px',
						marginTop: '20px',
					}}
				>
					{
						'/*  Student, front-end developer, professional anime enthusiast  */'
					}
				</Typography>
			</Box>
			<Box
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			>
				<Box
					sx={{ outline: '2px solid white', height: '200px', width: '400px' }}
				>
					Image
				</Box>
			</Box>
		</Box>
	);
};

export default IntroBlock;
