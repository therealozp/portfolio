import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
const CustomCursor = () => {
	const cursorRef = useRef(null);
	useEffect(() => {
		document.addEventListener('mousemove', (event) => {
			const offsetX = cursorRef.current.clientWidth / 2;
			const offsetY = cursorRef.current.clientHeight / 2;

			const mouseMoveX = event.clientX - offsetX;
			const mouseMoveY = event.clientY - offsetY;

			cursorRef.current.style.transform = `translate3d(${mouseMoveX}px, ${mouseMoveY}px, 0)`;
		});
	}, []);
	return (
		// <Box
		// 	ref={cursorRef}
		// 	sx={{
		// 		position: 'fixed',
		// 		height: mouseEntered ? '100px' : '0px',
		// 		width: mouseEntered ? '100px' : '0px',
		// 		backgroundColor: 'white',
		// 		borderRadius: '50%',
		// 		pointerEvents: 'none',
		// 		transition:
		// 			'height 0.2s ease, width 0.2s ease, transform 0.2s ease-out',
		// 		mixBlendMode: 'difference',
		// 		zIndex: 10000,
		// 		willChange: 'transform, height, width',
		// 	}}
		// ></Box>
		<Box
			sx={{
				position: 'fixed',
			}}
		>
			<svg viewBox="0 0 700 700">
				<clipPath id="mask-clip">
					<path
						d="M51.4,-63.1C64.7,-50.2,72,-32.1,76.4,-12.6C80.8,6.8,82.3,27.6,73.9,43.2C65.5,58.7,47.2,69,28.5,74C9.8,78.9,-9.3,78.4,-26.6,72.4C-44,66.4,-59.5,54.9,-69.2,39.4C-78.9,23.8,-82.6,4.3,-78.8,-13.3C-75,-30.9,-63.6,-46.5,-49.2,-59.2C-34.8,-71.9,-17.4,-81.5,0.9,-82.6C19.1,-83.6,38.2,-76,51.4,-63.1Z"
						transform="translate(100 100)"
						ref={cursorRef}
					/>
				</clipPath>
			</svg>
		</Box>
	);
};

const QuoteText = ({ children, outlined, isTransparent }) => {
	return (
		<Typography
			sx={{
				fontFamily: 'Rubik',
				fontSize: '6rem',
				fontWeight: '900',
				// position: 'absolute',
				WebkitTextStroke: outlined ? '2px white' : 'none',
				WebkitTextFillColor: isTransparent ? 'transparent' : 'white',
			}}
		>
			{children}
		</Typography>
	);
};

const QuoteFiller = () => {
	const [mouseEntered, setmouseEntered] = useState(false);
	return (
		<>
			<CustomCursor mouseEntered={mouseEntered} />
			<Box
				sx={{
					height: '100vh',
					width: '100%,',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						height: '100vh',
						width: '100vw',
						// border: '1px solid white',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'relative',
						// overflow: 'hidden',
					}}
					id="quote-filler-element"
					onMouseEnter={() => {
						setmouseEntered(true);
					}}
					onMouseLeave={() => {
						setmouseEntered(false);
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '90%',
							clipPath: 'url(#mask-clip)',
							// filter: 'opacity(0)'
						}}
					>
						<Box
							sx={{
								position: 'absolute',
								width: '100%',
								height: '90%',
							}}
						>
							<Image
								src="/city-mask.png"
								alt="city-mask"
								objectFit="cover"
								layout="fill"
							/>
						</Box>
						<Box
							sx={{
								position: 'absolute',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<QuoteText>simplicity</QuoteText>
							<QuoteText>is the ultimate</QuoteText>
							<QuoteText>sophistication.</QuoteText>
						</Box>
					</Box>
					<Box
						sx={{
							position: 'absolute',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '90%',
						}}
					>
						<Box
							sx={{
								position: 'absolute',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<QuoteText isTransparent outlined>
								simplicity
							</QuoteText>
							<QuoteText isTransparent>is the ultimate</QuoteText>
							<QuoteText isTransparent>sophistication.</QuoteText>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default QuoteFiller;
