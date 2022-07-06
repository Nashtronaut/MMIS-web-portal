import { Grid, Paper, Stack, Box, TextField, Button } from '@mui/material'
import Footer from '../components/Footer';
import PageInfo from '../components/PageInfo';
import TopBar from '../components/TopBar';
import ReportDebtorInfoPanel from '../components/ReportDebtorInfoPanel'


const ViewReportDebtorInfoPage = () => {
    const name = 'Nash Boisvert';

    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: '6rem' }}>
            <TopBar
                pageTitle="S174 Report Debtor Information"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="Debtor Information"
                info="To provide new information on the Debtor such as a change of address, bank information or new employer, fill out the form below and click on submit." />

            <ReportDebtorInfoPanel />

            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
        );
};

export default ViewReportDebtorInfoPage;