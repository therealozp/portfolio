import React from 'react';
import { Box } from '@mui/system';
import { Typography, Avatar } from '@mui/material';
import Image from 'next/image';

const IntroBlock = () => {
	return (
		<>
			<Box
				sx={{
					height: '100vh',
					padding: '32px 0',
					display: 'grid',
					gridTemplateColumns: '50% 50%',
				}}
			>
				<Box sx={{ marginTop: '35vh', marginLeft: '3vw' }}>
					<Typography variant="h1">
						<span
							style={{ color: '#4264d4', transform: 'scale(2)' }}
							className="hi"
						>
							Hi!
						</span>
						<span className="iam"> I am</span>
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
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '-10vh',
						flexDirection: 'column',
						position: 'relative',
					}}
				>
					<Avatar
						sx={{
							transform: 'scale(0.8)',
							position: 'absolute',
							height: '650px',
							width: '650px',
						}}
					>
						<Image
							src="/KhangProfile1Square.jpg"
							alt="Khang Sports Photo"
							height={1106}
							width={1078}
							// placeholder="blur"
						/>
					</Avatar>
					{/* </Box> */}
				</Box>
			</Box>
		</>
	);
};

export default IntroBlock;
