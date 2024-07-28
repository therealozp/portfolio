import React from 'react';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import EmailIcon from '@mui/icons-material/Email';

const entries = [
	{
		href: 'https://www.linkedin.com/in/anhkhang-le',
		text: 'LinkedIn',
		description: 'Connect with me on LinkedIn!',
		icon: <LinkedInIcon fontSize="large" />,
	},
	{
		href: 'https://khang-portfolio.vercel.app/',
		text: 'Portfolio',
		description: 'Check out the rest of my website!',
		icon: <OpenInBrowserIcon fontSize="large" />,
	},
	{
		href: 'https://github.com/therealozp',
		text: 'GitHub',
		description: 'My latest projects and works',
		icon: <GitHubIcon fontSize="large" style={{ fill: 'black' }} />,
	},
	{
		href: 'mailto:anhkhang.le0910@gmail.com',
		text: 'Email',
		description: 'Feel free to reach out to me via email!',
		icon: <EmailIcon fontSize="large" />,
	},
	{
		href: '/Khang Le_Resume.pdf',
		text: 'Resume',
		description:
			'Download my resume to get an overview of my educational background, skills, and professional experience.',
		icon: <PictureAsPdfIcon fontSize="large" />,
		target: '_blank',
	},
];

const LinkComponents = ({
	href,
	text,
	backgroundColor,
	color,
	icon,
	target,
}) => {
	return (
		<Link href={href} passHref target={target ? target : null}>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					padding: '10px',
					borderRadius: '12px',
					border: `2px solid ${backgroundColor}`,
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: backgroundColor || '#4d8cd8',
				}}
			>
				<Box color={color} fontWeight="700" fontFamily={'Rubik'}>
					{text}
				</Box>
				<Box justifySelf={'flex-end'} alignSelf={'flex-end'} height={'100%'}>
					<Box>{icon}</Box>
				</Box>
			</Box>
		</Link>
	);
};

const Links = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100svh',
				width: '100vw',
				padding: '2vh',
			}}
		>
			<Box>
				<h1 className="fancyLinkText">links</h1>
			</Box>
			<Grid container spacing={2} sx={{ height: '50svh' }}>
				<Grid item container xs={12} spacing={2}>
					<Grid item container xs={6} spacing={2}>
						<Grid item xs={12}>
							<LinkComponents {...entries[0]} />
						</Grid>
						<Grid item xs={12}>
							<LinkComponents {...entries[1]} backgroundColor={'#606096'} />
						</Grid>
					</Grid>
					<Grid item xs={6}>
						<LinkComponents
							{...entries[2]}
							backgroundColor="#fdffd7"
							color="#1f1f28"
						/>
					</Grid>
				</Grid>
				<Grid item xs={12} spacing={2}>
					<LinkComponents {...entries[3]} />
				</Grid>
				<Grid item xs={12} spacing={2}>
					<LinkComponents {...entries[4]} backgroundColor="#a5350e" />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Links;
