import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

const fakeData = [
    {
        date: '2021-11-03',
        description: 'Federal License Denial'
    },
    {
        date: '2021-11-03',
        description: 'Motor Vehicle Suspension'
    },
    {
        date: '2021-04-10',
        description: 'Motor Vehicle Restriction'
    },
    {
        date: '2021-03-22',
        description: 'Federal Support Deducation Notice'
    },
    {
        date: '2021-03-22',
        description: 'Personal Property Registry'
    }
]

const CollectionsTable = () => {
    return (
        <Paper square variant="outlined">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow class="table-header">
                            <TableCell><Typography variant="button">Issued Date</Typography></TableCell>
                            <TableCell><Typography variant="button">Collection Action Description</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fakeData.map((row) => (
                            <TableRow
                                key={row.date}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        );
};

export default CollectionsTable;