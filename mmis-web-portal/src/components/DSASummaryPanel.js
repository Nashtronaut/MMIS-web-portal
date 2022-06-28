import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AlertTitle, Divider, Stack } from '@mui/material';

const DSASummaryPanel = () => {
    const fakeData = [
        {
            info: 'Opening Enforceable Balance as of 2021-02-05: ',
            data: '0.00'
        },
        {
            info: 'Closing Enforeable Balance Due: ',
            data: '12906.83'
        },
        {
            info: 'Closing Interest Subtotal: ',
            data: '4.90'
        }
    ];

    return (
        <Paper square variant="outlined">
            <Stack sx={{ px: 6, py: 2 }}>
                <AlertTitle>
                    File Summary
                </AlertTitle>

                <Divider orientation="horizontal" sx={{my: 1}}/>

                <TableContainer>
                    <Table size="small">
                        <TableBody>
                            {fakeData.map((row) => (
                                <TableRow
                                    key={row.info}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{row.info}</TableCell>
                                    <TableCell align="right">{row.data}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> 
            </Stack>
         </Paper>
                );
};

export default DSASummaryPanel;