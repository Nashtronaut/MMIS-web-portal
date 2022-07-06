import { Button, Grid, Stack, TextField, Paper } from '@mui/material';

const ChangePasswordPanel = () => {
    return (
        <form>
            <Paper square variant='outlined' sx={{ width: 1 }}>
                <Grid container columnSpacing='40' rowSpacing='25' sx={{ px: 6, pb: 2, pt: 4 }}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Current or Temporary Password"
                            required
                            variant="standard"
                            type="password" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="New Password"
                            required
                            variant="standard"
                            type="password" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Re-enter New Password"
                            required
                            variant="standard"
                            type="password" />
                    </Grid>

                    <Grid item xs={12} spacing={3} my={2}>
                        <Stack direction='row' justifyContent="end" spacing={3}>
                            <Button type="reset" variant="contained" size="large" color="error" >Clear</Button>
                            <Button type="submit" variant="contained" size="large">Submit</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </form>
    );
};

export default ChangePasswordPanel;