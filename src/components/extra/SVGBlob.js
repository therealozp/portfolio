import React from 'react';

const SvgBlob = ({ color }) => {
	return (
		<svg
			viewBox="0 0 200 200"
			xmlns="http://www.w3.org/2000/svg"
			className="blob"
		>
			<path
				fill={color}
				d="M48.5,-60.4C62.3,-46.3,72.4,-30.4,75.8,-13.1C79.2,4.3,75.9,23.1,67,38.8C58.1,54.4,43.5,66.9,26.4,73.5C9.3,80.2,-10.2,81,-27,74.7C-43.8,68.4,-57.8,54.9,-68.2,38.6C-78.6,22.2,-85.3,3,-82.9,-15.3C-80.5,-33.6,-69,-51.1,-53.6,-64.8C-38.3,-78.6,-19.2,-88.8,-0.9,-87.7C17.4,-86.7,34.8,-74.4,48.5,-60.4Z"
				transform="translate(100 100)"
			/>
		</svg>
	);
};

export default SvgBlob;
