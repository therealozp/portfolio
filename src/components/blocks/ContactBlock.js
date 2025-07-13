import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import Link from 'next/link';

const ContactSites = ({ iconComponent, website, url }) => {
	const [hovered, setHovered] = useState(false);
	return (
		<a
			target="_blank"
			href={url}
			rel="noopener noreferrer"
			style={{
				textDecoration: 'none',
			}}
		>
			<Box
				sx={{
					border: '2px solid #242424',
					'&:hover': {
						border: '2px solid #2e2e2e',
					},
					display: 'flex',
					borderRadius: '12px',
					padding: '16px',
					willChange: 'border transform',
					transition: 'border 0.15s ease-in-out, transform 0.15s ease-in-out',
					alignItems: 'flex-end',
					cursor: 'pointer',
					height: '100%', // Set height to half of the Email component
					width: '100%',
				}}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						width: '80%',
					}}
				>
					<Box
						sx={{
							backgroundColor: hovered ? 'white' : 'transparent',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: '50%',
							padding: '8px',
							height: '48px',
							width: '48px',
							transition: 'background-color 0.3s ease-in-out',
							willChange: 'background-color',
							marginRight: 2,
						}}
					>
						{iconComponent}
					</Box>
					<Box>
						<Typography
							sx={{
								fontFamily: 'Rubik',
								fontSize: '24px',
								willChange: 'transform',
								transform: hovered ? 'translateX(8px)' : 'none',
								transition: 'transform 0.15s ease-in-out',
							}}
						>
							{website}
						</Typography>
					</Box>
				</Box>
			</Box>
		</a>
	);
};

const EmailComponent = () => {
	const [textHovered, setTextHovered] = useState(false);
	return (
		<>
			<Typography
				sx={{
					fontSize: '20px',
					fontWeight: '500',
					opacity: '0.6',
				}}
			>
				Email
			</Typography>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
				}}
				onMouseEnter={() => setTextHovered(true)}
				onMouseLeave={() => setTextHovered(false)}
			>
				<NavigateNextRoundedIcon
					sx={{
						fontSize: '32px',
						marginBottom: '-3px',
						transform: textHovered ? 'translateX(5px)' : 'none',
						willChange: 'transform',
						transition: 'transform 0.15s ease-in-out',
					}}
				/>
				<NavigateNextRoundedIcon
					sx={{
						fontSize: '32px',
						marginBottom: '-3px',
						transform: textHovered ? 'translateX(-10px)' : 'translateX(-20px)',
						willChange: 'transform',
						transition: 'transform 0.15s ease-in-out',
					}}
				/>
				<Link href="mailto:anhkhang.le0910@gmail.com">
					<Typography
						sx={{
							fontSize: 'clamp(1rem, 4vw, 2rem)',
							fontWeight: '500',
							transform: textHovered ? 'translateX(-8px)' : 'translateX(-16px)',
							willChange: 'transform, opacity',
							transition:
								'transform 0.15s ease-in-out, opacity 0.15s ease-in-out',
							opacity: textHovered ? '0.6' : '1',
							cursor: 'pointer',
						}}
					>
						anhkhang.le0910@gmail.com
					</Typography>
				</Link>
			</Box>
		</>
	);
};

const ContactBlock = () => {
	return (
		<Box>
			<Grid
				container
				// padding="16px"
				spacing={2}
				// margin="16px"
			>
				<Grid container md={3} xs={12} item spacing={2} marginLeft={-2}>
					<Grid item xs={12}>
						<ContactSites
							iconComponent={
								<LinkedInIcon
									sx={{
										fontSize: '36px',
										mixBlendMode: 'difference',
									}}
								/>
							}
							website="LinkedIn"
							url="https://www.linkedin.com/in/anhkhang-le/"
						/>
					</Grid>
					<Grid item xs={12}>
						<ContactSites
							iconComponent={
								<GitHubIcon
									sx={{
										fontSize: '36px',
										mixBlendMode: 'difference',
									}}
								/>
							}
							website="GitHub"
							url="https://github.com/therealozp"
						/>
					</Grid>
				</Grid>
				<Grid item md={9} xs={12}>
					<Box
						sx={{
							border: '2px solid #242424',
							borderRadius: '12px',
							padding: '32px',
							paddingLeft: '48px',
						}}
					>
						<Typography
							sx={{
								fontFamily: 'Rubik',
								fontSize: 'clamp(2rem, 10vw, 4rem)',
								fontWeight: '600',
								// color: (theme) => theme.palette.text.greenCream,
							}}
						>
							Let&apos;s chat!
						</Typography>
						<Typography>
							Feel free to contact me if you have any questions or just want to
							say hi!
						</Typography>
						<Box
							sx={{
								marginTop: '32px',
							}}
						>
							<EmailComponent />
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Box sx={{ height: '100px' }} />
		</Box>
	);
};

export default ContactBlock;
