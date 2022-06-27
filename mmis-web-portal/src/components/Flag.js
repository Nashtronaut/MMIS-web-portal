import * as React from 'react'
import { Box, Paper } from '@mui/material'

const Flag = () => {

    const styles = {
        height: '10rem',
        width: 1,
        backgroundImage: 'url(\'Flag_of_Alberta.png\')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
        border: '1px 1px 0 1px solid rgba(0, 0, 0, 0.12);'
    }

    return (
        <Paper elevation={0} variant="outlined" square sx={styles}/>
    );
};

export default Flag;