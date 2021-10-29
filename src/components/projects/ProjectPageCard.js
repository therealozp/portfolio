import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import styles from '../../../styles/projectcard.module.scss';

const ProjectPageCard = ({
	name,
	description,
	href,
	miniTitle,
	src,
	buttonText,
	status,
}) => {
	return (
		<Box className={styles.outerCard}>
			<Box className={styles.cardContent}>
				<Box
					className={styles.cardFront}
					style={{
						backgroundImage: `url('${src}')`,
					}}
					sx={{
						border: '2px solid ',
						borderColor: status == 'ready' ? 'rgb(253, 210, 161)' : '#c93434',
					}}
				>
					<Typography className={styles.cardSub}>{miniTitle}</Typography>
					<Typography className={styles.cardTitle}>{name}</Typography>
				</Box>
				<Box className={styles.cardBack}>
					<Typography className={styles.cardDesc}>{description}</Typography>
					<a
						href={href}
						passHref
						target="_blank"
						rel="noopener noreferrer"
						style={{
							transform: 'translateZ(50px)',
							textDecoration: 'none',
						}}
					>
						<Button
							variant="outlined"
							sx={{
								width: 'max-content',
								marginTop: '20px',
							}}
						>
							{buttonText}
						</Button>
					</a>
				</Box>
			</Box>
		</Box>
	);
};

export default ProjectPageCard;
