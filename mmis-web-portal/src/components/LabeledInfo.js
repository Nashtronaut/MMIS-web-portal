import { Box, Typography } from '@mui/material';
import * as React from 'react'

const LabeledInfo = (props) => {
    const label = props.label;
    const info = props.info;

    return (

        <Typography variant="button">
            <b>{label}:</b> {info}
        </Typography>
        );
};

export default LabeledInfo;