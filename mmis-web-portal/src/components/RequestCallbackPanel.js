import { Paper, Stack, Grid, TextField, Button, Typography, Checkbox } from '@mui/material'
import MuiPhoneNumber from 'material-ui-phone-number';
import { useState } from 'react';

const RequestCallbackPanel = (props) => {
    const name = props.name;

    const [excludeTime, setExcludeTime] = useState(true); /*Value is inverted to set disabled property on exclude time section*/

    return (
        <form>
            <Paper square variant='outlined' sx={{ width: 1 }}>
                <Grid container columnSpacing='40' rowSpacing='25' sx={{ px: 6, pb: 2, pt: 4 }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            required
                            placeHolder={name}
                            variant="standard"
                            label="Name" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <MuiPhoneNumber required variant="standard" fullWidth label="Home" defaultCountry='ca' />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="overline">
                            Please call me from...
                        </Typography>
                    </Grid>

                    <Grid container item xs={12}> {/*TODO: CHECK VALUE sm={6} ON NEW PANELS*/}
                        <Stack direction="row" gap={5} sx={{ display: 'flex', alignItems: 'center', width: 1 }}>
                            <TextField
                                fullWidth
                                required
                                variant="standard"
                                placeholder="6:00 am"
                                type="time" />

                            <Typography>
                                to...
                            </Typography>

                            <TextField
                                fullWidth
                                required
                                variant="standard"
                                placeholder="6:00 am"
                                type="time" />
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="overline" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Checkbox onChange={() => setExcludeTime(excludeTime ? false : true)} />
                            But please exclude...
                        </Typography>
                    </Grid>

                    <Grid container item xs={12}> {/*TODO: CHECK VALUE sm={6} ON NEW PANELS*/}
                        <Stack direction="row" gap={5} sx={{ display: 'flex', alignItems: 'center', width: 1 }}>
                            <TextField
                                fullWidth
                                disabled={excludeTime}
                                required
                                variant="standard"
                                type="time" />

                            <Typography>
                                to...
                            </Typography>

                            <TextField
                                fullWidth
                                disabled={excludeTime}
                                required
                                variant="standard"
                                type="time" />
                        </Stack>
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
}

export default RequestCallbackPanel;