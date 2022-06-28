import { BottomNavigation, Grid, Paper, Stack, Typography } from "@mui/material";
import { HelpCenterSharp } from '@mui/icons-material'

let date = new Date();

const Footer = () => {
    return (
        <Paper square variant="outlined" >
            <BottomNavigation sx={{ backgroundColor: '#1976D2', color: 'white' }}>
                <Grid container spacing={15} sx={{ px: 6 }} alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <HelpCenterSharp fontSize="medium" />
                    </Grid>

                    <Grid item>
                        <Typography variant="button">
                            {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="button">
                            UAT KAPPA 15.01.6 MIMSADMIN2@MIMSUAT_12C
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="button">
                            EASC: easc-u
                        </Typography>
                    </Grid>
                </Grid>
            </BottomNavigation>
        </Paper>
        );
};

export default Footer;