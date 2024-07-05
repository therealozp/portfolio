import React from 'react';
import ProjectBlock from '../components/blocks/ProjectBlock';
import { Box, Typography } from '@mui/material';

import ProfileAboutFiller from '../components/fillers/ProfileAboutFiller';
import styles from '../../styles/shootingstars.module.scss';
import ContactBlock from '../components/blocks/ContactBlock';
import DemoLanding from '../components/blocks/DemoLanding';
import FullScreenAbout from '../components/blocks/FullScreenAbout';

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
			<FullScreenAbout />
			<Box sx={{ background: 'linear-gradient(#994636 50%, #101312 50%)' }}>
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
				<Box backgroundColor="#101312">
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
								fontSize: 'clamp(2rem, 15vw, 6rem)',
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
				</Box>
			</Box>
		</>
	);
};

export default HomePage;
