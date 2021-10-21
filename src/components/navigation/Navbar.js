import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

const Mixin = styled('div')(({ theme }) => theme.mixins.toolbar);

const AppBarTile = ({ children, href }) => {
	return (
		<Box sx={{ padding: '10px', margin: '0 10px' }}>
			<Typography>{children}</Typography>
		</Box>
	);
};

const Navbar = () => {
	return (
		<>
			<AppBar elevation={0} sx={{ backgroundColor: '#141313' }}>
				<Toolbar>
					<AppBarTile>About</AppBarTile>
					<AppBarTile>Projects</AppBarTile>
					<AppBarTile>More!</AppBarTile>
					<AppBarTile>Contact</AppBarTile>
				</Toolbar>
			</AppBar>
			<Mixin />
		</>
	);
};

export default Navbar;
