import { Button, Grid, Stack, TextField, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LoginPanel = () => {
    return (
        <form>
            <Paper square variant='outlined' sx={{ width: 1 }}>
                <Grid container columnSpacing='40' rowSpacing='25' sx={{ px: 6, pb: 2, pt: 4 }}>
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

                    <Grid item xs={12} spacing={3} my={2}>
                        <Stack direction='row' justifyContent="end" spacing={3}>
                            <NavLink activeClassName='active' to='/view_update_info'>
                                <Button type="submit" variant="contained" size="large">Submit</Button>
                            </NavLink>
                            <Button type="reset" variant="contained" size="large" >Create Account</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </form>
    );
};

export default LoginPanel;