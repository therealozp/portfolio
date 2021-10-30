import React from 'react';
import Navbar from '../components/navigation/Navbar';
import IntroBlock from '../components/blocks/IntroBlock';
import ProjectBlock from '../components/blocks/ProjectBlock';
import AboutBlock from '../components/blocks/AboutBlock';
import { Box } from '@mui/system';

const HomePage = () => {
	return (
		<Box sx={{ padding: '0 64px' }}>
			<Navbar />
			<IntroBlock />
			<ProjectBlock />
			<AboutBlock />
		</Box>
	);
};

export default HomePage;
