'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { gsap } from 'gsap';
import Draggable from 'gsap/dist/Draggable';
import Image from 'next/image';
import { verticalLoop } from './verticalLoop';

import { projects } from '../extra/constants';

gsap.registerPlugin(Draggable);

const ProjectSection = () => {
	const [selectedProject, setSelectedProject] = useState(0);
	// const [timeline, setTimeline] = useState(null);
	const timelineRef = useRef(null);

	const handleProjectChange = (index) => {
		setSelectedProject(index);
		timelineRef.current.toIndex(index, { duration: 1, ease: 'power1.inOut' }); // Reduced duration for snappier animation
	};

	useEffect(() => {
		if (!timelineRef.current) {
			const projectPageNames = gsap.utils.toArray('.projectPageName');
			const tl = verticalLoop(projectPageNames, {
				center: true,
				paused: true,
				draggable: true,
				intertia: false,
			});
			timelineRef.current = tl;
		}
	});

	return (
		<Grid
			display="flex"
			alignItems="center"
			p={2}
			height="90vh"
			container
			overflow="hidden"
		>
			<Grid
				sx={{
					height: '75vh',
				}}
				item
				xs={6}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '80vh',
						// overflowY: 'hidden',
					}}
				>
					{projects.map((project, index) => (
						<Typography
							key={project.name}
							variant="h1"
							sx={{
								cursor: 'pointer',
								fontFamily: 'Simplon Mono Medium Regular',
								textTransform: 'uppercase',
								fontWeight: '700',
								lineHeight: '1.4',
								letterSpacing: '0.05em',
								filter:
									selectedProject === index
										? 'brightness(1)'
										: 'brightness(0.6)',
								transition: 'filter 0.3s ease-in-out',
								fontSize: 'clamp(1.5rem, 6vw, 7rem)',
							}}
							className="projectPageName"
							onClick={() => handleProjectChange(index)}
						>
							{project.name}
						</Typography>
					))}
				</Box>
			</Grid>
			<Grid xs={6} item>
				<Box
					width="100%"
					height="100%"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box
						sx={{
							position: 'relative',
							height: '40vh',
							aspectRatio: '16/9',
							marginBottom: '32px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{projects[selectedProject].image !== 'N/A' ? (
							<Image
								src={projects[selectedProject].image}
								layout="fill"
								objectFit="cover"
								// placeholder="blur"
								alt={projects[selectedProject].imageAlt}
							/>
						) : (
							<Typography sx={{ fontFamily: 'monospace' }}>
								this project doesn&apos;t have an image ╥ᆺ╥； (yet!)
							</Typography>
						)}
					</Box>
					<Box width="100%" height="30vh">
						<Typography
							variant="h3"
							sx={{ fontFamily: 'Simplon Mono Medium Regular' }}
						>
							{projects[selectedProject].fullName}
						</Typography>
						<Typography sx={{ fontFamily: 'monospace', fontSize: '1.4rem' }}>
							{projects[selectedProject].description}
						</Typography>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProjectSection;
