import { Alert, AlertTitle, Paper, Stack, Box } from '@mui/material';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer'

const NotImplementedPage = () => {
    const name = "Nash Boisvert"

    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: '3rem' }}>
            <TopBar
                pageTitle="S174 Update Peronal Information"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />

            <Alert severity="error">
                <AlertTitle>We're sorry, the highlighted pages have yet to be implemented.</AlertTitle>
            </Alert>

            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
        );
};

export default NotImplementedPage;