import { AlertTitle, Button, Divider, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import MuiPhoneNumber from 'material-ui-phone-number'
import CountrySelector from './CountrySelector'

const UpdateInfoPanel = (props) => {
    const address = props.address;
    const street = props.street;
    const postalCode = props.postalCode;
    const province = props.province;
    const country = props.country;
    const city = props.city;

    return (
        <form>
            <Paper variant="outlined" square sx={{ width: 1 }}>
                <Grid container spacing="20" columnSpacing="40" rowSpacing="25" sx={{ px: 6, py: 2 }}>
                    <Grid item xs={12}>
                        <AlertTitle>
                            Update Information
                        </AlertTitle>
                        <Typography variant="caption">
                            Please only update if required.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider orientation="horizontal" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            variant="standard"
                            type="email"
                            label="Email"
                            placeholder="johndoe@gmail.com" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <CountrySelector country={country} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth required variant="standard" label="Province/State" placeholder="Alberta" defaultValue={province} /> 
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            variant="standard"
                            label="Address"
                            placeholder="P.O Box 123"
                            defaultValue={address} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            variant="standard"
                            label="Street"
                            placeholder="123 Avenue"
                            defaultValue={street} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Apt."
                            variant="standard"
                            placeholder="Unit A" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            variant="standard"
                            label="Postal Code"
                            placeholder="X1X X1X"
                            defaultValue={postalCode} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth required variant="standard" label="City" placeholder="Edmonton" defaultValu={city} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <MuiPhoneNumber required variant="standard" fullWidth label="Home" defaultCountry='ca' />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <MuiPhoneNumber variant="standard" fullWidth label="Cell" defaultCountry='ca' />
                    </Grid>

                    <Grid item xs={12} spacing={3}> 
                        <Stack direction='row' justifyContent="end" spacing={3}>
                            <Button variant="contained" size="large" color="error" >Clear</Button>
                            <Button type="submit" variant="contained" size="large">Submit</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </form>
        );
};

export default UpdateInfoPanel;