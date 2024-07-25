import React from 'react';
import dynamic from 'next/dynamic';
import DemoLanding from '../src/components/blocks/DemoLanding';

const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const testpage = () => {
	return (
		<WrapperNoSSR>
			<DemoLanding />
		</WrapperNoSSR>
	);
};

export default testpage;
