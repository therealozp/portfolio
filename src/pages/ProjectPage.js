import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ContactBlock from '../components/blocks/ContactBlock';

import { svg, utils, animate, createSpring } from 'animejs';
import {
	PENTAGON,
	SQUARE,
	FOUR_WINGED_STAR,
	TWELVE_WINGED_STAR,
	EIGHT_WINGED_STAR,
	POINTED_STAR,
} from '../components/extra/constants';
``;
import ProjectSection_v3 from '../components/projects/ProjectSection_v3';
const paths = [
	FOUR_WINGED_STAR,
	SQUARE,
	EIGHT_WINGED_STAR,
	PENTAGON,
	TWELVE_WINGED_STAR,
	POINTED_STAR,
];

const SpinningAnimation = () => {
	const pathEl = useRef(null);
	const svgEl = useRef(null);

	const colors = ['#B0D7FF', '#bb8588', '#565676', '#FFF9FB', '#869D7A'];

	useEffect(() => {
		const [$path1, $path2] = utils.$('path');

		let index = 0;
		animate(svgEl.current, {
			rotate: '1turn',
			ease: createSpring({
				mass: 1,
				stiffness: 203,
				damping: 10,
				velocity: 0,
			}),
			onLoop: () => {
				index = (index + 1) % paths.length;
				utils.set($path2, {
					d: paths[index],
				});
				animate($path1, {
					fill: colors[Math.floor(Math.random() * colors.length)],
					d: svg.morphTo($path2),
					ease: 'outQuad',
					duration: 500,
				});
			},
			loop: true,
			loopDelay: 500,
		});
	});

	return (
		<svg
			ref={svgEl}
			width="10em"
			height="10em"
			viewBox="0 0 100 100"
			style={{
				display: 'block',
				margin: 'auto',
				transformOrigin: '50% 50%',
			}}
		>
			<path ref={pathEl} d={paths[0]} fill={colors[0]} id="path1" />
			<path ref={pathEl} d={paths[0]} id="path2" style={{ opacity: 0 }} />
		</svg>
	);
};

const ProjectIntro = () => {
	const letters = 'projects';
	const letterRefs = useRef([]);
	const containerRef = useRef(null);
	const initialTransforms = useRef([]);
	const lastPositions = useRef([]);

	useEffect(() => {
		letterRefs.current.forEach((el, i) => {
			if (!el) return;
			const angle = (Math.random() - 0.5) * 20;
			const x = (Math.random() - 0.5) * 40;
			const y = (Math.random() - 0.5) * 40;

			initialTransforms.current[i] = { rotate: angle, x, y };
			lastPositions.current[i] = { x, y };

			animate(el, {
				rotate: `${angle}deg`,
				translateX: x,
				translateY: y,
				duration: 1200,
				delay: i * 50,
			});
		});

		let ticking = false;

		const handleMouseMove = (e) => {
			if (ticking) return;
			ticking = true;

			requestAnimationFrame(() => {
				const { clientX, clientY } = e;

				letterRefs.current.forEach((el, i) => {
					if (!el) return;
					const rect = el.getBoundingClientRect();
					const dx = clientX - (rect.left + rect.width / 2);
					const dy = clientY - (rect.top + rect.height / 2);
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 200) {
						const angle = Math.atan2(dy, dx);
						const force = -Math.max(200 / (distance * 0.5), 5);

						const x = lastPositions.current[i].x + Math.cos(angle) * force;
						const y = lastPositions.current[i].y + Math.sin(angle) * force;
						lastPositions.current[i] = { x, y };

						animate(el, {
							translateX: x,
							translateY: y,
							rotate: `+=${(Math.random() - 0.5) * 30}`,
							duration: 300,
						});
					} else {
						const { rotate, x, y } = initialTransforms.current[i];
						lastPositions.current[i] = { x, y };
						animate(el, {
							rotate: `${rotate}deg`,
							translateX: x,
							translateY: y,
							duration: 600,
						});
					}
				});

				ticking = false;
			});
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 2,
				height: '100%',
			}}
		>
			<Box
				ref={containerRef}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{letters.split('').map((letter, index) => (
					<Box
						key={index}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{letter === 'o' ? (
							<SpinningAnimation />
						) : (
							<Typography
								ref={(el) => (letterRefs.current[index] = el)}
								sx={{
									fontSize: '10rem',
									fontFamily: 'Comic Cat',
									fontWeight: '900',
									lineHeight: 1,
								}}
							>
								{letter}
							</Typography>
						)}
					</Box>
				))}
			</Box>
			<Typography
				variant="h5"
				sx={{
					textAlign: 'center',
					fontWeight: '700',
					opacity: 0.6,
				}}
			>
				a compilation of things I have worked on over the years
			</Typography>
		</Box>
	);
};

const ProjectPage = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<ProjectIntro />
			</Box>
			<ProjectSection_v3 />
			<Box sx={{ height: '25vh' }} />
			<Box width="100%" padding="16px 32px">
				<ContactBlock />
			</Box>
		</>
	);
};

export default ProjectPage;
