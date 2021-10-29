import React from 'react';
import { Box } from '@mui/system';
import ProjectPageCard from '../src/components/projects/ProjectPageCard';
const testpage = () => {
	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<ProjectPageCard
				description="this is my desc"
				name="superepicproject"
				miniTitle="Always be better"
				src="/chancemap.png"
			/>
		</Box>
	);
};

export default testpage;
