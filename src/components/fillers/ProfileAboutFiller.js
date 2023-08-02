// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import { keyframes } from '@mui/system';
// import { gsap } from 'gsap';
// const scrollRight = keyframes`
// 	0% {
// 		transform: translateX(0);
// 	}
// 	100% {
// 		transform: translateX(calc(-100%));
// 	}`;

// const scrollLeft = keyframes`
// 	0% {
// 		transform: translateX(calc(-100%));
// 	}
// 	100% {
// 		transform: translateX(0);
// 	}`;
// const scrollAlt = (xPos) => keyframes`
// 	0% {
// 		opacity: 0;
// 		transform: translateX(calc(-100%));
// 	}
// 	100% {
// 		opacity: 1;
// 		transform: translateX(${xPos}px);
// 	}`;
// const scrollAltLeft = (xPos) => keyframes`
// 	0% {
// 		transform: translateX(calc(100%));
// 	}
// 	100% {
// 		transform: translateX(${xPos}px);
// 	}`;

// const titles = [
// 	'student',
// 	'dev',
// 	'mobile & web',
// 	'linux',
// 	'ML & AI',
// 	'wannabe musician',
// ];

// // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const HoverTitles = ({ title, scrollMode }) => {
// 	const duration = (25 / 5) * title.length + (Math.random() * 6 - 3); // optimized to "linux" speed
// 	// const scrollMode = Math.random() > 0.5 ? scrollRight : scrollLeft;
// 	const [hover, setHover] = useState(false);
// 	return (
// 		<Box
// 			sx={{
// 				height: '70px',
// 				display: 'flex',
// 				backgroundColor: 'transparent',
// 				maxWidth: '100%',
// 			}}
// 			onMouseEnter={() => setHover(true)}
// 			onMouseLeave={() => setHover(false)}
// 		>
// 			<Box
// 				sx={{
// 					whiteSpace: 'nowrap',
// 					overflow: 'hidden',
// 					position: 'absolute',
// 					// paddingLeft: `${paddingValue}%`,
// 				}}
// 			>
// 				<Typography
// 					sx={{
// 						fontSize: 'clamp(1rem, 2.5rem, 6em)',
// 						fontWeight: 300,
// 						fontFamily: 'Rubik',
// 						animation: `${scrollMode} ${duration}s linear infinite`,
// 						display: 'inline-block',
// 						// paddingRight: '100%',
// 						paddingLeft: '100%',
// 						color: '#7d7878',

// 						// opacity: 0.5,
// 					}}
// 				>
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					<span
// 						style={{
// 							color: '#FAF0F1',
// 						}}
// 					>
// 						{title}&nbsp;
// 					</span>
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 				</Typography>
// 			</Box>
// 			<Box
// 				sx={{
// 					margin: '0 auto',
// 					whiteSpace: 'nowrap',
// 					overflow: 'hidden',
// 					position: 'absolute',
// 				}}
// 			>
// 				<Typography
// 					sx={{
// 						fontSize: 'clamp(1rem, 2.5rem, 6em)',
// 						fontWeight: 300,
// 						fontFamily: 'Rubik',
// 						animation: `${scrollMode} ${duration}s linear infinite`,
// 						animationDelay: `-${duration / 2}s`,
// 						display: 'inline-block',
// 						paddingLeft: '100%',
// 						color: '#7d7878',

// 						// opacity: 0.5,
// 					}}
// 				>
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					<span
// 						style={{
// 							color: '#FAF0F1',
// 						}}
// 					>
// 						{title}&nbsp;
// 					</span>
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 				</Typography>
// 			</Box>
// 		</Box>
// 	);
// };

// const HoverTitleEased = ({ title, easeLoc, scrollOption = 'right' }) => {
// 	const scrollMode =
// 		scrollOption === 'right' ? scrollAlt(easeLoc) : scrollAltLeft(easeLoc);
// 	return (
// 		<Box
// 			sx={{
// 				height: '70px',
// 				display: 'flex',
// 				backgroundColor: 'transparent',
// 				maxWidth: '100%',
// 			}}
// 		>
// 			<Box
// 				sx={{
// 					whiteSpace: 'nowrap',
// 					overflow: 'hidden',
// 					position: 'absolute',
// 					// paddingLeft: `${paddingValue}%`,
// 				}}
// 			>
// 				<Typography
// 					sx={{
// 						fontSize: 'clamp(1rem, 2.5rem, 6em)',
// 						fontWeight: 300,
// 						fontFamily: 'Rubik',
// 						animation: `${scrollMode} 2s ease-out`,
// 						display: 'inline-block',
// 						color: '#333131',
// 						transform: `translateX(${easeLoc}px)`,
// 						// animationDelay: `${animationDelay}s`,
// 						// paddingLeft: ,
// 					}}
// 					aria-hidden="true"
// 				>
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					<span
// 						style={{
// 							color: '#FAF0F1',
// 						}}
// 					>
// 						{title}&nbsp;
// 					</span>
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 					{title}&nbsp;
// 				</Typography>
// 			</Box>
// 		</Box>
// 	);
// };

// const ProfileAboutFiller = () => {
// 	return (
// 		<Box>
// 			<Box
// 				sx={{
// 					position: 'relative',
// 					overflow: 'hidden',
// 					aspectRatio: '18/10',
// 					width: '750px',
// 				}}
// 			>
// 				{/* {titles.map((title, index) => {
// 					return (
// 						<HoverTitleEased
// 							title={title}
// 							key={`title-${index}`}
// 							// scrollMode={index % 2 == 0 ? scrollLeft : scrollRight}
// 						/>
// 					);
// 				})} */}
// 				<HoverTitleEased title="student" easeLoc={-700} />
// 				<HoverTitleEased
// 					title="dev"
// 					easeLoc={-150}
// 					animationDelay={0.2}
// 					scrollOption="left"
// 				/>
// 				<HoverTitleEased title="mobile & web" easeLoc={-1350} />
// 				<HoverTitleEased title="linux" easeLoc={-300} scrollOption="left" />
// 				<HoverTitleEased title="ML & AI" easeLoc={-575} />
// 				{/* <HoverTitleEased
// 					title="wannabe musician"
// 					easeLoc={-1850}
// 					scrollOption="left"
// 				/> */}
// 			</Box>
// 		</Box>
// 	);
// };

// export default ProfileAboutFiller;
