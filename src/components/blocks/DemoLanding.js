import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
// import { gsap } from 'gsap';
import VoxelDesk from '../../models/VoxelDesk';
import Link from 'next/link';

const NewLogo = () => {
	return (
		<svg
			viewBox="0 0 353 351"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				width: '100%',
				height: 'auto',
			}}
		>
			<circle cx="76" cy="133" r="50" fill="#A39788" />
			<path
				d="M142.672 211.597L255.744 45.8258L352.171 45.8258L142.672 211.597Z"
				fill="#F5EFE6"
			/>
			<g filter="url(#filter0_d_2_3)">
				<path
					d="M142.423 211.937L69.8471 318.865L3.99998 318.865L142.423 211.937Z"
					fill="#F5EFE6"
				/>
			</g>
			<g filter="url(#filter1_d_2_3)">
				<path
					d="M142.892 211.937L215.468 318.865L281.315 318.865L142.892 211.937Z"
					fill="#EADBC8"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_2_3"
					x="-3.05176e-05"
					y="211.937"
					width="146.423"
					height="114.927"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2_3"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_2_3"
						result="shape"
					/>
				</filter>
				<filter
					id="filter1_d_2_3"
					x="138.892"
					y="211.937"
					width="146.423"
					height="114.927"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2_3"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_2_3"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

// const BoundedCursorFollower = () => {
// 	const pointerRef = useRef(null);
// 	const leftEyeRef = useRef(null);
// 	const rightEyeRef = useRef(null);
// 	const catColor = '#faf0fe';

// 	const xPositionRef = useRef(null);
// 	const yPositionRef = useRef(null);

// 	const storedXPositionRef = useRef(null);
// 	const storedYPositionRef = useRef(null);

// 	const mapWidthRef = useRef(
// 		gsap.utils.mapRange(0, window.innerWidth, -25, 25)
// 	);
// 	const mapHeightRef = useRef(
// 		gsap.utils.mapRange(0, window.innerHeight, -25, 25)
// 	);

// 	useEffect(() => {
// 		const safeToAnimate = window.matchMedia(
// 			'(prefers-reduced-motion: no-preference)'
// 		).matches;
// 		if (!safeToAnimate) return;

// 		const updateMaps = () => {
// 			mapWidthRef.current = gsap.utils.mapRange(0, window.innerWidth, -25, 25);
// 			mapHeightRef.current = gsap.utils.mapRange(
// 				0,
// 				window.innerHeight,
// 				-25,
// 				25
// 			);
// 		};

// 		window.addEventListener('resize', updateMaps);
// 		updateMaps();

// 		// const xSet = gsap.quickSetter(pointerRef.current, 'x', '%');
// 		// const ySet = gsap.quickSetter(pointerRef.current, 'y', '%');

// 		// const element1 = pointerRef.current.querySelector('.svg-element1');
// 		// const element2 = pointerRef.current.querySelector('.svg-element2');

// 		// const xSetElement1 = gsap.quickSetter(element1, 'x', '%');
// 		// const ySetElement1 = gsap.quickSetter(element1, 'y', '%');

// 		// const xSetElement2 = gsap.quickSetter(element2, 'x', '%');
// 		// const ySetElement2 = gsap.quickSetter(element2, 'y', '%');

// 		const xSet = gsap.quickTo(pointerRef.current, 'xPercent', {
// 			duration: 0.3,
// 			ease: 'ease-in-out',
// 		});
// 		const ySet = gsap.quickTo(pointerRef.current, 'yPercent', {
// 			duration: 0.3,
// 			ease: 'ease-in-out',
// 		});

// 		const xSetElement1 = gsap.quickTo(leftEyeRef.current, 'xPercent', {
// 			duration: 0.3,
// 			ease: 'ease-in-out',
// 		});
// 		const ySetElement1 = gsap.quickTo(leftEyeRef.current, 'yPercent', {
// 			duration: 0.3,
// 			ease: 'ease-in-out',
// 		});

// 		const xSetElement2 = gsap.quickTo(rightEyeRef.current, 'xPercent', {
// 			duration: 0.3,
// 			ease: 'ease-in-out',
// 		});
// 		const ySetElement2 = gsap.quickTo(rightEyeRef.current, 'yPercent', {
// 			duration: 0.3,
// 			ease: 'ease-in-out',
// 		});

// 		const movePointer = () => {
// 			const xPosition = xPositionRef.current;
// 			const yPosition = yPositionRef.current;
// 			const storedXPosition = storedXPositionRef.current;
// 			const storedYPosition = storedYPositionRef.current;

// 			if (storedXPosition === xPosition && storedYPosition === yPosition)
// 				return;

// 			// gsap.to(pointerRef.current, {
// 			// 	x: `${xPosition}%`,
// 			// 	y: `${yPosition}%`,
// 			// 	duration: 0.5, // 0.5 seconds duration
// 			// 	ease: 'ease-out', // ease out
// 			// });

// 			// // Apply slight shifts for additional elements
// 			// gsap.to(leftEyeRef.current, {
// 			// 	x: `${xPosition * 0.9}%`,
// 			// 	y: `${yPosition * 0.9}%`,
// 			// 	duration: 0.5,
// 			// 	ease: 'ease-out',
// 			// });

// 			// gsap.to(rightEyeRef.current, {
// 			// 	x: `${xPosition * 1.1}%`,
// 			// 	y: `${yPosition * 1.1}%`,
// 			// 	duration: 0.5,
// 			// 	ease: 'ease-out',
// 			// });

// 			xSet(xPosition * 0.5);
// 			ySet(yPosition * 0.5);

// 			xSetElement1(xPosition * 1.2);
// 			ySetElement1(yPosition * 1.2);

// 			xSetElement2(xPosition * 1.2);
// 			ySetElement2(yPosition * 1.2);

// 			storedXPositionRef.current = xPosition;
// 			storedYPositionRef.current = yPosition;
// 		};

// 		gsap.ticker.add(movePointer);

// 		const updateMouseCoords = (event) => {
// 			xPositionRef.current = mapWidthRef.current(event.clientX);
// 			yPositionRef.current = mapHeightRef.current(event.clientY);
// 		};

// 		window.addEventListener('mousemove', updateMouseCoords);

// 		return () => {
// 			window.removeEventListener('resize', updateMaps);
// 			window.removeEventListener('mousemove', updateMouseCoords);
// 			gsap.ticker.remove(movePointer);
// 		};
// 	}, []);

// 	return (
// 		<Box className="pointer" ref={pointerRef} width="100%">
// 			<svg
// 				// width="417"
// 				// height="308"
// 				viewBox="0 0 417 308"
// 				fill="none"
// 				xmlns="http://www.w3.org/2000/svg"
// 				style={{
// 					width: '100%',
// 					height: 'auto',
// 				}}
// 			>
// 				<path
// 					d="M208.204 87.0006C291.046 87.1538 358.148 116.919 358.023 184.646C357.898 252.374 290.639 307.153 207.796 307C124.954 306.847 57.8983 251.819 58.0236 184.091C58.1489 116.364 125.361 86.8473 208.204 87.0006Z"
// 					fill={catColor}
// 				/>
// 				<path
// 					d="M76.0445 44.0828C76.7535 38.7411 82.9793 36.17 87.2509 39.4549L183.362 113.365C187.634 116.65 186.747 123.327 181.767 125.384L69.7034 171.663C64.7228 173.72 59.3833 169.614 60.0923 164.272L76.0445 44.0828Z"
// 					fill={catColor}
// 				/>
// 				<path
// 					d="M329.156 39.455C333.428 36.1702 339.654 38.7413 340.363 44.0831L356.314 164.273C357.023 169.615 351.683 173.721 346.703 171.664L234.64 125.383C229.659 123.326 228.773 116.649 233.045 113.364L329.156 39.455Z"
// 					fill={catColor}
// 				/>
// 				<path
// 					d="M214.548 237.671C211.362 242.209 204.638 242.209 201.452 237.671L189.994 221.346C186.273 216.045 190.065 208.75 196.542 208.75H219.458C225.935 208.75 229.727 216.045 226.006 221.346L214.548 237.671Z"
// 					fill="#363636"
// 				/>
// 				<path
// 					d="M164.063 250.354L169.805 254.118C179.892 260.731 193.263 259.198 201.592 250.474L208.461 243.279"
// 					stroke="#2E2E2A"
// 					strokeWidth="3"
// 				/>
// 				<path
// 					d="M251.336 250.261L245.59 254.017C235.494 260.617 222.125 259.067 213.807 250.332L206.947 243.129"
// 					stroke="#2E2E2A"
// 					strokeWidth="3"
// 				/>
// 				<ellipse
// 					cx="156.5"
// 					cy="197"
// 					rx="7.5"
// 					ry="12"
// 					fill="#2D2D2E"
// 					ref={leftEyeRef}
// 				/>
// 				<ellipse
// 					cx="255.5"
// 					cy="196"
// 					rx="7.5"
// 					ry="12"
// 					fill="#2D2D2E"
// 					ref={rightEyeRef}
// 				/>
// 				<path
// 					d="M349.064 192.13C353.142 191.945 357.235 190.771 361.285 190.26C365.696 189.702 370.065 189.511 374.503 189.511"
// 					stroke={catColor}
// 					strokeWidth="3"
// 					strokeLinecap="round"
// 				/>
// 				<path
// 					d="M346.071 209.713C352.136 209.161 357.989 210.087 364.028 210.087"
// 					stroke={catColor}
// 					strokeWidth="3"
// 					strokeLinecap="round"
// 				/>
// 				<path
// 					d="M63.6256 183.526C60.6512 182.888 57.897 181.097 54.8758 180.367C49.9945 179.187 45.0194 178.249 40.0573 177.54"
// 					stroke={catColor}
// 					strokeWidth="3"
// 					strokeLinecap="round"
// 				/>
// 				<path
// 					d="M42.3019 194.001H68.1148"
// 					stroke={catColor}
// 					strokeWidth="3"
// 					strokeLinecap="round"
// 				/>
// 				<path
// 					d="M68.4888 208.216C65.0976 208.738 61.5853 210.491 58.4297 211.708C51.8983 214.226 45.2888 216.395 38.5608 218.317"
// 					stroke={catColor}
// 					strokeWidth="3"
// 					strokeLinecap="round"
// 				/>
// 				<path
// 					d="M344.201 222.806C343.912 222.806 344.768 222.938 345.032 223.056C346.96 223.916 348.767 225.07 350.685 225.965C355.475 228.201 360.518 230.038 365.151 232.533"
// 					stroke={catColor}
// 					strokeWidth="3"
// 					strokeLinecap="round"
// 				/>
// 				<path
// 					d="M86.1341 53.1057L95 108L75.3587 127.868L86.1341 53.1057Z"
// 					fill="#2D2D2E"
// 				/>
// 				<path
// 					d="M333.924 55.0679L324.4 108L344.699 129.83L333.924 55.0679Z"
// 					fill="#2D2D2E"
// 				/>
// 			</svg>
// 		</Box>
// 	);
// };

const DemoLanding = () => {
	const accentColor = '#ffa987';
	return (
		<>
			<Box
				position="absolute"
				zIndex={0}
				left="25%"
				sx={
					{
						// transform: 'translateY(-25%)',
					}
				}
			>
				<VoxelDesk animationFinished />
			</Box>
			<Box
				height="100vh"
				width="100vw"
				display="flex"
				padding="8vh"
				flexDirection={'column'}
				maxHeight="100vh"
				overflow="clip"
			>
				<Grid container>
					<Grid xs={7}>
						<Box width="65vw">
							<Typography
								fontSize="2.5vw"
								// fontWeight={'bold'}
								fontFamily="Avant Garde Demi BT"
								zIndex={1}
								sx={{ mixBlendMode: 'difference' }}
							>
								I am a programmer that doesn&apos;t hesitate to{' '}
								<span style={{ color: accentColor }}>
									turn ideas into reality
								</span>{' '}
								- if curiosity{' '}
								<span style={{ color: accentColor }}>couldn&apos;t</span> kill
								the cat.
							</Typography>
						</Box>
						<Box width={{ md: '15vw', xl: '18vw' }}>
							<NewLogo />
						</Box>
					</Grid>
					<Grid xs={5}>
						<Box display="flex" width="100%" justifyContent="flex-end">
							<Link href="/Khang Le Resume.pdf" passHref>
								<Typography
									fontFamily="monospace"
									sx={{
										textDecoration: 'underline',
										textUnderlineOffset: '3px',
										textDecorationStyle: 'wavy',
										cursor: 'pointer',
									}}
								>
									secret resume link...
								</Typography>
							</Link>
						</Box>
					</Grid>
				</Grid>

				<Box
					display="flex"
					alignItems="center"
					alignSelf={'flex-end'}
					justifySelf="flex-end"
					justifyContent={'space-between'}
					width="100%"
				>
					<Box
						display="flex"
						height="100%"
						alignItems="flex-end"
						marginBottom="-2vw"
						width={{ md: '48%', xl: '40%' }}
						justifyContent={'space-between'}
					>
						<Typography
							fontFamily="Simplon Mono Medium Regular"
							textTransform="capitalize"
							fontSize="1.5rem"
						>
							27.9517° N, 82.4588° W <br />
							TAMPA, FL
						</Typography>
						<Typography
							fontFamily="Simplon Mono Medium Regular"
							fontSize={'1.2rem'}
							letterSpacing="1px"
						>
							(scroll for more)
						</Typography>
					</Box>
					<Box
						display="flex"
						alignItems="center"
						alignSelf={'flex-end'}
						justifySelf="flex-end"
						width={'min-content'}
						flexDirection={'column'}
					>
						<Typography fontFamily="Simplon Mono Medium Regular" variant="h5">
							Khang Le
						</Typography>
						<Typography
							variant="h1"
							fontFamily="Simplon Mono Medium Regular"
							fontSize="8vw"
							textTransform="uppercase"
							marginBottom="-5vh"
							zIndex={3}
							sx={{ mixBlendMode: 'difference' }}
						>
							<span style={{ color: accentColor }}>tinkering</span> since
							&apos;04
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default DemoLanding;
