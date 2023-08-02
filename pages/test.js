import React from 'react';
import dynamic from 'next/dynamic';
import ProfileAboutFiller from '../src/components/fillers/ProfileAboutFiller';
// import ProjectPageCard from '../src/components/projects/ProjectPageCard';
// import { Box, Typography } from '@mui/material';
// import ProjectPage from '../src/pages/ProjectPage';
const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const testpage = () => {
	return (
		<WrapperNoSSR>
			<ProfileAboutFiller />
		</WrapperNoSSR>
	);
};

export default testpage;
