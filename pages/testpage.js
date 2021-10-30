import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
const testpage = () => {
	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Image src="/arrow.svg" height={320} width={337} />
		</Box>
	);
};

export default testpage;
