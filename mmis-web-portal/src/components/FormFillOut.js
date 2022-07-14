import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";

const Form = (props) => {
    const steps = props.steps;
    const component = props.component;

    const [activeStep, setActiveStep] = useState(0);
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1));
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
        );
};

const FormFillOut = (props) => {
    const value = props.value;

    switch (value) {
        case '':
            return;

        case 0:
            return (
                <p>0</p>
            );

        case 1:
            return (
                <Box>
                    <Grid container>
                        <Grid item xs={12}>
                            <Form steps={["Personal Information", "Account Information", "Sign, Date, Submit"]} component={<DirectDepositForm />}/>
                        </Grid>
                    </Grid>
                </Box>
                );

        case 2:
            return (
                <p>2</p>
            );

        case 3:
            return (
                <p>3</p>
            );

        case 4:
            return (
                <p>4</p>
            );

        case 5:
            return (
                <p>5</p>
            );

        case 6:
            return (
                <p>6</p>
            );
    }
}

export default FormFillOut;