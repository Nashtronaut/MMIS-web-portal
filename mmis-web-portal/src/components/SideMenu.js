import * as React from 'react';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import NavMenu from './NavMenu';

const govLogoStyles = {
    height: {xs: 0, lg: '10.2rem'},
    width: 1,
    backgroundImage: 'url(\'mb-logo.png\')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 85%',
    backgroundSize: 'contain'
};

const SideMenu = () => {
    return (
        <Paper variant="outlined" square sx={{ width: '1', height: '1', display: {xs: 'none', lg: 'block'} }}>
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