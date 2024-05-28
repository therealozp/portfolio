import React from 'react';
import dynamic from 'next/dynamic';
import DemoLanding from '../src/components/blocks/DemoLanding';
// import ProjectPageCard from '../src/components/projects/ProjectPageCard';
// import { Box, Typography } from '@mui/material';
// import ProjectPage from '../src/pages/ProjectPage';
const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const testpage = () => {
	return (
		<WrapperNoSSR>
			<DemoLanding />
		</WrapperNoSSR>
	);
};

export default testpage;
