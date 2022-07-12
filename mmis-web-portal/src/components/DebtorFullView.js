import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Currency from "./Currency";

const DebtorFullView = () => {

    const fakeData = [
        {
            transactionDate: '2022-04-06',
            effectiveDate: '2022-04-01',
            referenceNumber: 9853783,
            description: 'Direct Deposit',
            partyNumber: 1265173,
            charges: '',
            paidOut: -1116.00,
            totalBalance: 77.00 
        }
        /*{
            transactionDate: ,
            effectiveDate: ,
            referenceNumber: ,
            description: ,
            partyNumber: ,
            charges: ,
            paidOut: ,
            totalBalance: 
        },
        {
            transactionDate: ,
            effectiveDate: ,
            referenceNumber: ,
            description: ,
            partyNumber: ,
            charges: ,
            paidOut: ,
            totalBalance: 
        },
        {
            transactionDate: ,
            effectiveDate: ,
            referenceNumber: ,
            description: ,
            partyNumber: ,
            charges: ,
            paidOut: ,
            totalBalance: 
        },
        {
            transactionDate: ,
            effectiveDate: ,
            referenceNumber: ,
            description: ,
            partyNumber: ,
            charges: ,
            paidOut: ,
            totalBalance: 
        },
        {
            transactionDate: ,
            effectiveDate: ,
            referenceNumber: ,
            description: ,
            partyNumber: ,
            charges: ,
            paidOut: ,
            totalBalance: 
        },
        {
            transactionDate: ,
            effectiveDate: ,
            referenceNumber: ,
            description: ,
            partyNumber: ,
            charges: ,
            paidOut: ,
            totalBalance: 
        },
        {
            transactionDate: ,
            effectiveDate: ,
            referenceNumber: ,
            description: ,
            partyNumber: ,
            charges: ,
            paidOut: ,
            totalBalance: 
        },
        {
            transactionDate: ,
            effectiveDate: ,
            referenceNumber: ,
            description: ,
            partyNumber: ,
            charges: ,
            paidOut: ,
            totalBalance: 
        },*/
    ]

    return (
        <TableContainer>
            <Table sx={{minWidth: 1100}}>
                <TableHead>
                    <TableRow class="table-header">
                        <TableCell><Typography variant="overline">Transaction Date</Typography></TableCell>
                        <TableCell><Typography variant="overline">Effective Date</Typography></TableCell>
                        <TableCell><Typography variant="overline">Reference Number</Typography></TableCell>
                        <TableCell><Typography variant="overline">Description</Typography></TableCell>
                        <TableCell><Typography variant="overline">Party Number</Typography></TableCell>
                        <TableCell><Typography variant="overline">Charges</Typography></TableCell>
                        <TableCell><Typography variant="overline">Paid Out</Typography></TableCell>
                        <TableCell><Typography variant="overline">Total Balance</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fakeData.map((row) => (
                        <TableRow
                            key={row.code}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.transactionDate}</TableCell>
                            <TableCell>{row.effectiveDate}</TableCell>
                            <TableCell>{row.referenceNumber}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.partyNumber}</TableCell>
                            <TableCell align="right"><Currency value={row.charges} /></TableCell>
                            <TableCell align="right"><Currency value={row.paidOut} /></TableCell>
                            <TableCell align="right"><Currency value={row.totalBalance} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
};

export default DebtorFullView;