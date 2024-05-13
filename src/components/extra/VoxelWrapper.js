import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap, Expo } from 'gsap';

const VoxelWrapper = ({ children, finished, setWindowOpened }) => {
	useEffect(() => {
		if (finished) {
			const tl = gsap.timeline({
				onComplete: () => {
					setWindowOpened(true);
				},
			});
			tl.to('.voxel-wrapper', {
				opacity: 1,
				// y: 100,
				scale: 1,
				ease: Expo.easeOut,
			});
		}
	}, [finished]);
	return (
		<Box
			sx={{
				height: '100%',
				width: '100%',
				position: 'relative',
				overflow: 'hidden',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				scale: 0,
				opacity: 0,
			}}
			className="voxel-wrapper"
		>
			<Box
				sx={{
					// position: 'absolute',
					border: (theme) => `3px solid ${theme.palette.blue.dark}`,
					borderRadius: '10px',
					height: '85vh',
					width: '50vw',
					overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						overflow: 'hidden',
						backgroundColor: (theme) => theme.palette.blue.dark,
						height: '5%',
						color: (theme) => theme.palette.text.main,
						display: 'flex',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Inconsolata',
							marginLeft: '16px',
							alignSelf: 'center',
						}}
					>
						cat.blend
					</Typography>
					<Typography
						sx={{
							fontFamily: 'Inconsolata',
							color: (theme) => theme.palette.text.creme,
							fontSize: '1.2rem',
							fontWeight: 'bold',
							marginLeft: 'auto',
							marginRight: '16px',
						}}
					>
						x
					</Typography>
				</Box>
				<Box
					sx={{
						height: '610px',
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#202533',
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
};

export default VoxelWrapper;
