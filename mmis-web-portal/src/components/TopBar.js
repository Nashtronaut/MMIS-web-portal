import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TopInfoPanel from './TopInfoPanel'
import QuizIcon from '@mui/icons-material/Quiz';
import PopDownMenu from './PopDownMenu';

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
                    <Box sx={{display: 'flex', justifyContent: 'space-between', width: 1, alignItems: 'center'}}>
                        <Typography variant="button" component="h1" sx={{ flexGrow: 1 }}>
                            {pageTitle}
                        </Typography>

                        <Stack direction="row" alignItems='center'>
                            <IconButton sx={{ color: 'white' }}>
                                <QuizIcon  />
                            </IconButton>
                            <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                                <PopDownMenu />
                            </Box>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            <TopInfoPanel fileNumber={fileNumber} fileStatus={fileStatus} person1={person1} person2={person2} />
        </Stack>
        );
};

export default TopBar;
