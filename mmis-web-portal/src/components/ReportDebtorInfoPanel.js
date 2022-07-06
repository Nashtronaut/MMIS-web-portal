import { Paper, Grid, TextField, Stack, Button } from '@mui/material'

const ReportDebtorInfoPanel = () => {
    return (
        <Paper square variant='outlined' sx={{ width: 1 }}>
            <Grid container columnSpacing='20' rowSpacing='40' sx={{ px: 6, py: 2 }}>
                <Grid item xs={12} lg={6}>
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        label="Income Source"
                        multiline="true" />
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        label="Address"
                        multiline="true" />
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        label="Banking"
                        multiline="true" />
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        label="Other Assets"
                        multiline="true" />
                </Grid>

                <Grid item xs={12} spacing={3}>
                    <Stack direction='row' justifyContent="end" spacing={3}>
                        <Button variant="contained" size="large" color="error" >Clear</Button>
                        <Button type="submit" variant="contained" size="large">Submit</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
        );
};

export default ReportDebtorInfoPanel;