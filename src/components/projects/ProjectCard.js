import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';

const ProjectCard = ({ imgSrc, name, description }) => {
	return (
		<Box
			sx={{
				width: '60vw',
				outline: (theme) => `${theme.palette.blue.main} 2px solid`,
				borderRadius: '6px',
				display: 'grid',
				gridTemplateColumns: '70% 30%',
				padding: '10px',
				margin: '32px',
				minHeight: '120px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '24px',
				}}
			>
				<Box>
					<Typography variant="h5" sx={{ marginBottom: ' 8px' }}>
						{name}
					</Typography>
					<Typography>{description}</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'flex-end',
					marginTop: '20px',
				}}
			>
				<Button variant="outlined" color="primary">
					Visit website !
				</Button>
			</Box>
		</Box>
	);
};

export default ProjectCard;
