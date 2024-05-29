import React from 'react';
import ProjectBlock from '../components/blocks/ProjectBlock';
import AboutBlock from '../components/blocks/AboutBlock';
import { Box, Typography } from '@mui/material';

import ProfileFiller from '../components/fillers/ProfileFiller';
import ProfileAboutFiller from '../components/fillers/ProfileAboutFiller';
import styles from '../../styles/shootingstars.module.scss';
import ContactBlock from '../components/blocks/ContactBlock';
import DemoLanding from '../components/blocks/DemoLanding';

const HomePage = () => {
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
				<DemoLanding />
			</Box>
			<Box height="25vh" />
			<ProfileAboutFiller />
			<Box height="25vh" />
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
						fontFamily: 'Simplon Mono Medium Regular',
						fontSize: 'clamp(2rem, 15vw, 7rem)',
						fontWeight: '900',
						letterSpacing: 4,
						color: '#f7f4ec',
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
