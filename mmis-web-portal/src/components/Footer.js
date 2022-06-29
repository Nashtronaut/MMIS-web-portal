import { BottomNavigation, Grid, Paper, Stack, Typography } from "@mui/material";
import { HelpCenterSharp } from '@mui/icons-material'

let date = new Date();

const Footer = () => {
    return (
        <Paper square variant="outlined" sx={{ backgroundColor: "#1976D2", color: 'white'}}>
            <Grid container sx={{ px: 6, py: 1 }} alignItems="center" justifyContent="space-between">
                <Grid item xs={12}>
                    <Typography variant="caption">
                        UAT KAPPA 15.01.6 MIMSADMIN2@MIMSUAT_12C
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography variant="caption">
                        {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}
                    </Typography>
                </Grid>

                <Grid item xs={6} textAlign="right">
                    <Typography variant="caption">
                        EASC: easc-u
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        );
};

export default Footer;