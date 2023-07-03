import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

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
					border: '1px solid #242424',
					width: '300px',
					height: '175px',
					'&:hover': {
						border: '1px solid #2e2e2e',
						// transform: 'scale(1.05)',
					},
					display: 'flex',
					borderRadius: '12px',
					padding: '16px',
					margin: '16px',
					willChange: 'border transform',
					transition: 'border 0.15s ease-in-out, transform 0.15s ease-in-out',
					alignItems: 'flex-end',
					cursor: 'pointer',
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
				<Typography
					sx={{
						fontSize: '24px',
						fontWeight: '500',
						transform: textHovered ? 'translateX(-8px)' : 'translateX(-16px)',
						willChange: 'transform, opacity',
						transition:
							'transform 0.15s ease-in-out, opacity 0.15s ease-in-out',
						opacity: textHovered ? '0.6' : '1',
					}}
				>
					anhkhang.le0910@gmail.com
				</Typography>
			</Box>
		</>
	);
};

const ContactBlock = () => {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: '1fr 4fr',
			}}
		>
			<Box>
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
			</Box>
			<Box
				sx={{
					padding: '16px',
					paddingLeft: '8px',
					width: '100%',
					height: '100%',
				}}
			>
				<Box
					sx={{
						border: '1px solid #242424',
						padding: '32px',
						paddingLeft: '48px',
						borderRadius: '12px',
						height: '100%',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'Rubik',
							fontSize: '56px',
							fontWeight: '600',
							// color: (theme) => theme.palette.text.greenCream,
						}}
					>
						Interested?
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
			</Box>
		</Box>
	);
};

export default ContactBlock;
