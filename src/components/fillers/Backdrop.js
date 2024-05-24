import React from 'react';
import SvgBlob from '../extra/SVGBlob';

const Backdrop = () => {
	return (
		<div className="backdrop">
			<SvgBlob color="#F6E8EA" />
			<SvgBlob color="#FF5733" />
			<SvgBlob color="#F3A5AB" />
		</div>
	);
};

export default Backdrop;
