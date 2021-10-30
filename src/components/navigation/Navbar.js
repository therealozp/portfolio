import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import styles from '../../../styles/navbar.module.scss';

const Mixin = styled('div')(({ theme }) => theme.mixins.toolbar);

const AppBarTile = ({ children, href }) => {
	return (
		<Box sx={{ padding: '10px', margin: '0 10px' }}>
			<Link href={href} passHref>
				<Typography className={styles.links}>{children}</Typography>
			</Link>
		</Box>
	);
};

const Navbar = () => {
	return (
		<>
			<AppBar elevation={0} color="transparent">
				<Toolbar>
					<AppBarTile href="/">About</AppBarTile>
					<AppBarTile href="/projects">Projects</AppBarTile>
					<AppBarTile href="/moreaboutme">More!</AppBarTile>
					<AppBarTile href="/contact">Contact</AppBarTile>
				</Toolbar>
			</AppBar>
			<Mixin />
		</>
	);
};

export default Navbar;
