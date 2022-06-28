import { Stack, Box } from '@mui/material'
import TopBar from '../components/TopBar'
import PageInfo from '../components/PageInfo'
import CurrentInfoPanel from '../components/CurrentInfoPanel'
import UpdateInfoPanel from '../components/UpdateInfoPanel'
import Footer from '../components/Footer'

const UpdatePersonalInfoPage = () => {
    const name = "Nash Boisvert";
    const dob = "11/22/94";
    const address = "5402";
    const street = "34 Street";
    const postalCode = "T3V 4C3";
    const province = "Alberta";
    const country = "Canada";

    return (
        <Stack spacing={1} sx={{ minHeight: '70rem', position: 'relative' }}>
            <TopBar
                pageTitle="S174 Update Peronal Information"
                fileNumber="123441-143"
                fileStatus="Active"
                person1={name}
                person2="Ronald Reagan" />
            <CurrentInfoPanel {...{name, dob, address, street, postalCode, province, country}} />
            <PageInfo header="Party Information"
                info="When our records indicate that we do not have a valid address for you, you are
                required to provide your current address in order to view the remaining information regarding your file."
                highlightInfo="Please enter address information below." />
            <UpdateInfoPanel {...{ name, dob, address, street, postalCode, province, country }} />
            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
        );
};

export default UpdatePersonalInfoPage;