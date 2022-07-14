import { MenuList, MenuItem, Divider, Dialog, Button, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography, Snackbar, Alert, Menu } from '@mui/material'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

const NavMenu = () => {

    const [formRequestRecieved, setFormRequestRecieved] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);

    const toggleModalOpen = () => {
        setModalOpen(!modalOpen);
    }

    const [successMessageOpen, setSuccessMessageOpen] = useState(false);

    const handleSuccessOpen = () => {

        if (formRequestRecieved) {
            handleSentOpen();
        }
        else {
            setSuccessMessageOpen(true);
            setFormRequestRecieved(true);
        }
    }

    const handleSuccessClose = () => {
        setSuccessMessageOpen(false);
    }

    const [cancelMessageOpen, setCancelMessageOpen] = useState(false);

    const handleCancelOpen = () => {
        setCancelMessageOpen(true);
    }

    const handleCancelClose = () => {
        setCancelMessageOpen(false);
    }

    const [sentMessageOpen, setSentMessageOpen] = useState(false); 

    const handleSentOpen = () => {
        setSentMessageOpen(true);
    }

    const handleSentClose = () => {
        setSentMessageOpen(false);
    }

    return (
        <MenuList sx={{ pt: 0, pb: 0 }}>
            <NavLink activeClassName='active' to='/logged_in/view_update_info'><MenuItem>Update Information</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/logged_in/view_report_debtor_information'><MenuItem>Report Debtor Information</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/logged_in/view_collections'><MenuItem>View Collections</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/logged_in/view_terms'><MenuItem>View Terms</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/logged_in/view_payments'><MenuItem>View Payments</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/logged_in/view_dsa'><MenuItem>View DSA Summary</MenuItem></NavLink>

            <MenuItem onClick={toggleModalOpen}>Request Remmitance Forms</MenuItem> 

            <NavLink activeClassName='active' to='/logged_in/view_request_callback'><MenuItem>Request Callback</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/logged_in/view_send_documents'><MenuItem>Send Documents</MenuItem></NavLink>

            <Divider />

            <NavLink activeClassName='active' to='/logged_in/view_communications'><MenuItem>View Communcations</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/logged_in/view_change_password'><MenuItem>Change Password</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/logged_in/view_change_login_info'><MenuItem>Change Login Info</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/logged_in/not_implemented'><MenuItem>Log Out</MenuItem></NavLink>

            <Divider sx={{ display: { xs: 'none', lg: 'block' } }} />

            <Dialog open={modalOpen} onClose={toggleModalOpen}>
                <DialogTitle>
                    Request Remittance Forms
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            To request payment slips that will be mailed within two business days, please click confirm below.
                        </Typography>
                        <br/>
                        <Typography variant="subtitle1">
                            <i>* Please note that payment slips cannot be faxed.</i>
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { handleCancelOpen(); toggleModalOpen(); }}>Cancel</Button>
                    <Button onClick={() => { handleSuccessOpen(); toggleModalOpen(); }} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={successMessageOpen} autoHideDuration={6000} onClose={handleSuccessClose}>
                <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
                    Your forms will be mailed within 2 business days. Thank you!
                </Alert>
            </Snackbar>

            <Snackbar open={cancelMessageOpen} autoHideDuration={6000} onClose={handleCancelClose}>
                <Alert onClose={handleCancelClose} severity="warning" sx={{ width: '100%' }}>
                    You have cancelled form request.
                </Alert>
            </Snackbar>

            <Snackbar open={sentMessageOpen} autoHideDuration={6000} onClose={handleSentClose}>
                <Alert onClose={handleSentClose} severity="success" sx={{ width: '100%' }}>
                    We have already recieved your request and are working on mailing your forms as soon as possible! Thank you. 
                </Alert>
            </Snackbar>

        </MenuList>
        );
    };

export default NavMenu;