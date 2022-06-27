import { AlertTitle, Divider, Grid, Paper, Typography} from '@mui/material'
import LabeledInfo from './LabeledInfo'

const CurrentInfoPanel = (props) => {
    const name = props.name;
    const dob = props.dob;
    const address = props.address;
    const street = props.street;
    const country = props.country;
    const province = props.province;
    const postalCode = props.postalCode;

    return (
        <Paper square variant="outlined">
            <Grid container spacing="1" sx={{ px: 6, py: 2 }}>
                <Grid item xs={12}>
                    <AlertTitle>
                        Current Information on File
                    </AlertTitle>
                </Grid>
                <Grid item xs={12} sx={{mb: 3}}>
                    <Divider orientation="horizontal"/>    
                </Grid>
                <Grid item xs={6}>
                    <LabeledInfo label="Name" info={name} />
                </Grid>
                <Grid item xs={6}>
                    <LabeledInfo label="Address" info={address + ' ' + street + ', ' + postalCode}/>
                </Grid>
                <Grid item xs={6}>
                    <LabeledInfo label="Date of birth" info={dob} />
                </Grid>
                <Grid item xs={6}>
                    <LabeledInfo label="Location" info={country + ', ' + province} />
                </Grid>
            </Grid>    
        </Paper>
        );
};

export default CurrentInfoPanel;