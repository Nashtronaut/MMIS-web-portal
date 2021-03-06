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

            <Grid container spacing={2} sx={{ py: 2, alignItems: 'center' }}>
                <Grid item xs={12}>
                    <Box sx={{ px: 6, mt: 2 }}>
                        <TextField
                            id="date"
                            label="Statement Start Date"
                            type="date"
                            size="small"
                            defaultValue="2021-02-05"
                            sx={{ width: 1 }}
                            InputLabelProps={{
                                shrink: true,
                            }} />
                    </Box>
                </Grid>

                <Grid item sx={{ px: 6 }} xs={12} sm={6} lg={4}>
                    <Box sx={{ px: 6 }}>
                        <LabeledInfo label="File Number" info="123441-143" />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Box sx={{ px: 6 }}>
                        <LabeledInfo label="Statement Start Date" info="2021-02-05" />
                    </Box>
                </Grid>

                <Grid container item xs={12} lg={4} gap={1} my={2} justifyContent={'end'} >
                    <Grid item>
                        <Button size="large" variant="contained">Apply</Button>
                    </Grid>
                    <Grid item>
                        <Box sx={{ pr: 6 }}>
                            <Button size="large" variant="contained">Print</Button>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{ px: { xs: 0, md: 6 } }}>
                        <DebtorSummaryDataPanel />
                    </Box>
                </Grid>

                <Grid container item xs={12} justifyContent={'end'}>
                    <Box sx={{ px: 6 }}>
                        <Button size="medium" variant="contained">Request Statement from MEP</Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
        );
};

export default DebtorSummaryPanel;