import { Button, Checkbox, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import { NavLink } from "react-router-dom";
import CountrySelector from "./CountrySelector";

const CreateAccountPanel = () => {
    return (
        <Paper square variant='outlined' sx={{ px: 6, pb: 2, pt: 4, width: 1 }}>
                <Grid container columnSpacing='40' rowSpacing='15' >
                    <Grid item xs={12}>
                        <Typography variant='h5'>Create an account</Typography>
                    </Grid>

                    <Grid container item xs={12} columnSpacing='40' rowSpacing='35'>
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
                                label="Confirm Email"
                                required
                                variant="outlined"
                                type="email" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Password"
                                required
                                variant="outlined"
                                type="password" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                required
                                variant="outlined"
                                type="password" />
                        </Grid>

                        <Grid container item xs={12} sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <Grid item xs={5}><Divider /></Grid>
                            <Grid item xs={2}><Typography variant='button' >Address information</Typography></Grid>
                            <Grid item xs={5}><Divider /></Grid>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <CountrySelector variant="outlined" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                variant="outlined"
                                label="Province/State"
                                placeholder="Alberta" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                variant="outlined"
                                label="Address"
                                placeholder="P.O Box 123" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                variant="outlined"
                                label="Street"
                                placeholder="123 Avenue" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Apt."
                                variant="outlined"
                                placeholder="Unit A" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                variant="outlined"
                                label="Postal Code"
                                placeholder="X1X X1X" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                variant="outlined"
                                label="City"
                                placeholder="Edmonton" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <MuiPhoneNumber
                                required
                                variant="outlined"
                                fullWidth
                                label="Home"
                                defaultCountry='ca' />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <MuiPhoneNumber
                                variant="outlined"
                                fullWidth
                                label="Cell"
                                defaultCountry='ca' />
                        </Grid>

                        <Grid item xs={12} sm={6}></Grid>

                        <Grid item xs={12} lg={6}>
                            <Typography variant="subtitle" sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox />
                                Allow MMIS-Portal to communicate VIA Email?
                            </Typography>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <Typography variant="subtitle" sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox />
                                Allow MMIS-Portal to communicate VIA SMS text messaging?
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container item xs={12} spacing={3} my={2} justifyContent="end">
                        <NavLink activeClassName='active' to='/view_update_info'>
                            <Button type="submit" variant="contained" size="large">Create Account</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Paper>
        );
};

export default CreateAccountPanel;