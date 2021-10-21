import React from 'react';
import ProjectCard from '../projects/ProjectCard';
import { Box } from '@mui/material';
import NameTags from '../navigation/NameTags';
const cards = [1, 2, 3, 4, 5, 6, 7];
const ProjectBlock = () => {
	return (
		<div>
			<NameTags>{'<my-projects>'}</NameTags>
			{cards.map((d, i) => (
				<ProjectCard
					name="ChanceMap"
					description="A social media platform where students can find the extracurriculars that they are truly passionate about and discover new opportunities!"
					key={`card-${i}`}
				/>
			))}
			<NameTags>{'</my-projects>'}</NameTags>
		</div>
	);
};

export default ProjectBlock;
