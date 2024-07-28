import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { createNoise3D } from 'simplex-noise';
import { gsap, Power3 } from 'gsap';

const BACKGROUND_COLOR = 'transparent';
const FOREGROUND_COLOR = 'rgba(255, 255, 255, 1)';
const LINE_SPACING_PX = 20;
const NODE_SPACING_PX = 10;
const AMPLITUDE_PX = 3;
const PEAK_HEIGHT_PX = 30;
const PEAK_WIDTH_RATIO = 1 / 10;
const WOBBLE_SPEED = 1 / 240;
const LINE_WIDTH = 2;

const UnknownPleasures = () => {
	const canvasRef = useRef(null);
	let t = useRef(0).current;
	let baselineOffset = useRef(0).current;
	let phase = useRef(0).current;
	let peakX = useRef(0).current;

	const accentColor = '#ffa987';

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const h = (canvas.height = canvas.parentElement.offsetHeight);
		const w = (canvas.width = canvas.parentElement.offsetWidth);
		peakX = w / 2;
		const noise3D = createNoise3D();

		ctx.fillStyle = BACKGROUND_COLOR;
		ctx.strokeStyle = FOREGROUND_COLOR;
		ctx.lineWidth = LINE_WIDTH;

		const numLines =
			Math.floor(h / LINE_SPACING_PX) +
			1 +
			Math.ceil(PEAK_HEIGHT_PX / LINE_SPACING_PX);
		const numNodes = Math.floor(w / NODE_SPACING_PX) + 1;
		const lines = Array.from(
			{ length: numLines },
			() => new Int8Array(new ArrayBuffer(numNodes))
		);
		const hTotal = numLines * LINE_SPACING_PX;

		const step = () => {
			const peakNode = Math.round(peakX / NODE_SPACING_PX);

			ctx.clearRect(0, 0, w, h);

			for (let lineIdx = 0; lineIdx < numLines; ++lineIdx) {
				const adjustedLineIdx = (lineIdx + phase) % numLines;
				const nodes = lines[adjustedLineIdx];
				const baseline =
					((adjustedLineIdx + 0.5) * LINE_SPACING_PX - baselineOffset) % hTotal;

				for (let nodeIdx = 0; nodeIdx < numNodes; ++nodeIdx) {
					const noise = noise3D(adjustedLineIdx, nodeIdx, t * WOBBLE_SPEED);
					const newValue =
						PEAK_HEIGHT_PX *
							(noise + 1) *
							Math.pow(
								Math.E,
								-Math.pow(
									(nodeIdx - peakNode) / (numNodes * PEAK_WIDTH_RATIO),
									2
								)
							) +
						noise * AMPLITUDE_PX;
					nodes[nodeIdx] = newValue;
				}

				ctx.beginPath();
				ctx.moveTo(0, baseline);
				ctx.lineTo(0, baseline - nodes[0]);
				for (let x = 1; x < numNodes - 1; ++x) {
					const y = nodes[x];
					const midX = x + 0.5;
					const midY = (y + nodes[x + 1]) / 2;
					ctx.quadraticCurveTo(
						x * NODE_SPACING_PX,
						baseline - y,
						midX * NODE_SPACING_PX,
						baseline - midY
					);
				}
				ctx.lineTo(w, baseline);
				ctx.fill();
				ctx.stroke();
			}

			t++;
			requestAnimationFrame(step);
		};

		step();
	});
	useEffect(() => {
		gsap.from('.unknown-pleasures-title', {
			opacity: 0,
			y: 100,
			duration: 1.5,
			ease: Power3.easeOut,
		});
		gsap.from('#unknown-pleasures-subtitle', {
			opacity: 0,
			y: 50,
			duration: 1,
			ease: Power3.easeOut,
			delay: 0.5,
		});
	});
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100vw',
				height: '100vh',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontWeight: 'bold',
						fontFamily: 'Simplon Mono Medium Regular',
						textTransform: 'uppercase',
						fontSize: '9rem',
						color: accentColor,
					}}
					className="unknown-pleasures-title"
				>
					Projects
				</Typography>
				<Typography
					sx={{ fontFamily: 'monospace', fontSize: '1.5em' }}
					id="unknown-pleasures-subtitle"
				>
					the premier selection
				</Typography>
			</Box>
			<Box
				sx={{
					// marginTop: '-20vh',
					background: BACKGROUND_COLOR,
					height: '120vh',
					width: '100vh',
					// overflow: 'hidden',
					position: 'static',
					transform: 'scale(0.6) perspective(1200px) rotateX(50deg) ',
					display: 'flex',
					justifyContent: 'center',
					opacity: '0.6',
				}}
			>
				<canvas
					ref={canvasRef}
					style={{
						position: 'absolute',
						top: '0',
						bottom: '0',
						left: '0',
						right: '0',
					}}
				></canvas>
			</Box>
		</Box>
	);
};

export default UnknownPleasures;
