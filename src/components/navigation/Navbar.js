import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import clsx from 'clsx';
import styles from '../../../styles/navbar.module.scss';

const Mixin = styled('div')(({ theme }) => theme.mixins.toolbar);

const CustomFadeAwayIcon = ({ isnavBarActive }) => {
	return (
		<div className={clsx(styles.navIcon, { [styles.open]: isnavBarActive })}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};

const Navbar = ({ open, setOpen }) => {
	return (
		<>
			<AppBar elevation={0} color="transparent">
				<Toolbar>
					<IconButton onClick={setOpen}>
						<CustomFadeAwayIcon isnavBarActive={open} onClick={setOpen} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Mixin />
		</>
	);
};

export default Navbar;
