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
        sentRecieved: 'Sent',
        date: '2022-04-23',
        email: 'josephine-zimmer@fakemail.com',
        phone: '',
        regarding: 'Ticket #1235342 recieved from user.'
    },
    {
        sentRecieved: 'Sent',
        date: '2022-05-31',
        email: '',
        phone: '1 (780) 838-1234',
        regarding: 'Left voice mail regarding open ticket.' 
    },
    {
        sentRecieved: 'Recieved',
        date: '2022-06-1',
        email: '',
        phone: '1 (780) 838-1234',
        regarding: 'Phone call returned from user.',
    }
];

const CommunicationsTable = () => {
    return (
        <Paper square variant="outlined">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow class="table-header">
                            <TableCell><Typography variant="button">Sent/Recieved</Typography></TableCell>
                            <TableCell><Typography variant="button">Date</Typography></TableCell>
                            <TableCell><Typography variant="button">Email</Typography></TableCell>
                            <TableCell><Typography variant="button">Phone Number</Typography></TableCell>
                            <TableCell><Typography variant="button">Regarding</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fakeData.map((row) => (
                            <TableRow
                                key={row.code}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.sentRecieved}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.regarding}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        );
};

export default CommunicationsTable