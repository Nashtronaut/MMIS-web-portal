import { Box, Stack } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo';
import RequestCallbackPanel from '../components/RequestCallbackPanel'
import Footer from '../components/Footer';

const ViewRequestCallbackPage = () => {
    const name = 'Nash Boisvert';

    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: '6rem' }}>
            <TopBar
                pageTitle="S174 Request a Call Back"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="Request Call Back"
                info="This service queues a request for us to call you back. The Maintenance Enforcement Program recieves hundreds of call each day. Staff will respond to your message within five business days."
                highlightInfo="Thank you for your patience." />

            <RequestCallbackPanel name={name} />

            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
        );
};

export default ViewRequestCallbackPage;