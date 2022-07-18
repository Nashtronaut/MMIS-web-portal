import { TabContext, TabList, TabPanel } from "@mui/lab";
import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, Tab } from "@mui/material";
import { useState } from "react";
import FormFillOut from "./FormFillOut";
import UploadFormPanel from "./Forms/UploadFormPanel";

const SendDocumentsPanel = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const [formSelected, setFormSelected] = useState(false);

    const [selectedForm, setSelectedForm] = useState('');

    const handleSelectChange = (event) => {
        if (event.target.value !== '') {
            setSelectedForm(event.target.value);
            setFormSelected(true);
        }
        else {
            setFormSelected(false);
        }
    };

    return (
        <form>
            <TabContext value={value}>
                <Paper square variant='outlined' sx={{ width: 1 }}>
                    <Grid container columnSpacing='40' rowSpacing='25' sx={{ px: {xs: 1, lg: 6}, pb: 2, pt: 4 }}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Form Type...</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select Form Type..."
                                    value={selectedForm}
                                    onChange={handleSelectChange}>
                                    <MenuItem value={0}>Email and/or Fax Authorization</MenuItem>
                                    <MenuItem value={1}>Direct Deposit</MenuItem>
                                    <MenuItem disabled value={2}>Income Information</MenuItem>
                                    <MenuItem disabled value={3}>Consent to Recalculate (Self-employement situations)</MenuItem>
                                    <MenuItem disabled value={4}>Court Order (i.e new child support order)</MenuItem>
                                    <MenuItem disabled value={5}>Court Application regarding Child support</MenuItem>
                                    <MenuItem disabled value={6}>Notice of Objection Documents</MenuItem>
                                    <MenuItem disabled value={7}>Waiver Request</MenuItem>
                                    <MenuItem disabled value={8}>Withdrawal Request</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <TabList onChange={handleChange}>
                                <Tab disabled={!formSelected} label='Fill Out Form' value={0} />
                                <Tab disabled={!formSelected} label='Upload File' value={1} />
                            </TabList>

                            <TabPanel value={0}>
                                <FormFillOut value={selectedForm} />
                            </TabPanel>

                            <TabPanel value={1}>
                                <UploadFormPanel />
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Paper>
            </TabContext>
         </form>
        );
};

export default SendDocumentsPanel;