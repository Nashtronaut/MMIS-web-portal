import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import DirectDepositForm from "./Forms/DirectDepositForm";
import FaxAndEmailAuthForm from "./Forms/FaxAndEmailAuthForm";
import FormStepper from "./Forms/FormStepper";

const FormFillOut = (props) => {
    const value = props.value;

    switch (value) {
        case '':
            return;

        case 0:
            return (
                <FormStepper steps={["Notice", "Info", "Sign"]}>
                    <FaxAndEmailAuthForm />
                </FormStepper>
            );

        case 1:
            return (
                <FormStepper steps={["Notice", "Account Information", "Sign"]}>
                    <DirectDepositForm />
                </FormStepper>
                );

        default:
            return;
    }
}

export default FormFillOut;