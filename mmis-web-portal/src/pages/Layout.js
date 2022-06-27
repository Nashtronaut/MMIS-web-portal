import { Box, Grid, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Flag from '../components/Flag';
import SideMenu from '../components/SideMenu';

const containerSizing = {
    width: '80%',
    maxWidth: '110rem',
    margin: '0 auto'
};

const Layout = () => {
    return (
        <Box sx={{ backgroundColor: 'white', width: 1 }}>
            <Grid container spacing='10' alignItems='stretch' sx={containerSizing}>
                <Grid item xs={2}>
                    <Stack spacing={1}>
                        <Flag />
                        <SideMenu />
                    </Stack>
                </Grid>

                <Grid item xs={10}>
                    {<Outlet />}
                </Grid>
            </Grid>
        </Box>        
        );
};

export default Layout;

