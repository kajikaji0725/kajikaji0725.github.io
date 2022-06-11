import '../assets/style/home.scss';
import PortraitIcon from '@mui/icons-material/Portrait';
import DensityMediumIcon from '@mui/icons-material/Dehaze';
import { AppBar, IconButton, ListItemText, Menu, MenuItem } from '@mui/material';
import { Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import HomeIcon from '@mui/icons-material/Home';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SourceIcon from '@mui/icons-material/Source';
import { green, yellow, orange, grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='Home'>
            <AppBar className='appBar' position='sticky'>
                <Toolbar className='toolBar'>
                    <IconButton onClick={handleClick} aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined} className='iconButton'>
                        <DensityMediumIcon className='sideBarIcon' />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClick} onClick={handleClose}>
                <MenuItem component={Link} to={'/'}>
                    <HomeIcon fontSize='large' sx={{ color: grey[500] }} />
                    <ListItemText primary='home' />
                </MenuItem>
                <MenuItem component={Link} to={'/about'}>
                        <PortraitIcon fontSize='large' sx={{ color: orange[500] }}/>
                        <ListItemText primary='about' />
                </MenuItem>
                <MenuItem component={Link} to={'history'}>
                    <HistoryEduIcon fontSize='large' sx={{ color: green[400] }} />
                    <ListItemText primary="history" />
                </MenuItem>
                <MenuItem component={Link} to={'products'}>
                    <SourceIcon fontSize='large' sx={{ color: yellow[600] }} />
                    <ListItemText primary="products" />
                </MenuItem>
            </Menu>

        </div>
    );
}