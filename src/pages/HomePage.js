import React, { useState } from 'react';
import IntroBlock from '../components/blocks/IntroBlock';
import ProjectBlock from '../components/blocks/ProjectBlock';
import AboutBlock from '../components/blocks/AboutBlock';
import { Box } from '@mui/system';
// import { Typography } from '@mui/material';
// import gsap, { Expo, Power1 } from 'gsap';
// import { Timeline } from 'gsap/all';
import dynamic from 'next/dynamic';
import ProjectFiller from '../components/fillers/ProjectFiller';
const VoxelDeskNoSSR = dynamic(() => import('../models/VoxelDesk'), {
	ssr: false,
});

const HomePage = () => {
	const [finished, setFinished] = useState(false);
	return (
		<>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '45% 55%',
				}}
			>
				<IntroBlock setFinished={setFinished} />
				{/* <VoxelDeskNoSSR animationFinished={finished} /> */}
			</Box>
			<Box sx={{ height: '75vh' }} />
			<AboutBlock />
			<Box
				sx={{
					height: '70vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ProjectFiller />
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100vw',
				}}
			>
				<ProjectBlock />
			</Box>
		</>
	);
};

export default HomePage;
