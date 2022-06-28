import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const DebtorSummaryDataPanel = () => {

    const rows = [
        {
            description: 'Charge Activity from 2021-02-05 to 2021-12-20',
            history: [
                {
                    description: 'Charge Additions',
                    amount: '36816.00'
                },
                {
                    description: 'Interest Charge Additions',
                    amount: '7.15'
                },
                {
                    description: 'MEP Penalty and Service Fee Charge Additions',
                    amount: '485.00'
                },
                {
                    description: 'RP Payor Service Fee Charge Additions',
                    amount: '0.00'
                },
                {
                    description: 'Charge Reductions',
                    amount: '-3615.00'
                },
                {
                    description: 'Interest Charge Reductions',
                    amount: '-2.25'
                },
                {
                    description: 'MEP Penalty and Service Fee Removal Charge Reductions',
                    amount: '0.00'
                },
                {
                    description: 'RP Payor Service Fee Removal Charge Reductions',
                    amount: '0.00'
                },
                {
                    description: 'Total Net Charges and Adjustements',
                    amount: '33690.90'
                }
            ]
        },
        {
            description: 'Payment Details from 2021-02-05 to 2021-12-20',
            history: [
                {
                    description: 'Direct Payments to Recipient',
                    amount: '15152.07'
                },
                {
                    description: 'Paid through MEP',
                    amount: '5632.00'
                },
                {
                    description: 'Direct Payments Returned Items',
                    amount: '0.00'
                },
                {
                    description: 'Returned Items and Bank Debits',
                    amount: '0.00'
                },
                {
                    description: 'Refund',
                    amount: '0.00'
                },
                {
                    description: 'Transferred Out',
                    amount: '0.00'
                },
                {
                    description: 'Total Net Payments and Adjustments',
                    amount: '5632.00'
                }
            ]
        },
        {
            description: 'Payment Paid Out from 2021-02-05 to 2021-12-20',
            history: [
                {
                    description: 'Paid to Recipients (Creditors) which include any interest amounts paid',
                    amount: '5586.00'
                },
                {
                    description: 'Paid to MEP Penalties and Service Fees',
                    amount: '46.00'
                },
                {
                    description: 'Paid to RP Payor Service Fees',
                    amount: '0.00'
                },
                {
                    description: 'Debtor/Payor Payments Requiring Further Processing',
                    amount: '0.00'
                },
                {
                    description: 'Total Paid to File',
                    amount: '5632.00'
                }
            ]
        },
    ];

    return (
        <TableContainer sx={{mb: 3}}>
            <Table aria-label="collapsible table">
                <TableBody>
                  {rows.map((row) => (
                    <Row key={row.description} row={row} />
                  ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow class="table-header" sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{row.description}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.description}>
                                            <TableCell component="th" scope="row">{historyRow.description}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default DebtorSummaryDataPanel;