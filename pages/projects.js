import React from 'react';
import ProjectPage from '../src/pages/ProjectPage';
import dynamic from 'next/dynamic';

const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const project = () => {
	return (
		<WrapperNoSSR>
			<ProjectPage />
		</WrapperNoSSR>
	);
};

export default project;
