import { Button } from '@mui/material';
import React from 'react';
import CustomCursor from '../src/cursor/CustomCursor';

const index = () => {
	return (
		<div>
			<CustomCursor />
			<Button variant="outlined">Hello</Button>
		</div>
	);
};

export default index;
