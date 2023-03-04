import React from 'react';
import HomePage from '../src/pages/HomePage';
import dynamic from 'next/dynamic';

const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const index = () => {
	return (
		<WrapperNoSSR>
			<HomePage />
		</WrapperNoSSR>
	);
};

export default index;
