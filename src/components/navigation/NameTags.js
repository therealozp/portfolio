import React from 'react';
import { Typography } from '@mui/material';

const NameTags = ({ children }) => {
	return (
		<Typography
			variant="h3"
			sx={{
				fontFamily: '"Noto Sans Mono"',
				fontWeight: 'bold',
				color: (theme) => theme.palette.secondary.light,
				margin: '16px',
				letterSpacing: '2px',
			}}
		>
			{children}
		</Typography>
	);
};

export default NameTags;
