import { BottomNavigation, Grid, Paper, Stack, Typography } from "@mui/material";
import { HelpCenterSharp } from '@mui/icons-material'

let date = new Date();

const Footer = () => {
    return (
        <Paper square variant="outlined" sx={{ backgroundColor: "#9E9E9E", color: 'white'}}>
            <Grid container sx={{ px: 6 }} alignItems="center" justifyContent="space-between">
                <Grid item xs={12}>
                    <HelpCenterSharp fontSize="medium" />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="button">
                        {date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="button">
                        UAT KAPPA 15.01.6 MIMSADMIN2@MIMSUAT_12C
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="button">
                        EASC: easc-u
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        );
};

export default Footer;