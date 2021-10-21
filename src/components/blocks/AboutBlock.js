import React from 'react';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';
import NameTags from '../navigation/NameTags';

const S = styled('span')(({ theme }) => ({
	color: theme.palette.blue.light,
}));

const AboutBlock = () => {
	return (
		<>
			<NameTags>{'<about>'}</NameTags>
			<Box sx={{ display: 'flex', width: '100vw' }}>
				<Box sx={{ width: '40vw' }} />

				<Box sx={{ width: '50vw' }}>
					<Typography sx={{ fontSize: '1.2em' }}>
						As with every modern-day programming enthusiast, my journey started
						out with <S>Python</S> and constantly training with puzzles on
						HackerRank. Gradually, I have branched out to JavaScript with a view
						to making my corner of the Internet just a tad more aesthetically
						pleasing.
					</Typography>
					<br />
					<Typography sx={{ fontSize: '1.2em' }}>
						Although I am somewhat fluent in HTML, CSS and Vanilla JavaScript, I
						prefer using frameworks such as ReactJS and NextJS, as it provides a
						wide range of helpful and intuitive tools with an emphasis on
						sustainability and creating professional, creative UIs.{' '}
						<span style={{ filter: 'brightness(0.7)' }}>
							Psst, this website is actually made with NextJS!
						</span>
					</Typography>
					<br />

					<Typography sx={{ fontSize: '1.2em' }}>
						Still, I believe this is only the prelude of my coding ventures, as
						I am intending to pursue a closer-to-machine major of Machine
						Learning and Artificial Intelligence. Its powers as of yet are
						already intimidating, but extremely exciting to take a deeper dive
						into! Hopefully, someday I can make a Machine Learning model that
						can write up websites as I do now :))
					</Typography>
				</Box>
			</Box>
			<NameTags>{'</about>'}</NameTags>
		</>
	);
};

export default AboutBlock;
