import { Grid, Box, Paper, Typography, Stack } from '@mui/material';
import * as React from 'react'
import LabeledInfo from './LabeledInfo'
import VSPageheader from './VSPageheader'

const centeringStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const TopInfoPanel = (props) => {
    const fileNumber = props.fileNumber;
    const fileStatus = props.fileStatus;
    const person1 = props.person1;
    const person2 = props.person2;

    return (
        <Paper variant="outlined" square sx={ {width: 1, px: 6}}>
            <Grid container alignItems="center" alignContent="center" justifyContent="space-between">
                <Grid item>
                    <Box sx={centeringStyles}>
                        <LabeledInfo label="File Number" info={fileNumber} />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={centeringStyles}>
                        <VSPageheader person1={person1} person2={person2} sx={{ mt: 0 }} />
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={centeringStyles}>
                        <LabeledInfo label="File Status" info={fileStatus} />
                    </Box>
                </Grid>
            </Grid>
         </Paper>
        );
};

export default TopInfoPanel;