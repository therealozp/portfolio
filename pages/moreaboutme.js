import React from 'react';
import MoreAboutMe from '../src/pages/MoreAboutMe';
import dynamic from 'next/dynamic';

const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const moreaboutme = () => {
	return (
		<WrapperNoSSR>
			<MoreAboutMe />
		</WrapperNoSSR>
	);
};

export default moreaboutme;
