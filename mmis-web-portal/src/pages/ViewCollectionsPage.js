import { Stack, Box } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo'
import CollectionsTable from '../components/CollectionsTable'
import Footer from '../components/Footer'

const ViewCollectionsPage = () => {
    const name = "Nash Boisvert";

    return (
        <Stack spacing={1} sx={{minHeight: '70rem', position: 'relative'}}>
            <TopBar
                pageTitle="S174 Collection Actions Taken"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <PageInfo header="Active Collection Actions"
                info="This screen only displays active collection actions on your file." />
            <CollectionsTable />
            <Box sx={{position: 'absolute', bottom: 0, width: 1} }>
                <Footer />
            </Box>
        </Stack>
        );
};

export default ViewCollectionsPage;