import { Box, Grid, Stack, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Flag from '../components/Flag';
import SideMenu from '../components/SideMenu';

const Layout = () => {
    return (
        <Box sx={{ width: 1, p: '0.5rem'}}>
            <Grid container spacing={'10'} sx={{ maxWidth: '100rem', m: '0 auto', width: 1 }}>
                <Grid item xs={12} lg={3} xl={2}>
                    <Stack spacing={1} height={1}>
                        <Flag />
                        <SideMenu />
                    </Stack>
                </Grid>

                <Grid item xs={12} lg={9} xl={10 }>
                    {<Outlet />}
                </Grid>
            </Grid>
        </Box>        
        );
};

export default Layout;