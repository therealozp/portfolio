'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { gsap, Expo } from 'gsap';

const AppWindow = ({ children, height, width, windowName, id }) => {
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
				opacity: 0,
				scale: 0,
			}}
			className="titleBackgroundContainer"
			id={id}
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

const AsciiDonut = () => {
	const frameRef = useRef(null);

	const drawDonut = () => {
		let A = 0;
		let B = 0;

		const renderFrame = () => {
			const width = Math.floor(window.innerWidth / 10);
			const height = Math.floor(window.innerHeight / 20);
			const background = ' ';
			const b = new Array(width * height).fill(background);
			const z = new Array(width * height).fill(0);

			for (let j = 0; j < 6.28; j += 0.07) {
				for (let i = 0; i < 6.28; i += 0.02) {
					const c = Math.sin(i);
					const d = Math.cos(j);
					const e = Math.sin(A);
					const f = Math.sin(j);
					const g = Math.cos(A);
					const h = d + 2;
					const D = 1 / (c * h * e + f * g + 5);
					const l = Math.cos(i);
					const m = Math.cos(B);
					const n = Math.sin(B);
					const t = c * h * g - f * e;

					const x = Math.floor(width / 2 + 30 * D * (l * h * m - t * n));
					const y = Math.floor(height / 2 + 15 * D * (l * h * n + t * m));
					const o = x + width * y;
					const N = Math.floor(
						8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n)
					);

					if (height > y && y > 0 && width > x && x > 0 && D > z[o]) {
						z[o] = D;
						b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0];
					}
				}
			}

			const output = [];
			for (let k = 0; k < width * height; k++) {
				output.push(k % width === width - 1 ? '\n' : b[k]);
			}

			if (frameRef.current) {
				frameRef.current.innerText = output.join('');
			}

			A += 0.04;
			B += 0.02;
			requestAnimationFrame(renderFrame);
		};

		renderFrame();
	};

	useEffect(() => {
		drawDonut();
	}, []);

	return (
		<pre
			ref={frameRef}
			style={{ fontSize: '10px', lineHeight: '10px', userSelect: 'none' }}
		/>
	);
};
const ProfileAboutFiller = () => {
	// neofetch-ish displays
	const terminalFontSize = 'clamp(1rem, 1vw, 1.2rem)';
	const KeyValue = ({ key_, value }) => {
		return (
			<Box display="flex">
				<Box width="150px">
					<Typography
						fontWeight="bold"
						fontFamily="monospace"
						color="#8ba4b0"
						fontSize={terminalFontSize}
					>
						{key_}
					</Typography>
				</Box>
				<Box width="300px">
					<Typography fontFamily="monospace" fontSize={terminalFontSize}>
						{value}
					</Typography>
				</Box>
			</Box>
		);
	};

	// command component
	const TerminalCommand = ({ ...props }) => {
		return (
			<Box {...props}>
				<Typography fontFamily="monospace" fontSize={terminalFontSize}>
					<strong style={{ color: '#649a7b' }}>
						{props.hostname}@{props.user}
					</strong>
					:<strong style={{ color: '#8ba4b0' }}>~{props.directory}</strong>${' '}
					{props.command}
				</Typography>
			</Box>
		);
	};

	// list items for md terminal
	const TermListItem = ({ item }) => {
		return (
			<Typography
				fontFamily={'monospace'}
				padding="2px 2px 2px 16px"
				fontSize={terminalFontSize}
			>
				- {item}
			</Typography>
		);
	};
	const windowHeight = 80;
	const windowPadding = 16;
	const asciiArt = `      /\\
     /+o\\
    / \\++\\
   /oooooo\\
  /++;;oo++\\
 /sss|  |ss-\\
/_-''    ''-_\\`;

	// define uptime clock and counter
	const [uptime, setUptime] = useState('00:00:00');

	useEffect(() => {
		const startTime = Date.now();

		const formatTime = (seconds) => {
			const hrs = Math.floor(seconds / 3600);
			const mins = Math.floor((seconds % 3600) / 60);
			const secs = Math.floor(seconds % 60);
			return `${hrs.toString().padStart(2, '0')}:${mins
				.toString()
				.padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
		};

		const updateUptime = () => {
			const currentTime = Date.now();
			const elapsedTime = Math.floor((currentTime - startTime) / 1000);
			setUptime(formatTime(elapsedTime));
		};

		const intervalId = setInterval(updateUptime, 1000);

		return () => clearInterval(intervalId);
	}, []);

	// gsap animations
	useEffect(() => {
		gsap.to('#neofetch-terminal', {
			scrollTrigger: {
				trigger: '#terminal-trigger',
				// markers: true,
				start: '30 center',
			},
			scale: 1,
			opacity: 1,
			ease: Expo.easeOut,
			onStart: () => {
				gsap.to('#plan-terminal', {
					scale: 1,
					opacity: 1,
					ease: Expo.easeOut,
					delay: 0.2,
					onStart: () => {
						gsap.to('#donut-terminal', {
							scale: 1,
							opacity: 1,
							ease: Expo.easeOut,
							delay: 0.2,
						});
					},
				});
			},
		});
	}, []);
	return (
		<Box height="max-content">
			<Grid container spacing={2} padding="16px" id="terminal-trigger">
				<Grid item xs={7}>
					<AppWindow
						windowName="terminal"
						height={`${windowHeight}vh`}
						id="neofetch-terminal"
					>
						<TerminalCommand
							hostname="info"
							user="portfolio"
							directory="/home/ozymandio/"
							command="neofetch"
						/>
						<Box
							display="flex"
							justifyContent="space-evenly"
							alignItems="baseline"
						>
							<Box>
								<pre
									style={{
										fontFamily: 'monospace',
										color: '#7fb4ca',
										fontSize: 'clamp(1rem, 1vw, 1.2rem)',
									}}
								>
									{asciiArt}
								</pre>
							</Box>
							<Box width="5%" />
							<Box width="60%">
								<KeyValue key_="name" value="Khang Le" />
								<KeyValue key_="studies" value="cs @ U South Florida" />
								<KeyValue key_="kernel" value="corn (?)" />
								<KeyValue key_="uptime" value={uptime} />
								<KeyValue
									key_="experiments"
									value="ricing linux systems, DIY servers, embedded programming, risc-v, ml/ai"
								/>
								<KeyValue
									key_="special interests"
									value="low level systems, hardware acceleration"
								/>
								<KeyValue
									key_="languages"
									value="c, c++, python, rust, java, js"
								/>
							</Box>
						</Box>
						<TerminalCommand
							hostname="info"
							user="portfolio"
							directory="/home/ozymandio/"
							marginTop="32px"
						/>
					</AppWindow>
				</Grid>
				<Grid item xs={5}>
					<AppWindow
						windowName="upcoming.md"
						height={`calc(${windowHeight / 2}vh - ${windowPadding / 2}px)`}
						id="plan-terminal"
					>
						<Box>
							<Typography
								fontFamily={'monospace'}
								fontWeight={'bold'}
								color="#c4b28a"
								marginBottom="12px"
								fontSize={terminalFontSize}
							>
								project plans for this season:
							</Typography>
							<TermListItem item="AI Intern @ Kyanon Digital" />
							<TermListItem item="OZ: operating zystem" />
							<TermListItem item="stable diffusion character generator" />
							<TermListItem item="quantitative trading" />
						</Box>
					</AppWindow>
					<Box height={windowPadding} />
					<AppWindow
						windowName="rotating donut"
						height={`calc(${windowHeight / 2}vh - ${windowPadding / 2}px)`}
						id="donut-terminal"
					>
						<Box marginLeft="-30%" marginTop="-12%">
							<AsciiDonut />
						</Box>
					</AppWindow>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ProfileAboutFiller;
