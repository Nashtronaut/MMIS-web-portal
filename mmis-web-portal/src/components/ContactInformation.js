import { Grid, Paper, Stack } from "@mui/material";
import LabeledInfo from "./LabeledInfo";

const ContactInformation = () => {
    return (
        <Paper square variant="outlined" sx={{px: 6, py: 2}}>
            <Grid container gap={2}>
                <Grid item xs={12} md={5}>
                    <Stack gap={2}>
                        <LabeledInfo label="Phone" info="1 (780) 897-3242" />
                        <LabeledInfo label="Toll-Free Phone" info="1 (800) 817-3242" />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack gap={2}>
                        <LabeledInfo label="Email" info="MMIS@gov.ab.ca" />
                        <LabeledInfo label="Fax" info="1 (898) 897-3242" />
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
        );
};

export default ContactInformation;