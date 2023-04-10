import React from 'react';
import { Box } from '@mui/material';

const RotatingText = ({ text, radius, onClick }) => {
	return (
		<Box
			sx={{
				height: `${radius * 2}px`,
				width: `${radius * 2}px`,
				position: 'absolute',
				// overflow: 'hidden',
				borderRadius: radius,
				// border: '1px solid red',
			}}
			onClick={onClick}
		>
			<Box
				className="rotatingText"
				sx={{
					cursor: 'pointer',
				}}
			>
				{text.split('').map((char, index) => {
					return (
						<span
							key={index}
							style={{
								position: 'absolute',
								left: '50%',
								// top: '20%',
								transform: `rotate(${index * (360 / text.length)}deg)`,
								transformOrigin: `0 ${radius}px`,
								fontFamily: 'Inconsolata',
								fontSize: '1.2rem',
							}}
						>
							{/\s/.test(char) ? '\xA0' : char}
						</span>
					);
				})}
			</Box>
		</Box>
	);
};

export default RotatingText;
