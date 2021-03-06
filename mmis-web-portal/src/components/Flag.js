import * as React from 'react'
import { Paper, Box } from '@mui/material'

const Flag = () => {

    const styles = {
        height: '10.2rem',
        width: 1,
        backgroundImage: { xs: 'url(\'Alberta-government-logo2.svg.png\')', lg: 'url(\'Flag_of_Alberta.png\')' },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        my: 2
    }

    return (
        <Paper variant="outlined" square>
            <Box sx={styles}/>
        </Paper>
    );
};

export default Flag;