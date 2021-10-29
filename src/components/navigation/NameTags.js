import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const NameTags = (props) => {
	return (
		<Box {...props}>
			<Typography
				variant="h4"
				sx={{
					fontFamily: '"Noto Sans Mono"',
					color: (theme) => theme.palette.secondary.light,
					margin: '16px',
					letterSpacing: '2px',
					filter: 'brightness(0.8)',
				}}
			>
				{props.children}
			</Typography>
		</Box>
	);
};

export default NameTags;
