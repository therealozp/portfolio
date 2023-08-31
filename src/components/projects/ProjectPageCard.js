import React, { useState } from 'react';
// import { Tilt } from 'react-tilt';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Image from 'next/image';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
// import dynamic from 'next/dynamic';
// import Tilt from 'react-tilt';
// const Tilt = dynamic(() => import('react-tilt'), { ssr: false });
import Tilt from 'react-parallax-tilt';
const ProjectPageCard = ({
	name,
	// description,
	// href,
	// miniTitle,
	src,
	// buttonText,
	// status,
	year,
}) => {
	const [hover, setHover] = useState(false);
	const [textHovered, setTextHovered] = useState(false);
	return (
		<Tilt
			tiltMaxAngleX={5}
			tiltMaxAngleY={5}
			// transitionEasing="cubic-bezier(.22,.18,.29,.91)"
			perspective={2000}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'grid',
						gridTemplateRows: ' 4% 15% 81%',
						borderWidth: '1px',
						border: (theme) => `1px solid ${theme.palette.blue.dark}`,
						borderRadius: '16px',
						width: { xs: '95vw', md: '47vw' },
						aspectRatio: { xs: '15/13', md: '19/13' },
						overflow: 'hidden',
						margin: '32px 0',
					}}
				>
					<Box
						sx={{
							height: '100%',
							backgroundColor: (theme) => theme.palette.blue.dark,
							// borderRadius: '16px 16px 0 0 ',
						}}
					></Box>
					<Box
						sx={{
							// marginTop: '8px',
							// marginLeft: '16px',
							display: 'flex',
							alignItems: 'center',
							paddingLeft: '16px',
						}}
					>
						<NavigateNextRoundedIcon
							sx={{
								fontSize: '32px',
							}}
						/>
						<NavigateNextRoundedIcon
							sx={{
								fontSize: '32px',
								marginLeft: '-20px',
								marginRight: '8px',
							}}
						/>
						<Typography
							sx={{
								fontSize: '1.5rem',
								fontWeight: 400,
								transform: textHovered ? 'translateX(16px)' : 'translateX(0px)',
								willChange: 'transform, opacity',
								transition:
									'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
								opacity: textHovered ? '0.6' : '1',
							}}
							onMouseEnter={() => setTextHovered(true)}
							onMouseLeave={() => setTextHovered(false)}
						>
							{name}
						</Typography>
						<Typography
							sx={{
								fontSize: '1.3rem',
								fontWeight: 400,
								marginLeft: 'auto',
								marginRight: '16px',
							}}
						>
							{year}
						</Typography>
					</Box>
					<Box
						sx={{
							position: 'relative',
							borderRadius: '16px',
							height: '100%',
							marginTop: 'auto',
							overflow: 'hidden',
						}}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						<Image
							src={src}
							layout="fill"
							objectFit="cover"
							style={{
								transition:
									'transform 0.5s ease-in-out, filter 0.5s ease-in-out',
								transform: hover ? 'scale(1.03)' : 'none',
								filter: hover ? 'saturate(0)' : 'none',
								willChange: 'transform, filter',
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Tilt>
	);
};

const SmallProjectPageCard = ({ name, year, tags, href }) => {
	const [hover, setHover] = useState(false);
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			style={{
				textDecoration: 'none',
			}}
		>
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					height: '80px',
					width: { xs: '95vw', md: '90vw' },
					borderBottom: 'double 2px transparent',
					borderRadius: '16px',
					padding: '16px',
					background:
						'linear-gradient(#101312, #101312), linear-gradient(to top, #4a4a4a, transparent)',
					backgroundOrigin: 'border-box',
					backgroundClip: 'padding-box, border-box',
					// transition: 'background 0.3s ease-in-out',
					// willChange: 'background',
					'&:hover': {
						background:
							'linear-gradient(#ece2d0, #ece2d0), linear-gradient(to top, #4a4a4a, transparent)',
						cursor: 'pointer',
					},
				}}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<Box
					sx={{
						width: '300px',
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: '1.2rem', md: '1.5rem' },
							marginLeft: '8px',
							color: hover ? '#101312' : '#fafao1',
							transition: 'color 0.15s ease-in-out',
							willChange: 'color',
						}}
					>
						{name}
					</Typography>
				</Box>

				<Typography
					sx={{
						marginLeft: 'auto',
						color: hover ? '#101312' : '#fafao1',
						transition: 'color 0.15s ease-in-out',
						willChange: 'color',
					}}
				>
					{tags}
				</Typography>
				<Typography
					sx={{
						marginLeft: 'auto',
						marginRight: '20px',
						color: hover ? '#101312' : '#fafao1',
						transition: 'color 0.15s ease-in-out',
						willChange: 'color',
					}}
				>
					{year}
				</Typography>
			</Box>
		</a>
	);
};

export { ProjectPageCard, SmallProjectPageCard };
