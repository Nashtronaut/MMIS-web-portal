import { Alert, AlertTitle, Paper, Stack, Box } from '@mui/material';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer'

const NotImplementedPage = () => {
    const name = "Nash Boisvert"

    const iconPlacement = {
        height: '53rem',
        width: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <Stack spacing={1} sx={{minHeight: '70rem', position: 'relative'}}>
            <TopBar
                pageTitle="S174 Update Peronal Information"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />

            <Alert severity="error">
                <AlertTitle>We're sorry, the highlighted pages have yet to be implemented.</AlertTitle>
            </Alert>

            <Paper square variant="outlined" sx={iconPlacement}>
                <img src="cancel-icon.png" alt="cancel icon" height='15%'/>
            </Paper>

            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
        );
};

export default NotImplementedPage;