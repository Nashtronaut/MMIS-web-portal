import { Stack, Box } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo'
import CommunicationsTable from '../components/CommuncationsTable'
import Footer from '../components/Footer'

const ViewCommunicationsPage = () => {
    const name = "Nash Boisvert";

    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: { xs: '6rem', sm: '4.8rem' } }}>
            <TopBar
                pageTitle="S174 View User Communications"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="Communications Between MMIS and User"
                      info="Here you can view the communcations that have taken place between you and MMIS." />

            <CommunicationsTable /> 

            <Box sx={{ position: 'absolute', bottom: 0, width: 1, mt: 1 }}>
                <Footer />
            </Box>
        </Stack>
    );
};

export default ViewCommunicationsPage;