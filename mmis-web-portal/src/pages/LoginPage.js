import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import QuizIcon from '@mui/icons-material/Quiz';
import PopDownMenu from '../components/PopDownMenu';
import LoginPanel from '../components/LoginPanel';
import Footer from '../components/Footer';
import CreateAccountPanel from '../components/CreateAccountPanel';
import PageInfo from '../components/PageInfo';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const LoginPage = () => {
    return (
        <Box sx={{ width: 1, p: '0.5rem' }}>
            <Stack spacing={1} sx={{ maxWidth: '100rem', m: '0 auto', mt: 1, width: 1, minHeight: '71.05rem', position: 'relative', pb: '6rem' }}>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 1, alignItems: 'center' }}>
                            <Typography variant="button" component="h1" sx={{ flexGrow: 1 }}>
                                Login
                            </Typography>

                            <Stack direction="row" alignItems='center'>
                                <ToggleButtonGroup value="en" exclusive>
                                    <ToggleButton value="en">English</ToggleButton>
                                    <ToggleButton value="fr">Francais</ToggleButton>
                                </ToggleButtonGroup>

                                <IconButton sx={{ color: 'white' }}>
                                    <QuizIcon />
                                </IconButton>
                                <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                                    <PopDownMenu />
                                </Box>
                            </Stack>
                        </Box>
                    </Toolbar>
                </AppBar>

                <PageInfo header="Login to Existing Account..." />
                <LoginPanel />
                <PageInfo header="Create a New Account..." info="You will be able to add related files and accounts afterwards." />
                <CreateAccountPanel />

                <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                    <Footer />
                </Box>
            </Stack>
        </Box>
    );
};

export default LoginPage;