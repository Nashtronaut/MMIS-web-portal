import { Alert, AlertTitle, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import * as React from "react";
import PageInfo from "../PageInfo";

/*DISCLAIMER: THESE FORMS ARE NOT FUNCTIONAL, THEY NEED TO BE REBUILT WITH PROPER STATE AND FORM DATA COLLECTION*/

const DirectDepositForm = (props) => {
    const activeStep = props.activeStep;

    return (
        <form>
            {activeStep === 0 && (
                <React.Fragment>
                    <PageInfo header="Direct Deposit" 
                        info="In order to send your maintenance payments by Direct Deposit directly to your bank, we need the following information. Incorrect information could result in your payment being sent to the wrong account. All information is stricly confidential and only used for Maintenance Enforcement Program purposes."
                        highlightInfo="If you understand and wish to continue, click next." />
                </React.Fragment>
            )}
            {activeStep === 1 && (
                <React.Fragment>
                    <Grid container columnSpacing={3} rowSpacing={2}>
                        <Grid item xs={12} lg={6}>
                            <TextField label="Bank Number" type="text" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <TextField label="Transit Number" type="text" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <TextField label="Account Number" type="text" variant="outlined" fullWidth />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="account-selector-label">Select Form Type...</InputLabel>
                                <Select
                                    labelId="account-selector-label"
                                    id="account-selector"
                                    label="Select Account Type">
                                    <MenuItem value={0}>Chequing</MenuItem>
                                    <MenuItem value={1}>Savings</MenuItem>
                                    <MenuItem value={2}>Chequing & Savings</MenuItem>
                                </Select>
                            </FormControl>
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
                                I am aware that funds deposited into my account may be recalled by the Manitoba Maintenance Enforement Program,
                                up to three (3) business days after the deposit, if the original payment received by MEP cannot be processed
                                (for example, it is returned by the bank for stop payment of insufficient funds). If funds deposited in your account
                                are recalled by MEP you file balance will be adjusted and MEP will continue to make every effort to collect 
                                the ongoing maintenance and arrears.
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

export default DirectDepositForm;