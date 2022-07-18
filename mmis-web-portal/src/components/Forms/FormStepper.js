import { Alert, AlertTitle, Box, Button, Paper, Snackbar, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import * as React from "react";
import DirectDepositForm from "./DirectDepositForm";

const FormStepper = (props) => {
    const steps = props.steps;
    const children = props.children;
    const [activeStep, setActiveStep] = React.useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1));
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0)
    }

    const [successMessageOpen, setSuccessMessageOpen] = React.useState(false);

    const handleSuccessOpen = () => {
        setSuccessMessageOpen(true);
    }

    const handleSuccessClose = () => {
        setSuccessMessageOpen(false);
    }

    const [cancelMessageOpen, setCancelMessageOpen] = React.useState(false);

    const handleCancelOpen = () => {
        setCancelMessageOpen(true);
    }

    const handleCancelClose = () => {
        setCancelMessageOpen(false);
    }

    return (
        <Stack minHeight={'28.5rem'} justifyContent={'space-between'}>
            <Box>
                <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {/* FORM INJECTION */}
                {React.cloneElement(children, { activeStep: activeStep })}
            </Box>

            {activeStep === steps.length ? (
                <React.Fragment>
                    <Paper square variant="outlined" elevation={0}>
                        <Alert severity="success">
                            <AlertTitle>Success!</AlertTitle>
                            <Typography sx={{ mt: 1 }}>
                                <b>All steps are complete. You may click submit to send in your form.</b>
                            </Typography>
                        </Alert>
                    </Paper>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={() => { handleCancelOpen(); handleReset(); }} variant="contained" color="error" sx={{ mr: 2 }}>Cancel</Button>
                        <Button onClick={() => { handleSuccessOpen(); handleReset(); }} variant="contained">Submit</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box sx={{ mt: 1}}>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="contained"
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />

                            <Button variant="contained" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                            <Snackbar open={successMessageOpen} autoHideDuration={6000} onClose={handleSuccessClose}>
                                <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
                                    Your form has been recieved. Thank you!
                                </Alert>
                            </Snackbar>
                            <Snackbar open={cancelMessageOpen} autoHideDuration={6000} onClose={handleCancelClose}>
                                <Alert onClose={handleCancelClose} severity="warning" sx={{ width: '100%' }}>
                                    You have cancelled your form submission.
                                </Alert>
                            </Snackbar>
                        </Box>
                    </Box>
                </React.Fragment>
            )}
        </Stack>
        );
};

export default FormStepper;