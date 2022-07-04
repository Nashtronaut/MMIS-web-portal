import { Stack, Box } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo'
import TermsTable from '../components/TermsTable'
import Footer from '../components/Footer'

const ViewTermsPage = () => {
    const name = "Nash Boisvert";

    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: '6rem' }}>
            <TopBar
                pageTitle="S174 View Terms"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="Active Orders and Terms"
                info="This screen only displays orders with active terms. MEP Terms indicate what payment arrangements are in palce for arrears."
                highlightInfo="This results from a review of a Statements of Finances."
            />
            <TermsTable />
            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
    );
};

export default ViewTermsPage;