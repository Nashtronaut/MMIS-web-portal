import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'
import TopInfoPanel from './TopInfoPanel'

const TopBar = (props) => {
    const pageTitle = props.pageTitle
    const fileNumber = props.fileNumber;
    const fileStatus = props.fileStatus;
    const person1 = props.person1;
    const person2 = props.person2;

    return (
        <Stack>
            <AppBar position="static">
                    <Toolbar>
                        <Typography variant="button" component="h1" sx={{ flexGrow: 1 }}>
                            { pageTitle }
                        </Typography>
                    </Toolbar>
                </AppBar>
            <TopInfoPanel fileNumber={fileNumber} fileStatus={fileStatus} person1={person1} person2={person2} />
        </Stack>
        );
};

export default TopBar;