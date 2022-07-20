import { Button, Grid, TextField, Paper, Typography, Checkbox } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LoginPanel = () => {
    return (
        <Paper square variant='outlined' sx={{ width: 1 }}>
            <Grid container spacing="20" columnSpacing="40" rowSpacing="25" sx={{ px: 6, py: 2 }} >
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        required
                        variant="outlined"
                        type="Email" />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Password"
                        required
                        variant="outlined"
                        type="password" />
                </Grid>

                <Grid container item xs={12} my={1} justifyContent="space-between">
                    <Typography variant="subtitle" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox />
                        Remember me on this computer. (Only check this option on personal devices.)
                    </Typography>
                    <NavLink activeClassName='active' to='/logged_in/view_update_info'>
                        <Button type="submit" variant="contained" size="large">Login</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default LoginPanel;