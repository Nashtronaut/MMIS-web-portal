import { Stack, Box } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo'
import DSASummaryPanel from '../components/DSASummaryPanel'
import DebtorSummaryPanel from '../components/DebtorSummaryPanel'
import Footer from '../components/Footer'

const ViewDSAPage = () => {
    const name = "Nash Boisvert";

    return (
        <Stack spacing={1} sx={{ minHeight: '70rem', position: 'relative' }}>
            <TopBar
                pageTitle="S174 View DSA"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="MMIS ONLINE - Debtor Statement of Account" />

            <DSASummaryPanel />

            <DebtorSummaryPanel />

            <Box sx={{ position: 'absolute', bottom: 0, width: 1, mt: 1 }}>
                <Footer />
            </Box>
        </Stack>
    );
};

export default ViewDSAPage;