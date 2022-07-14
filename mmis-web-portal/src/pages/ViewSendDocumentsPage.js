import { Box, Stack } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo';
import SendDocumentsPanel from '../components/SendDocumentsPanel'
import Footer from '../components/Footer';

const ViewSendDocumentsPage = () => {
    const name = 'Nash Boisvert';

    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: '6rem' }}>
            <TopBar
                pageTitle="S174 Send Documents"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="Send Documents"
                info="Use this page to send or fill out any of the documents listed in the drop down and send them in for your file. You have the choice between uploading a completed form as a file from your computer, or filling out the selected form here."
                highlightInfo="Select your form type, and then choose to upload or fill out. If you need help, please click the question mark in the top right of your page." />

            <SendDocumentsPanel />

            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
    );
};

export default ViewSendDocumentsPage;