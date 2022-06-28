import * as React from 'react'
import { Paper } from '@mui/material'

const Flag = () => {

    const styles = {
        height: '10.2rem',
        width: 1,
        backgroundImage: 'url(\'Flag_of_Alberta.png\')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain'
    }

    return (
        <Paper elevation={0} variant="outlined" square sx={styles}/>
    );
};

export default Flag;