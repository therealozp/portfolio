import React from 'react';
import { Box } from '@mui/system';
import dynamic from 'next/dynamic';

const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

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
			<WrapperNoSSR />
		</Box>
	);
};

export default testpage;
