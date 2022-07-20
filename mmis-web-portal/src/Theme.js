import { createTheme } from '@mui/material';

const themeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#057d3e',
        },
        secondary: {
            main: '#2c3135',
        },
        info: {
            main: '#27a448',
        },
        background: {
            default: '#2c3135',
        },
    },
};

const Theme = () => {
    return createTheme(themeOptions);
}

export default Theme;