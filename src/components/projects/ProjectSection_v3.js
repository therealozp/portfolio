import React from 'react';

import { Box, Typography } from '@mui/material';
import { projects as projectList } from '../extra/constants';
import Image from 'next/image';
import Link from 'next/link';

const projects = projectList.sort((a, b) => {
	return a.year < b.year ? 1 : -1; // Sort by year descending
});

const Project = ({ project }) => {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(24, 1fr)',
				gap: 2,
				width: '100%',
				py: 4,
				borderTop: '1px solid #B0D7FF',
			}}
		>
			<Link
				href={project.link || '#'}
				passHref
				target="_blank"
				rel="noopener noreferrer"
			>
				<Typography
					sx={{
						gridColumn: '1 / 7',
						cursor: 'pointer',
						mb: 4,
						p: '4px',
						px: '12px',
						backgroundColor: '#B0D7FF',
						width: 'fit-content',
						borderRadius: '4px',
						border: '1px solid transparent',
						color: 'black',
						transition:
							'background-color 0.2s ease, color 0.2s ease, border 0.2s ease',
						':hover': {
							backgroundColor: 'transparent',
							color: '#B0D7FF',
							border: '1px solid #B0D7FF',
						},
						textDecoration: 'none',
						fontFamily: 'Simplon Mono Medium Regular, Inconsolata, monospace',
						height: 'fit-content',
						fontSize: '1.2rem',
					}}
				>
					{project.fullName || project.name}
				</Typography>
			</Link>

			<Box
				sx={{
					gridColumn: '8 / 16',
				}}
			>
				<Typography>
					{project.description || 'no description available'}
				</Typography>
			</Box>
			<Box sx={{ gridColumn: '17 / 25' }}>
				<Box
					sx={{
						height: '275px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						border: '16px solid #B0D7FF',
						borderLeft: '20px solid #B0D7FF',
						borderRight: '20px solid #B0D7FF',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					{project.image && project.image !== 'N/A' ? (
						<Image
							src={project.image}
							alt={project.imageAlt}
							layout="fill"
							objectFit={'cover'}
						/>
					) : (
						<Typography
							sx={{
								fontFamily: 'monospace',
								fontSize: '0.8rem',
								textAlign: 'center',
							}}
						>
							this project doesn&apos;t have an image ╥ᆺ╥； (yet!)
						</Typography>
					)}
				</Box>
			</Box>
		</Box>
	);
};

const LegacyProject = ({ project }) => {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(24, 1fr)',
				gap: 2,
				width: '100%',
				py: 3,
				borderTop: '1px solid #565676',
			}}
		>
			<Typography
				sx={{
					gridColumn: '1 / 7',
					p: '4px',
					px: '12px',
					backgroundColor: '#565676',
					width: 'fit-content',
					borderRadius: '4px',
					color: 'black',
					fontFamily: 'Simplon Mono Medium Regular, Inconsolata, monospace',
					height: 'fit-content',
					fontSize: '1.2rem',
				}}
			>
				{project.fullName || project.name}
			</Typography>

			<Box
				sx={{
					gridColumn: '8 / 20',
				}}
			>
				<Typography>
					{project.description || 'no description available'}
				</Typography>
			</Box>

			<Box
				sx={{
					gridColumn: '21 / 25',
					display: 'flex',
					justifyContent: 'flex-end',
				}}
			>
				<Typography sx={{ fontFamily: 'monospace' }}>
					{project.year || 'N/A'}
				</Typography>
			</Box>
		</Box>
	);
};

const ProjectSection_v3 = () => {
	return (
		<Box
			sx={{
				px: 4,
			}}
		>
			<Box sx={{ mt: 6, mb: 3, display: 'flex', alignItems: 'center' }}>
				<Typography
					variant="h6"
					sx={{
						fontFamily: 'Comic Cat, Inconsolata, monospace',
						color: '#B0D7FF',
						mr: 2,
						fontSize: '1.5rem',
					}}
				>
					Featured
				</Typography>
				<Box
					sx={{
						flex: 1,
						height: '1px',
						backgroundColor: '#B0D7FF',
						opacity: 0.5,
					}}
				/>
			</Box>
			<Typography
				sx={{
					mb: 3,
					color: '#9999A8',
					fontStyle: 'italic',
					fontSize: '0.9rem',
				}}
			>
				Some of my favorite projects that I am really proud of!
			</Typography>
			{projects.map((project) => (
				<>
					{project.status === 'legacy' ? null : (
						<Project key={project.id} project={project} />
					)}
				</>
			))}
			<Box sx={{ border: '1px solid #B0D7FF' }} />
			<Box sx={{ height: '10vh' }} />
			<Box sx={{ mt: 6, mb: 3, display: 'flex', alignItems: 'center' }}>
				<Typography
					variant="h6"
					sx={{
						fontFamily: 'Comic Cat, Inconsolata, monospace',
						color: '#565676',
						mr: 2,
						fontSize: '1.5rem',
					}}
				>
					Archive
				</Typography>
				<Box
					sx={{
						flex: 1,
						height: '1px',
						backgroundColor: '#565676',
						opacity: 0.5,
					}}
				/>
			</Box>
			<Typography
				sx={{
					mb: 3,
					color: '#9999A8',
					fontStyle: 'italic',
					fontSize: '0.9rem',
				}}
			>
				Earlier projects and experiments
			</Typography>

			{projects.map((project) => (
				<>
					{project.status === 'legacy' ? (
						<LegacyProject key={project.id} project={project} />
					) : null}
				</>
			))}
			<Box sx={{ border: '1px solid #565676' }} />
		</Box>
	);
};

export default ProjectSection_v3;
