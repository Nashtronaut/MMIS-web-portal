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
        code: 'Edmonton Court of Queens Bench',
        file: '123-456-342',
        judgementDate: '22-01-2023',
        type: 'MAINTENANCE',
        amount: '582.00',
        cycle: 'Monthly'
    }
]

const TermsTable = () => {
    return (
        <Paper square variant="outlined">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow class="table-header">
                            <TableCell><Typography variant="button">Court Code</Typography></TableCell>
                            <TableCell><Typography variant="button">Court File Number</Typography></TableCell>
                            <TableCell><Typography variant="button">Judgement Date</Typography></TableCell>
                            <TableCell><Typography variant="button">Term Type</Typography></TableCell>
                            <TableCell><Typography variant="button">Amount</Typography></TableCell>
                            <TableCell><Typography variant="button">Cycle</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fakeData.map((row) => (
                            <TableRow
                                key={row.code}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.code}</TableCell>
                                <TableCell>{row.file}</TableCell>
                                <TableCell>{row.judgementDate}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>{row.cycle}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default TermsTable;