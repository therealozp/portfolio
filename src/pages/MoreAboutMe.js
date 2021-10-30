import React from 'react';
import Navbar from '../components/navigation/Navbar';
import { Box } from '@mui/system';
import SchoolBlock from '../components/blocks/SchoolBlock';
import PersonalBlock from '../components/blocks/PersonalBlock';
import { Typography } from '@mui/material';
const MoreAboutMe = () => {
	return (
		<Box>
			<Navbar />
			<SchoolBlock />
			<Box
				style={{
					background: 'url("/TDN.jpg") no-repeat center',
					backgroundSize: 'cover',
					backgroundAttachment: 'fixed',
					height: '120vh',
					position: 'relative',
					// backgroundPosition:
				}}
			>
				<Box
					sx={{ position: 'absolute', width: '200px', right: 100, bottom: 100 }}
				>
					<Typography
						sx={{
							fontWeight: 'bold',
							fontFamily: 'Inconsolata',
							fontSize: '1.5em',
						}}
					>
						The flames of Tran Dai Nghia will forever glisten
					</Typography>
				</Box>
			</Box>
			<PersonalBlock />
		</Box>
	);
};

export default MoreAboutMe;
