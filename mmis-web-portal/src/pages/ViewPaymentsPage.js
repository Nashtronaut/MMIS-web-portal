import { Stack, Box } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo'
import PaymentsTable from '../components/PaymentsTable'
import Footer from '../components/Footer'

const ViewPaymentsPage = () => {
    const name = "Nash Boisvert";

    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: '6rem' }}>
            <TopBar
                pageTitle="S174 Collection Actions Taken"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="Payment Methods and Pending Money"
                info="Pending payments will be released as soon as they are cleared by the bank." />
            <PaymentsTable />
            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
    );
};

export default ViewPaymentsPage;