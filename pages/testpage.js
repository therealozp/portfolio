import React from 'react';
import dynamic from 'next/dynamic';
import QuoteFiller from '../src/components/fillers/QuoteFiller';
import ContactBlock from '../src/components/blocks/ContactBlock';
const WrapperNoSSR = dynamic(() => import('../src/components/extra/Wrapper'), {
	ssr: false,
});

const testpage = () => {
	return (
		<WrapperNoSSR>
			<ContactBlock />
		</WrapperNoSSR>
	);
};

export default testpage;
