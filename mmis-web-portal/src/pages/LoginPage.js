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

const LoginPage = () => {
    return (
        <Stack spacing={1} sx={{ minHeight: '66.75rem', position: 'relative', pb: '6rem' }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 1, alignItems: 'center' }}>
                        <Typography variant="button" component="h1" sx={{ flexGrow: 1 }}>
                            Login
                        </Typography>

                        <Stack direction="row" alignItems='center'>
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

            <LoginPanel />

            <Box sx={{ position: 'absolute', bottom: 0, width: 1 }}>
                <Footer />
            </Box>
        </Stack>
    );
};

export default LoginPage;