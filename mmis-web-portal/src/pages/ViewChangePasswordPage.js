import { Box, Stack } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo';
import Footer from '../components/Footer';
import ChangePasswordPanel from '../components/ChangePasswordPanel';

const ViewChangePasswordPage = () => {
    const name = 'Nash Boisvert';

    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: '6rem' }}>
            <TopBar
                pageTitle="S174 Change Password"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="Change Password"
                info="For your security, you should change your password frequently. If you have been given a Temporary Password, please change it immediately."
                highlightInfo="For password rules and help, please click the question mark on the top right of this page." />

            <ChangePasswordPanel />

            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
    );
};

export default ViewChangePasswordPage;