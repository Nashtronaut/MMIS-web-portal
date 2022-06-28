import { AlertTitle, Box, Paper, Stack } from '@mui/material';

const NotImplementedPage = (props) => {
    const imgUrl = props.imgUrl;
    const message = props.message;

    const boxStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const pageBadgeStyles = {
        backgroundImage: 'url(\'cancel-icon.png\')',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
        height: '10rem',
        width: '10rem'
    };

    return (
        <Paper square variant="outlined">
            <Box sx={boxStyles}>
                <Stack>
                    <Box sx={pageBadgeStyles}></Box>
                    <AlertTitle>{message}</AlertTitle>
                </Stack>
            </Box>
        </Paper>
    );
};

export default NotImplementedPage;