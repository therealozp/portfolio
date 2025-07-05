import React, { useEffect, useRef } from 'react';

import { Box, Typography } from '@mui/material';
import styles from '../../../styles/work.module.scss';
import Image from 'next/image';

const allCharacters =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const ExpCard = ({ exp }) => {
	const textRef = useRef(null);
	const cardRef = useRef(null);
	const textLength = 2000;
	const shuffle = (e) => {
		if (textRef && textRef.current && cardRef && cardRef.current) {
			const rect = cardRef.current.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;

			console.log('Shuffle triggered at:', x, y);

			textRef.current.style.setProperty('--x', `${x}px`);
			textRef.current.style.setProperty('--y', `${y}px`);

			const randomText = Array.from(
				{ length: textLength },
				() => allCharacters[Math.floor(Math.random() * allCharacters.length)]
			).join('');
			textRef.current.innerText = randomText;
		}
	};

	useEffect(() => {
		if (textRef && textRef.current) {
			const initialText = Array.from(
				{ length: textLength },
				() => allCharacters[Math.floor(Math.random() * allCharacters.length)]
			).join('');
			textRef.current.innerText = initialText;
		}
	}, []);

	return (
		<Box
			sx={{
				width: '100%',
				height: '560px',
				padding: 2,
				display: 'flex',
				flexDirection: 'column',
				border: '1px solid rgb(255, 255, 255, 0.05)',
				borderRadius: '8px',
			}}
		>
			<Box
				className={styles.card}
				ref={cardRef}
				sx={{
					width: '100%',
					aspectRatio: '1 / 1',
				}}
			>
				<Box className={styles.cardImage}>
					<Image src={exp.image} alt={exp.company} width={164} height={164} />
				</Box>
				<Box
					className={styles.cardGradient}
					style={{
						'--main-rgb': exp['--main-rgb'] || '41 121 255',
						'--main-light-rgb': exp['--main-light-rgb'] || '56 182 255',
						'--secondary-rgb': exp['--secondary-rgb'] || '42 252 152',
					}}
				/>

				<div
					ref={textRef}
					className={styles.expCardText}
					onMouseMove={shuffle}
				></div>
			</Box>

			<Box
				sx={{
					display: 'flex',
					mt: 3,
					mb: 1,
				}}
			>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography variant="h6" fontWeight={700}>
						{exp.company}
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						{exp.position}
					</Typography>
				</Box>
				<Box sx={{ flexGrow: 1 }} />
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{ textAlign: 'right', mt: 0.5 }}
				>
					{exp.duration}
				</Typography>
			</Box>

			<Typography variant="body1" sx={{ mt: 1 }}>
				{exp.description}
			</Typography>
		</Box>
	);
};

export default ExpCard;
