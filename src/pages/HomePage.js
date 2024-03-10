import React, { useState } from 'react';
import IntroBlock from '../components/blocks/IntroBlock';
import ProjectBlock from '../components/blocks/ProjectBlock';
import AboutBlock from '../components/blocks/AboutBlock';
import { Box, Typography } from '@mui/material';
import VoxelWrapper from '../components/extra/VoxelWrapper';
import dynamic from 'next/dynamic';
import ProfileFiller from '../components/fillers/ProfileFiller';
import ProfileAboutFiller from '../components/fillers/ProfileAboutFiller';
import styles from '../../styles/shootingstars.module.scss';
import ContactBlock from '../components/blocks/ContactBlock';

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
					display: { sm: 'flex', md: 'grid' },
					flexDirection: 'column',
					justifyContent: 'center',
					gridTemplateColumns: '40% 60%',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<IntroBlock setFinished={setFinished} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						// border: '1px solid red',
					}}
				>
					<VoxelWrapper finished={finished} setWindowOpened={setVoxOpened}>
						<VoxelDeskNoSSR animationFinished={voxOpened} />
					</VoxelWrapper>
				</Box>
			</Box>
			<Box
				sx={{
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ProfileAboutFiller />
			</Box>
			<Box
				sx={{
					display: { sm: 'flex', md: 'grid' },
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
			{/* <QuoteFiller /> */}
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
					overflow: 'hidden',
					height: '100vh',
					position: 'relative',
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
						fontSize: 'clamp(2rem, 15vw, 7rem)',
						fontWeight: '900',
						letterSpacing: 4,
						color: (theme) => theme.palette.text.greenCream,
						textAlign: 'center',
					}}
				>
					shoot me a message
				</Typography>
				<ContactBlock />
			</Box>
		</>
	);
};

export default HomePage;
