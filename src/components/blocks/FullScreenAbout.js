import React, { useEffect, useRef, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FloatingWindow = ({ isShowing, content }) => {
	const windowRef = useRef(null);

	const xPositionRef = useRef(null);
	const yPositionRef = useRef(null);

	const storedXPositionRef = useRef(null);
	const storedYPositionRef = useRef(null);

	useEffect(() => {
		gsap.set(windowRef.current, { xPercent: -50, yPercent: -50 });
		const xSet = gsap.quickTo(windowRef.current, 'x', {
			duration: 0.3,
			ease: 'ease-in-out',
		});
		const ySet = gsap.quickTo(windowRef.current, 'y', {
			duration: 0.3,
			ease: 'ease-in-out',
		});

		const movePointer = () => {
			const xPosition = xPositionRef.current;
			const yPosition = yPositionRef.current;
			const storedXPosition = storedXPositionRef.current;
			const storedYPosition = storedYPositionRef.current;

			if (storedXPosition === xPosition && storedYPosition === yPosition)
				return;

			xSet(xPosition);
			ySet(yPosition);

			storedXPositionRef.current = xPosition;
			storedYPositionRef.current = yPosition;
		};

		gsap.ticker.add(movePointer);

		const updateMouseCoords = (event) => {
			xPositionRef.current = event.clientX;
			yPositionRef.current = event.clientY;
		};

		window.addEventListener('mousemove', updateMouseCoords);

		return () => {
			window.removeEventListener('mousemove', updateMouseCoords);
			gsap.ticker.remove(movePointer);
		};
	}, []);

	return (
		<Box
			sx={{
				opacity: isShowing ? 1 : 0,
				transition: 'opacity 0.5s ease-in-out',
				background: '#101312',
				borderRadius: '12px',
				height: '300px',
				aspectRatio: '4/3',
				pointerEvents: 'none',
				padding: '16px',
				position: 'fixed',
				top: 0,
				left: 0,
				fontFamily: 'monospace',
			}}
			ref={windowRef}
		>
			{content}
		</Box>
	);
};

const FullScreenAbout = () => {
	const SkillTypography = ({ children, ...props }) => {
		return (
			<Box {...props} width="100%">
				<Typography
					variant="h2"
					fontSize={'4vw'}
					fontFamily="Avant Garde Demi BT"
					margin="16px"
				>
					{children}
				</Typography>
			</Box>
		);
	};

	const [currentContent, setCurrentContent] = useState(0);
	const contents = [
		<Box key="fed">
			<Typography variant="h6" fontWeight="bold">
				Minimalism is key.
			</Typography>
			<Typography>
				Creating visually appealing and user-friendly interfaces.
			</Typography>
			<Typography variant="body2" mt={1}>
				<strong>Technologies:</strong>
				<br />- Design: Figma
				<br />- Frameworks: Angular, React, Next.js, Vite, Vue
				<br />- Languages: TypeScript, JavaScript, HTML, CSS
			</Typography>
			<Typography variant="body2" mt={2}>
				<strong>Experience:</strong> Front-end @ VSPACE
			</Typography>
		</Box>,
		<Box key="bea">
			<Typography variant="h6" fontWeight="bold">
				The backbone of everything.
			</Typography>
			<Typography>Building scalable and efficient back-end systems.</Typography>
			<Typography variant="body2" mt={1}>
				<strong>Technologies:</strong>
				<br />- Node.js, Express
				<br />- Databases: MongoDB, PostgreSQL, ChromaDB
				<br />- APIs: REST, GraphQL
			</Typography>
			<Typography variant="body2" mt={2}>
				<strong>Experience:</strong> Full-stack @ ChanceMap, ARIS
			</Typography>
		</Box>,
		<Box key="mlai">
			<Typography variant="h6" fontWeight="bold">
				Let your machine do the work.
			</Typography>
			<Typography>
				Implementing machine learning models to solve complex problems.
			</Typography>
			<Typography variant="body2" mt={1}>
				<strong>Technologies:</strong>
				<br />- Python, TensorFlow, PyTorch, Keras
				<br />- Libraries: scikit-learn, Pandas
			</Typography>
			<Typography variant="body2" mt={2}>
				<strong>Experience:</strong> ML Engineer/Researcher @ Kyanon Digital
			</Typography>
		</Box>,
		<Box key="iot">
			<Typography variant="h6" fontWeight="bold">
				EVERYTHING IS CONNECTED TO WIFI??
			</Typography>
			<Typography>
				Working with microcontrollers and other IoT devices.
			</Typography>
			<Typography variant="body2" mt={1}>
				<strong>Technologies:</strong>
				<br />- Microcontrollers: Arduino, Raspberry Pi
				<br />- Languages: C, C++, Python
			</Typography>
			<Typography variant="body2" mt={2}>
				<strong>Experience:</strong> Software @ Bulls Racing, Assistant @ DFX
				Lab, Autonomous Vehicle Project @ RANCS
			</Typography>
		</Box>,
		<Box key="os">
			<Typography variant="h6" fontWeight="bold">
				Blue screen of death
			</Typography>
			<Typography>
				Understanding and working with various operating systems.
			</Typography>
			<Typography variant="body2" mt={1}>
				<strong>Technologies:</strong>
				<br />- Systems: Linux (primary), Windows, macOS
				<br />- Tools: Bash, PowerShell
				<br />- Virtualization: Docker, Kubernetes, VMs
			</Typography>
		</Box>,
		<Box key="da">
			<Typography variant="h6" fontWeight="bold">
				Numbers don&apos;t lie
			</Typography>
			<Typography>Analyzing and interpreting complex data sets.</Typography>
			<Typography variant="body2" mt={1}>
				<strong>Technologies:</strong>
				<br />- Tools: Excel, Python
				<br />- Libraries: Pandas, NumPy, Matplotlib
			</Typography>
		</Box>,
	];

	const [isWindowVisible, setIsWindowVisible] = useState(false);

	useEffect(() => {
		gsap.from('#test-item', {
			scrollTrigger: {
				trigger: '#test-item',
				start: 'top bottom',
				end: 'top top',
				scrub: 0.6,
				onScrubComplete: () => {
					gsap.to('#tagline', {
						opacity: 1,
						x: 50,
						delay: 0.5,
					});
				},
			},
			translateX: '-70%',
			borderTopRightRadius: 700,
		});
	}, []);

	return (
		<>
			<Box
				minHeight="100vh"
				width="100vw"
				backgroundColor="#994636"
				padding="16px"
				id="test-item"
			>
				<Box height="50vh" />
				<Box
					display="flex"
					justifyContent={'center'}
					alignItems={'center'}
					flexDirection="column"
				>
					<Typography
						variant="h1"
						fontFamily="Simplon Mono Medium Regular"
						id="tagline"
						sx={{
							opacity: 0,
							translateX: '-50',
						}}
					>
						one dev, <br /> unlimited paths.
					</Typography>
					<Box height="25vh" onMouseEnter={() => setIsWindowVisible(false)} />
					<Box
						width="80%"
						onMouseEnter={() => setIsWindowVisible(true)}
						onMouseLeave={() => setIsWindowVisible(false)}
					>
						<Divider sx={{ background: 'white' }} />
						<SkillTypography onMouseEnter={() => setCurrentContent(0)}>
							Front-end Development
						</SkillTypography>
						<Divider sx={{ background: 'white' }} />

						<SkillTypography onMouseEnter={() => setCurrentContent(1)}>
							Back-end Architecture
						</SkillTypography>
						<Divider sx={{ background: 'white' }} />

						<SkillTypography onMouseEnter={() => setCurrentContent(2)}>
							ML & AI
						</SkillTypography>
						<Divider sx={{ background: 'white' }} />

						<SkillTypography onMouseEnter={() => setCurrentContent(3)}>
							Embedded Systems & IoT
						</SkillTypography>
						<Divider sx={{ background: 'white' }} />

						<SkillTypography onMouseEnter={() => setCurrentContent(4)}>
							Operating Systems
						</SkillTypography>
						<Divider sx={{ background: 'white' }} />
						{/* 
						<SkillTypography onMouseEnter={() => setCurrentContent(5)}>
							Data Analysis
						</SkillTypography>
						<Divider sx={{ background: 'white' }} /> */}
					</Box>
				</Box>
				<Box height="50vh" onMouseEnter={() => setIsWindowVisible(false)} />
			</Box>
			<FloatingWindow
				isShowing={isWindowVisible}
				content={contents[currentContent]}
			/>
		</>
	);
};

export default FullScreenAbout;
