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
        date: '2022-04-28',
        amount: '553.00',
        cycle: 'Monthly',
        method: 'Pre-authorized withdrawal'
    }
]

const TermsTable = () => {
    return (
        <Paper square variant="outlined">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow class="table-header">
                            <TableCell><Typography variant="button">Date</Typography></TableCell>
                            <TableCell><Typography variant="button">Amount</Typography></TableCell>
                            <TableCell><Typography variant="button">Cycle</Typography></TableCell>
                            <TableCell><Typography variant="button">Payment Method</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fakeData.map((row) => (
                            <TableRow
                                key={row.date}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.date}</TableCell>
                                <TableCell align="right">$ {row.amount}</TableCell>
                                <TableCell>{row.cycle}</TableCell>
                                <TableCell>{row.method}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default TermsTable;