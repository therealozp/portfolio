import React from 'react';
import IntroBlock from '../src/components/blocks/IntroBlock';
import Navbar from '../src/components/navigation/navbar';
import ProjectBlock from '../src/components/blocks/ProjectBlock';
import AboutBlock from '../src/components/blocks/AboutBlock';

const index = () => {
	return (
		<div>
			<Navbar />
			<IntroBlock />
			<ProjectBlock />
			<AboutBlock />
		</div>
	);
};

export default index;
