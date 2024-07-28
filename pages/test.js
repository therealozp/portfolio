import React from 'react';
import dynamic from 'next/dynamic';

import ProjectRevolver from '../src/components/projects/ProjectSection_v2';
// import ProjectPageCard from '../src/components/projects/ProjectPageCard';
// import { Box, Typography } from '@mui/material';
// import ProjectPage from '../src/pages/ProjectPage';

const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const testpage = () => {
	return (
		<WrapperNoSSR>
			<ProjectRevolver />
		</WrapperNoSSR>
	);
};

export default testpage;
