import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';
import NameTags from '../navigation/NameTags';

const S = styled('span')(({ theme }) => ({
	color: theme.palette.green.main,
}));

const AboutBlock = () => {
	return (
		<>
			<Box sx={{ display: 'flex', width: '100vw' }}>
				<Box
					sx={{
						width: '57vw',
						display: 'flex',
						flexDirection: 'column',
						padding: '64px',
					}}
				>
					<NameTags>{'<about>'}</NameTags>
					<Box sx={{ marginLeft: '5vw' }}>
						<Typography
							sx={{
								fontSize: '1.3em',
								fontStyle: 'oblique',
								color: (theme) => theme.palette.yellow.main,
							}}
						>
							As with every modern-day programming enthusiast, my journey
							started with <S>Python</S> and training with{' '}
							<span style={{ color: '#9CDE9F' }}>HackerRank puzzles.</span>{' '}
							Recently, I have branched out to JavaScript with a view to making
							my corner of the Internet just a tad more aesthetically pleasing.
						</Typography>
						<br />
						<Typography sx={{ fontSize: '1.2em' }}>
							Although I am fairly fluent in HTML, CSS , and vanilla JavaScript,
							I prefer using frameworks such as ReactJS and NextJS, as it
							provides a wide range of helpful and intuitive tools with an
							emphasis on sustainability and designing professional, creative
							UIs.{' '}
							<span style={{ filter: 'brightness(0.7)', fontSize: '0.8em' }}>
								Psst, this website is actually made with NextJS!
							</span>
						</Typography>
						<br />

						<Typography sx={{ fontSize: '1.2em' }}>
							Still, I believe this is only the prelude of my coding ventures,
							as I am intending to pursue the path of Machine Learning and
							Artificial Intelligence. Hopefully, someday I can make a Machine
							Learning model that can write up websites like I do now :))
						</Typography>
					</Box>
					<NameTags>{'</about>'}</NameTags>
				</Box>
				<Box sx={{ width: '40vw' }} />
			</Box>
		</>
	);
};

export default AboutBlock;
