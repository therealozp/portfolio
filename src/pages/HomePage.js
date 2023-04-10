import React, { useState } from 'react';
import IntroBlock from '../components/blocks/IntroBlock';
import ProjectBlock from '../components/blocks/ProjectBlock';
import AboutBlock from '../components/blocks/AboutBlock';
import { Box, Typography } from '@mui/material';
import VoxelWrapper from '../components/extra/VoxelWrapper';
// import gsap, { Expo, Power1 } from 'gsap';
// import { Timeline } from 'gsap/all';
import dynamic from 'next/dynamic';
// import ProjectFiller from '../components/fillers/ProjectFiller';
import ProfileFiller from '../components/fillers/ProfileFiller';
// import ContactBlock from '../components/blocks/ContactBlock';
import styles from '../../styles/shootingstars.module.scss';
// import styles from '../../styles'

const VoxelDeskNoSSR = dynamic(() => import('../models/VoxelDesk'), {
	ssr: false,
});

const HomePage = () => {
	const [finished, setFinished] = useState(false);
	const [voxOpened, setVoxOpened] = useState(false);
	return (
		<>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '45% 55%',
				}}
			>
				<IntroBlock setFinished={setFinished} />
				<VoxelWrapper finished={finished} setWindowOpened={setVoxOpened}>
					<VoxelDeskNoSSR animationFinished={voxOpened} />
				</VoxelWrapper>
			</Box>
			<Box sx={{ height: '75vh' }} />
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '50% 50%',
				}}
			>
				<AboutBlock />
				<ProfileFiller />
			</Box>
			<Box
				sx={{
					height: '70vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{/* <ProjectFiller /> */}
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
			<Box sx={{ height: '25vh' }} />

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100vw',
					height: '100vh',
					overflow: 'hidden',
				}}
			>
				<Box className={styles.night}>
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
					<Box className={styles.shooting_star} />
				</Box>
				<Typography
					sx={{
						fontFamily: 'Rubik',
						fontSize: '7rem',
						fontWeight: '900',
						letterSpacing: 4,
						color: (theme) => theme.palette.text.greenCream,
					}}
				>
					shoot me a message
				</Typography>
			</Box>
		</>
	);
};

export default HomePage;
