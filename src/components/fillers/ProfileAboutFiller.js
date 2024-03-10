import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const AppWindow = ({
	children,
	height,
	width,
	windowName,
	zIndex,
	top,
	bottom,
	right,
	left,
}) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				backgroundColor: '#101312',
				borderRadius: '10px',
				border: (theme) => `4px solid ${theme.palette.text.creme}`,
				height: height,
				width: width,
				overflow: 'hidden',
				zIndex: zIndex,
				top: top,
				bottom: bottom,
				right: right,
				left: left,
			}}
			className="titleBackgroundContainer"
		>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					height: '25px',
					backgroundColor: (theme) => `${theme.palette.text.creme}`,
					color: (theme) => `${theme.palette.blue.dark}`,
					// fontFamily: 'Montserrat',
					fontWeight: 'bold',
					// alignItems: 'flex-start',
					justifyContent: 'flex-start',
					paddingRight: '16px',
				}}
			>
				<Typography
					sx={{
						color: (theme) => `${theme.palette.blue.dark}`,
						zIndex: 5,
						fontWeight: 'bold',
						marginBottom: '2px',
						marginLeft: '8px',
					}}
				>
					{windowName}
				</Typography>
				<Typography
					sx={{
						color: (theme) => `${theme.palette.blue.dark}`,
						marginLeft: 'auto',
					}}
				>
					x
				</Typography>
			</Box>

			<Box
				sx={{
					width: '100%',
					height: '90%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					// border: (theme) => `4px solid red`,
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

const ProfileAboutFiller = () => {
	return (
		<Grid
			container
			sx={{
				padding: '16px',
				margin: '32px',
				position: 'relative',
				marginTop: '-30vh',
			}}
		>
			<AppWindow
				height="60vh"
				width="20vw"
				windowName="about.exe"
				zIndex={0}
				top={-200}
				right="60vw"
			>
				<Box
					sx={{
						width: '100%',
						padding: '32px',
					}}
				>
					<Box
						sx={{
							width: '150px',
						}}
					>
						<Typography
							sx={{
								fontSize: '3rem',
								fontWeight: 'bold',
								fontFamily: 'Rubik',
								textAlign: 'center',
							}}
						>
							<span
								style={{
									fontSize: '2.4rem',
								}}
							>
								{'>'}&nbsp;&nbsp;
							</span>{' '}
							i am also:
						</Typography>
					</Box>
				</Box>
			</AppWindow>
			<AppWindow
				height="12vw"
				width="30vw"
				windowName="about.exe"
				zIndex={1}
				// left="10rem"
				right="calc(35vw)"
				top={-20}
			>
				<Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
					a CS nerd
				</Typography>
			</AppWindow>
			<AppWindow
				height="33vw"
				width="30vw"
				windowName="about.exe"
				zIndex={0}
				// left="10rem"
				right="calc(12vw)"
				top="-15vh"
			>
				<Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
					tinkering with C++
				</Typography>
			</AppWindow>
			<AppWindow
				height="15vw"
				width="23vw"
				windowName="about.exe"
				zIndex={1}
				left="5vw"
				top="30vh"
			>
				<Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
					a full stack dev
				</Typography>
			</AppWindow>
			<AppWindow
				height="12vw"
				width="33vw"
				windowName="about.exe"
				zIndex={1}
				left="25vw"
				top="43vh"
			>
				<Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
					addicted to caffeine
				</Typography>
			</AppWindow>
			<AppWindow
				height="12vw"
				width="20vw"
				windowName="about.exe"
				zIndex={1}
				right="15vw"
				top="35vh"
			>
				<Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
					an Arch fanboy (btw)
				</Typography>
			</AppWindow>
		</Grid>
	);
};

export default ProfileAboutFiller;
