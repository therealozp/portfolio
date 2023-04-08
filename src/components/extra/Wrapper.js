import React, { useState } from 'react';
import NewSideBar from '../navigation/NewSideBar';

const Wrapper = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<NewSideBar open={open} setOpen={setOpen} />
			{children}
		</>
	);
};

export default Wrapper;
