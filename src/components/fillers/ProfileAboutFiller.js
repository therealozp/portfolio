import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const AppWindow = ({ children, height, width, windowName }) => {
	const windowColor = '#8ea4a2';
	return (
		<Box
			sx={{
				backgroundColor: '#101312',
				borderRadius: '10px',
				border: `2px solid ${windowColor}`,
				height: height,
				width: width,
				overflow: 'hidden',
			}}
			className="titleBackgroundContainer"
		>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					height: '16px',
					backgroundColor: `${windowColor}`,
					color: (theme) => `${theme.palette.blue.dark}`,
					// fontFamily: 'Montserrat',
					fontWeight: 'bold',
					alignItems: 'center',
					justifyContent: 'flex-start',
					padding: '0 16px',
				}}
			>
				<Typography
					sx={{
						color: (theme) => `${theme.palette.blue.dark}`,
						zIndex: 5,
						marginBottom: '2px',
						marginLeft: '8px',
						fontFamily: 'monospace',
					}}
				>
					{windowName}
				</Typography>
			</Box>

			<Box
				sx={{
					width: '100%',
					height: '90%',
					padding: '16px',
				}}
			>
				{children}
			</Box>
		</Box>
	);
};
const ProfileAboutFiller = () => {
	const KeyValue = ({ key_, value }) => {
		return (
			<Box display="flex">
				<Box width="150px">
					<Typography fontWeight="bold" fontFamily="monospace">
						{key_}
					</Typography>
				</Box>
				<Box width="300px">
					<Typography fontFamily="monospace">{value}</Typography>
				</Box>
			</Box>
		);
	};
	const windowHeight = 540;
	const windowPadding = 16;
	const asciiArt = `      /\\
     /+o\\
    / \\++\\
   /oooooo\\
  /++;;oo++\\
 /sss|  |ss-\\
/_-''    ''-_\\`;
	return (
		<Box height="maxcontent">
			<Grid container spacing={2} padding="16px">
				<Grid item xs={6}>
					<AppWindow windowName="About" height={`${windowHeight}px`}>
						<Box>
							<Typography fontFamily="monospace">
								<strong style={{ color: '#649a7b' }}>info@portfolio</strong>:
								<strong style={{ color: '#8ba4b0' }}>~/home/ozymandio/</strong>$
								neofetch
							</Typography>
						</Box>
						<Box
							display="flex"
							justifyContent="space-evenly"
							alignItems="baseline"
						>
							<Box>
								<pre style={{ fontFamily: 'monospace', color: '#7fb4ca' }}>
									{asciiArt}
								</pre>
							</Box>
							<Box width="60%">
								<KeyValue key_="name" value="John Doe" />
								<KeyValue
									key_="interests"
									value="low level optimization, hardware acceleration"
								/>
							</Box>
						</Box>
					</AppWindow>
				</Grid>
				<Grid item xs={6}>
					<AppWindow
						windowName="About"
						height={`${(windowHeight - windowPadding) / 2}px`}
					>
						<Box sx={{ border: '1px solid white' }}></Box>
					</AppWindow>
					<Box height={windowPadding} />
					<AppWindow
						windowName="About"
						height={`${(windowHeight - windowPadding) / 2}px`}
					>
						<Box sx={{ border: '1px solid white' }}></Box>
					</AppWindow>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ProfileAboutFiller;
