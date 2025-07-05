import React from 'react';
import Wrapper from '../extra/Wrapper';
import { Box, Typography } from '@mui/material';

export default function BlogLayout({ children }) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				backgroundColor: '#0f1214',
			}}
		>
			<Box
				sx={{
					width: '100vw',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				mt={3}
			>
				<Typography
					sx={{
						fontFamily: 'Boska',
						fontWeight: 400,
					}}
					variant="h2"
				>
					Thoughts in writing
				</Typography>
			</Box>
			<Wrapper>{children}</Wrapper>
		</Box>
	);
}
