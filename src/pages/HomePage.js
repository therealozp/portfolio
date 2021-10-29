import React from 'react';
import IntroBlock from '../components/blocks/IntroBlock';
import Navbar from '../components/navigation/navbar';
import ProjectBlock from '../components/blocks/ProjectBlock';
import AboutBlock from '../components/blocks/AboutBlock';

const HomePage = () => {
	return (
		<div>
			<Navbar />
			<IntroBlock />
			<ProjectBlock />
			<AboutBlock />
		</div>
	);
};

export default HomePage;
