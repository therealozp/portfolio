import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { gsap, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Block = ({
	caption,
	description,
	imgHeight,
	imgWidth,
	direction,
	imgSrc,
}) => {
	return (
		<>
			{direction == 'LTR' ? (
				<Box>
					<Box
						sx={{
							// padding: '0 64px',
							display: 'grid',
							gridTemplateColumns: '40% 60%',
							alignContent: 'center',
							position: 'relative',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								height: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography
								sx={{
									fontFamily: 'Patrick Hand',
									letterSpacing: '2px',
									fontSize: '4em',
								}}
							>
								{caption}
							</Typography>
						</Box>
						<Box sx={{ transform: 'scale(0.8)' }} className="blockLeft">
							<Image src={imgSrc} height={imgHeight} width={imgWidth} />
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									position: 'absolute',
									top: 0,
									left: 0,
									height: '100%',
									width: '100%',
									backgroundColor: 'rgba(27, 27, 27, 0.8)',
									opacity: 1,
									transition: 'opacity 0.3s ease',
									'&:hover': {
										opacity: 0,
									},
								}}
							>
								<Box>
									<Typography variant="h4">{description}</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			) : (
				<Box>
					<Box
						sx={{
							// padding: '0 64px',
							display: 'grid',
							gridTemplateColumns: '60% 40%',
							alignContent: 'center',
							position: 'relative',
						}}
					>
						<Box sx={{ transform: 'scale(0.8)' }} className="blockRight">
							<Image src={imgSrc} height={imgHeight} width={imgWidth} />
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									position: 'absolute',
									top: 0,
									left: 0,
									height: '100%',
									width: '100%',
									backgroundColor: 'rgba(27, 27, 27, 0.8)',
									opacity: 1,
									transition: 'opacity 0.3s ease',
									'&:hover': {
										opacity: 0,
									},
								}}
							>
								<Box>
									<Typography variant="h4">{description}</Typography>
								</Box>
							</Box>
						</Box>
						<Box
							sx={{
								display: 'flex',
								height: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography
								sx={{
									fontFamily: 'Patrick Hand',
									letterSpacing: '2px',
									fontSize: '4em',
								}}
							>
								{caption}
							</Typography>
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
};
const PersonalBlock = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const leftCards = gsap.utils.toArray('.blockLeft');
		const rightCards = gsap.utils.toArray('.blockRight');

		leftCards.forEach((card) => {
			gsap.from(card, {
				scrollTrigger: {
					trigger: card,
				},
				opacity: 0,
				x: 200,
				duration: 1,
				ease: Power1.easeIn,
			});
		});
		rightCards.forEach((card) => {
			gsap.from(card, {
				scrollTrigger: {
					trigger: card,
				},
				opacity: 0,
				x: -200,
				duration: 1,
				ease: Power1.easeOut,
			});
		});
	}, []);
	return (
		<Box
			sx={{
				padding: '32px 64px 0 64px',
			}}
		>
			<Box>
				<Typography variant="h1" sx={{ fontFamily: 'DM Sans' }}>
					Personal Activities
				</Typography>
			</Box>
			<Box sx={{ marginBottom: '-100px' }}>
				<Block
					imgSrc="/khang4.jpg"
					imgHeight={1398}
					imgWidth={2048}
					description="Sports Competition - Basketball"
					caption="Be happy"
					direction="LTR"
				/>
			</Box>
			<Box sx={{ marginBottom: '-100px' }}>
				<Block
					imgSrc="/khang1.jpg"
					imgHeight={1536}
					imgWidth={1048.5}
					description="Oddball PE - Nerf Sniper"
					caption="Be compassionate"
					direction="RTL"
				/>
			</Box>
			<Box sx={{ marginBottom: '-100px' }}>
				<Block
					imgSrc="/khang2.jpg"
					imgHeight={1398}
					imgWidth={2048}
					description="Regional Olympics - Medalists"
					caption="Be weird"
					direction="LTR"
				/>
			</Box>
			<Block
				imgSrc="/khang5.jpg"
				imgHeight={2014}
				imgWidth={1315}
				description="Red Flamboyant Campaign - Volunteer"
				caption="Be me."
				direction="RTL"
			/>
		</Box>
	);
};

export default PersonalBlock;
