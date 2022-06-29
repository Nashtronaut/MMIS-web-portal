import * as React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material';
import NavMenu from './NavMenu';

const govLogoStyles = {
    height: {xs: 0, lg: '10.2rem'},
    width: 1,
    backgroundImage: 'url(\'Alberta-government-logo2.svg.png\')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 85%',
    backgroundSize: 'contain'
};

const SideMenu = () => {
    return (
        <Paper variant="outlined" square sx={{ width: '1', height: '1' }}>
            <Stack sx={{height: 1, justifyContent: 'space-between'}}>
                <NavMenu />

                <Box padding={1}>
                    <Box sx={govLogoStyles}></Box>
                </Box>
            </Stack>
        </Paper>
        );
};

export default SideMenu;