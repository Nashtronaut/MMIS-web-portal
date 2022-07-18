import { Alert, AlertTitle, Checkbox, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import * as React from "react";
import PageInfo from "../PageInfo";

const FaxAndEmailAuthForm = (props) => {
    const activeStep = props.activeStep;
    const [useEmail, setUseEmail] = React.useState(false);
    const [useFax, setUseFax] = React.useState(false);

    return (
        <form>
            {activeStep === 0 && (
                <React.Fragment>
                    <PageInfo header="Direct Deposit"
                        info="In order to communicate with you by email or fax, the Maintenance Enforcement Program requires the following information. All information is kept strictly confidential and used only for MEP purposes."
                        highlightInfo="If you understand and wish to continue, click next." />
                </React.Fragment>
            )}

            {activeStep === 1 && (
                <React.Fragment>
                    <Grid container columnSpacing={3} rowSpacing={2}>
                        <Grid item xs={12} lg={6}>
                            <TextField label="Full Name" type="text" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <TextField label="MEP File Number" type="number" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="subtitle" sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox onChange={() => setUseEmail(!useEmail)} checked={useEmail} />
                                I authorize the MEP to contact me via EMAIL correspondence, requests for information and other documents to me whenever possible.
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="subtitle" sx={{ display: 'flex', alignItems: 'center' }}>
                                <Checkbox onChange={() => setUseFax(!useFax)} checked={useFax} />
                                I authorize the MEP to contact me via FAX correspondence, requests for information and other documents to me whenever possible.
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Stack gap={2} marginTop={1}>
                                {useEmail && (
                                    <Grid item xs={12}>

                                        <TextField required={useEmail} label="Email Address" type="email" variant="outlined" fullWidth />

                                    </Grid>
                                )}

                                {useFax && (
                                    <Grid item xs={12}>

                                        <MuiPhoneNumber
                                            required={useFax}
                                            variant="outlined"
                                            fullWidth
                                            label="Fax"
                                            defaultCountry='ca' />

                                    </Grid>
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                </React.Fragment>
            )}

            {activeStep === 2 && (
                <React.Fragment>
                    <Paper square variant="outlined" elevation={0}>
                        <Alert severity="warning">
                            <AlertTitle>Terms and Conditions.</AlertTitle>
                            <Typography>
                                I understand that fax and email communications are not secure forms of communcation and that confidentiality of any email or fax cannot be ensured. 
                            </Typography>
                            <Typography sx={{ mt: 1 }}>
                                I understand that I may revoke this authorization at any time, but not retroactive to the release of information
                                made in good faith, by writing to MEP at the address noted above. I further understand that this authority is to
                                remain in effect until MEP has received and processed written notification from me of its change or termination.
                                Written notice to revoke authorization may take 10 business days to process.
                            </Typography>
                            <Typography sx={{ mt: 1 }}>
                                <b>By clicking Finish, you are agreeing to these terms and conditions.</b>
                            </Typography>
                        </Alert>
                    </Paper>
                </React.Fragment>
            )}
        </form>
    );
};

export default FaxAndEmailAuthForm;