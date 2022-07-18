import { Button, Grid, Stack, TextField } from "@mui/material";
import * as React from "react";

const UploadFormPanel = () => {
    const [formName, setFormName] = React.useState('');

    const handleChange = (event) => {
        setFormName(event.target.files[0].name)
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField aria-readonly value={formName} label="Form File" fullWidth />    
            </Grid>

            <Grid item xs={12}>
                <Stack direction="row" justifyContent='space-between'>
                    <Button
                        variant="contained"
                        component="label">
                        Upload File
                        <input
                            id="uploaded-file"
                            type="file"
                            hidden
                            onChange={handleChange} />
                    </Button>
                    <Button disabled={formName === ''} variant="contained">Submit</Button>
                </Stack>
            </Grid>
        </Grid>
        );
};

export default UploadFormPanel;