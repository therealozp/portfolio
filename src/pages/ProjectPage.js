import React from 'react';
import Navbar from '../components/navigation/Navbar';
import { Box } from '@mui/system';
import ProjectPageCard from '../components/projects/ProjectPageCard';

const projects = [
	{
		name: 'ChanceMap',
		description:
			'Extracurriculars are yet to be received by all student communities, and ChanceMap helps you make the transition!',
		status: 'ready',
		href: 'https://www.chancemap.com/',
		src: '/chancemap.png',
		subtitle: 'Social Media Platform',
		button: 'visit',
	},
	{
		name: 'VSPACE',
		description: 'Learning English made easy (and affordable too!)',
		status: 'ready',
		href: 'https://www.vspace.org.vn',
		src: '/vspace.png',
		subtitle: 'Marketing Website',
		button: 'visit',
	},
	{
		name: 'Excellaca',
		description:
			'Interesting knowledge, passed down from one student to the other. After all, why should we be discouraged from trying out new things? ',
		status: 'ready',
		href: 'https://excellaca.org',
		src: '/excellaca.png',
		subtitle: 'Student-powered Courses',
		button: 'visit',
	},
	{
		name: 'Lexi',
		description:
			'A ready-made quiz app that accompanies you on all your English lexicon pursuits!',
		status: 'ready',
		href: 'https://lexi.vercel.app/',
		src: '/lexi.png',
		subtitle: 'Got Vocabulary?',
		button: 'visit',
	},
	{
		name: 'Cureator',
		description:
			'Diagnose your symptoms, find local medicine and nearby pharmacies for illnesses commonly come across',
		status: 'prototype',
		href: 'https://lexi.vercel.app/',
		src: '/cureator.png',
		subtitle: 'Stay safe, stay healthy',
		button: 'preview',
	},
	{
		name: '2SchoolQueb',
		description:
			'Where students can become tutors, and where learners can become students! ...wait, something is still off...',
		status: 'prototype',
		href: 'https://lexi.vercel.app/',
		src: '/noen',
		subtitle: 'School is 2cool',
		button: 'preview',
	},
];

const ProjectPage = () => {
	return (
		<>
			<Navbar />
			<Box
				sx={{
					padding: '32px',
					display: 'grid',
					gridTemplateColumns: '50% 50%',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{projects.map((d, i) => {
						if (i % 2 == 0) {
							return (
								<ProjectPageCard
									name={d.name}
									description={d.description}
									src={d.src}
									buttonText={d.button}
									miniTitle={d.subtitle}
									href={d.href}
									status={d.status}
									key={`projectPageCard-${i}`}
								/>
							);
						}
					})}
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Box id="spacer" sx={{ height: 200 }} />
					{projects.map((d, i) => {
						if (i % 2 == 1) {
							return (
								<ProjectPageCard
									name={d.name}
									description={d.description}
									src={d.src}
									buttonText={d.button}
									miniTitle={d.subtitle}
									href={d.href}
									status={d.status}
									key={`projectPageCard-${i}`}
								/>
							);
						}
					})}
				</Box>
			</Box>
		</>
	);
};

export default ProjectPage;
