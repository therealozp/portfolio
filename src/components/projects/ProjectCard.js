import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography, Tooltip } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import gsap from 'gsap';

const ProjectCard = ({ name, description, index, status }) => {
	useEffect(() => {
		gsap.config({
			force3D: true,
		});
		gsap.to(`.innerBox-${index}`, {
			scrollTrigger: {
				trigger: `.innerBox-${index}`,
				toggleActions: 'play none play reset',
			},
			x: '-100%',
			duration: 0.8,
		});
		gsap.to(`.infoBox-${index}`, {
			scrollTrigger: {
				trigger: `.innerBox-${index}`,
				toggleActions: 'play none play reset',
			},
			y: 0,
			delay: 0.55,
			duration: 0.5,
		});
		// gsap.to(`.buttonBox-${index}`, {
		// 	scrollTrigger: {
		// 		trigger: `.innerBox-${index}`,
		// 		// markers: true,
		// 		// start: '-40 center',
		// 		// end: '',
		// 		toggleActions: 'play none play reset',
		// 	},
		// 	y: 0,
		// 	delay: 0.6,
		// 	duration: 0.4,
		// });
		gsap.to(`.developing-${index}`, {
			scrollTrigger: {
				trigger: `.innerBox-${index}`,
				toggleActions: 'play none play reset',
			},
			y: 0,
			delay: 0.6,
			duration: 0.4,
		});
		return () => {
			gsap.killTweensOf(`.innerBox-${index}`);
			gsap.killTweensOf(`.infoBox-${index}`);
			gsap.killTweensOf(`.buttonBox-${index}`);
			gsap.killTweensOf(`.developing-${index}`);
		};
	});
	return (
		<Box
			sx={{
				width: ['95vw', '80vw', '60vw'],
				outline: (theme) =>
					`${
						status == 'prototype'
							? theme.palette.yellow.main
							: status == 'unavailable'
							? theme.palette.red.main
							: theme.palette.blue.main
					} 2px solid`,
				borderRadius: '6px',
				display: 'grid',
				gridTemplateColumns: { md: '90% 10%' },
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
					willChange: 'transform',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '24px',
					transform: 'translateY(150px)',
					// position: 'absolute',
					// marginTop: '90px',
				}}
				className={`infoBox-${index}`}
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
					willChange: 'transform',
					position: 'absolute',
					height: '100%',
					width: '100%',
					backgroundColor: (theme) =>
						`${
							status == 'prototype'
								? theme.palette.yellow.main
								: status == 'unavailable'
								? theme.palette.red.main
								: theme.palette.blue.main
						} `,
				}}
				className={`innerBox-${index}`}
			/>
			<Box
				sx={{
					position: 'absolute',
					display:
						status == 'prototype' || status == 'unavailable' ? 'block' : 'none',
					right: 15,
					top: 15,
					transform: 'translateY(-40px)',
					willChange: 'transform',
				}}
				className={`developing-${index}`}
			>
				<Tooltip
					arrow
					title={
						status == 'prototype'
							? 'Currently under development!'
							: 'This page no longer maintained :('
					}
					sx={{ backgroundColor: 'transparent', willChange: 'transform' }}
				>
					{status == 'prototype' ? (
						<ErrorOutlineIcon
							sx={{
								fill: (theme) => theme.palette.yellow.main,
							}}
						/>
					) : (
						<ErrorOutlineIcon
							sx={{
								fill: (theme) => theme.palette.red.main,
							}}
						/>
					)}
				</Tooltip>
			</Box>
		</Box>
	);
};

export default ProjectCard;
