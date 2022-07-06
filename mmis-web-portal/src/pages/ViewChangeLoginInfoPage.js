import { Box, Stack } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo';
import ChangeLoginInfoPanel from '../components/ChangeLoginInfoPanel'
import Footer from '../components/Footer';

const ViewChangeLoginInfoPage = () => {
    const name = 'Nash Boisvert';

    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: '6rem' }}>
            <TopBar
                pageTitle="S174 Change Login Information"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="Change Login Information"
                info="This screen allows you to change the email address you use to login or your Password Recovery Questions and answers. To change your password specifically, use the Change your Password link."
                highlightInfo="If you need help, please click the question mark in the top right of your page." />

            <ChangeLoginInfoPanel />

            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
    );
};

export default ViewChangeLoginInfoPage;