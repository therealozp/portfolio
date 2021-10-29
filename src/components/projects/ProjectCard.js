import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography, Tooltip } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const ProjectCard = ({ name, description, index, status }) => {
	return (
		<Box
			sx={{
				width: '60vw',
				outline: (theme) =>
					`${
						status == 'prototype'
							? theme.palette.yellow.main
							: theme.palette.blue.main
					} 2px solid`,
				borderRadius: '6px',
				display: 'grid',
				gridTemplateColumns: '70% 30%',
				padding: '12px',
				margin: '48px',
				minHeight: '120px',
				position: 'relative',
				overflow: 'hidden',
			}}
			className={`outerBox ${index}`}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '24px',
					transform: 'translateY(150px)',
					// position: 'absolute',
					// marginTop: '90px',
				}}
				className={`infoBox ${index}`}
			>
				<Box>
					<Typography
						sx={{
							marginBottom: ' 8px',
							fontFamily: 'Inconsolata',
							fontSize: '2em',
						}}
					>
						{name}
					</Typography>
					<Typography sx={{ fontSize: '1.05em' }}>{description}</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'flex-end',
					marginTop: '20px',
					transform: 'translateY(50px)',
				}}
				className={`buttonBox ${index}`}
			>
				<Button variant="outlined" color="primary">
					Visit
				</Button>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					height: '100%',
					width: '100%',
					backgroundColor: (theme) =>
						`${
							status == 'prototype'
								? theme.palette.yellow.main
								: theme.palette.blue.main
						}`,
				}}
				className={`innerBox ${index}`}
			/>
			<Box
				sx={{
					position: 'absolute',
					display: status == 'prototype' ? 'block' : 'none',
					right: 15,
					top: 15,
					transform: 'translateY(-40px)',
				}}
				className={`developing ${index}`}
			>
				<Tooltip
					arrow
					title="Currently In Development!"
					sx={{ backgroundColor: 'black' }}
				>
					<ErrorOutlineIcon style={{ fill: '#FABC3C' }} />
				</Tooltip>
			</Box>
		</Box>
	);
};

export default ProjectCard;