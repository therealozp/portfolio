import React, { useState } from 'react';
// import Navbar from '../navigation/Navbar';
import NewSideBar from '../navigation/NewSideBar';

const Wrapper = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			{/* <Navbar open={open} setOpen={setOpen} /> */}
			<NewSideBar open={open} setOpen={setOpen} />
			{children}
		</>
	);
};

export default Wrapper;
