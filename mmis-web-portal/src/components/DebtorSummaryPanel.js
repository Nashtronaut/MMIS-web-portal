import { Paper, Grid, Box, AlertTitle, Stack, Button, TextField, Typography, Divider } from "@mui/material";
import LabeledInfo from "./LabeledInfo";
import DebtorSummaryDataPanel from "./DebtorSummaryDataPanel"


const DebtorSummaryPanel = () => {
    return (
        <Paper square variant="outlined" sx={{mb: 3}}>
            <Box sx={{ backgroundColor: '#1976D2', width: 1, color: 'white'}}>
                <Box sx={{ px: 6, py: 2 }}>
                    <AlertTitle>
                        Debtor Summary 
                    </AlertTitle>
                </Box>
            </Box>

            <Grid container spacing={2} sx={{ px: 6, py: 2, alignItems: 'center' }}>
                <Grid item xs={6}>
                    <LabeledInfo label="File Number" info="123441-143" />
                </Grid>
                <Grid item xs={6}>
                    <LabeledInfo label="Statement Start Date" info="2021-02-05" />
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid> 

                <Grid item xs={6}>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        size="small"
                        defaultValue="2021-02-05"
                        sx={{ width: 1 }}
                        InputLabelProps={{
                            shrink: true,
                        }}/>    
                </Grid>

                <Grid item xs={6} my={2}>
                    <Stack direction="row" justifyContent='space-between'>
                        <Button size="large" variant="contained">Apply</Button>
                        <Button size="large" variant="contained">Print</Button>
                        <Button size="large" variant="contained">Request Statement from MEP</Button>
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <DebtorSummaryDataPanel />                     
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>
            </Grid>
        </Paper>
        );
};

export default DebtorSummaryPanel;