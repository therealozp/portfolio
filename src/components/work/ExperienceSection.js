import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ExpCard from './ExpCard';

const workExperience = [
	{
		company: 'Amazon',
		position: 'SDE Intern',
		duration: 'May - August 2025',
		description:
			'Worked on developing a scalable image processing service with AWS.',
		image: '/companies/amz.png',

		'--main-rgb': '255 153 0', // Your original color 2
		'--main-light-rgb': '255 190 60', // A lighter, more golden orange
		'--secondary-rgb': '255 90 0', // A bolder, more reddish-orange for strong accent or transition
	},
	{
		company: 'Kyanon Digital',
		position: 'AI Intern',
		duration: 'May - August 2024',
		image: '/companies/kd.svg',
		description:
			'Worked on R&D to improve customer segmentation modelling with transformers.',

		'--main-rgb': '235 63 67', // Your original color 3
		'--main-light-rgb': '250 120 125', // A lighter, more muted or rosy red
		'--secondary-rgb': '180 30 90',
	},
	{
		company: 'Dfx Lab @ USF',
		position: 'Software Lead',
		duration: 'Present',
		description:
			'Develop lightweight smart screens, printer management solutions, and manage local servers.',
		image: '/companies/dfx-white.png',
		'--main-rgb': '14 106 72', // Your original color 1
		'--main-light-rgb': '40 180 120', // A brighter, slightly more saturated version of the main green
		'--secondary-rgb': '170 255 0', // A striking lime green, providing strong contrast and energy
	},
	// Add more experience objects as needed
];

const ExperienceSection = () => {
	return (
		<Box
			sx={{
				p: 2,
				maxWidth: '100vw',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography
				variant="h3"
				component="h2"
				fontWeight={900}
				gutterBottom
				sx={{
					letterSpacing: 1,
					textAlign: 'center',
					mb: 8,
				}}
			>
				Work Experience
			</Typography>
			<Grid container spacing={2}>
				{workExperience.map((exp, index) => (
					<Grid item xs={12} sm={4} xl={3} key={`exp-${index}`}>
						<ExpCard exp={exp} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ExperienceSection;
