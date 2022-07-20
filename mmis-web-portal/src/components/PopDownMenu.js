import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Alert, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, ListItemIcon, ListItemText, MenuList, Snackbar, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

const PopDownMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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

    const [switchFileModal, setSwitchFileModal] = useState(false);

    const handleToggleFileModal = () => {
        setSwitchFileModal(!switchFileModal)
    }

    const [switchMessageOpen, setSwitchMessageOpen] = useState(false);

    const handleSwitchMessageOpen = () => {
        setSwitchMessageOpen(true);
    }

    const handleSwitchClose = () => {
        setSwitchMessageOpen(false);
    };

    const [langModal, setLangModal] = useState(false);

    const toggleLangModal = () => {
        setLangModal(!langModal);
    };

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color={'inherit'}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => { handleClose(); toggleLangModal(); }}>Language</MenuItem>
                <MenuItem onClick={handleToggleFileModal}>Switch Files</MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_update_info' onClick={handleClose}>Update Information</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_report_debtor_information' onClick={handleClose}>View Debtor Information</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_collections' onClick={handleClose}>View Collections</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_terms' onClick={handleClose}>View Terms</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_payments' onClick={handleClose}>View Payments</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_dsa' onClick={handleClose}>View DSA Summary</Link></MenuItem>
                <MenuItem onClick={() => { handleClose(); toggleModalOpen(); }}>Request Remittance Forms</MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_request_callback' onClick={handleClose}>Request Callback</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_send_documents' onClick={handleClose}>Send Documents</Link></MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_communications' onClick={handleClose}>View Communications</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_change_password' onClick={handleClose}>Change Password</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/view_change_login_info' onClick={handleClose}>Change Login Info</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/logged_in/not_implemented' onClick={handleClose}>Log Out</Link></MenuItem>
            </Menu>

            <Dialog open={modalOpen} onClose={toggleModalOpen}>
                <DialogTitle>
                    Request Remittance Forms
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            To request payment slips that will be mailed within two business days, please click confirm below.
                        </Typography>
                        <Typography variant="subtitle1">
                            * Please note that payment slips cannot be faxed.
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

            <Dialog open={switchFileModal} onClose={handleToggleFileModal}>
                <DialogTitle>
                    Switch Files
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            You can switch to view another file here.
                        </Typography>
                        <Typography>
                            (NOTE: This will only be visible for persons with multiple files.)
                        </Typography>

                        <MenuList>
                            <MenuItem onClick={() => { handleToggleFileModal(); handleSwitchMessageOpen(); } }>
                                <ListItemIcon className="active">
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText className="active">File #123441-143</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { handleToggleFileModal(); handleSwitchMessageOpen(); }}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText>File #165214-147</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={() => { handleToggleFileModal(); handleSwitchMessageOpen(); }}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText>File #123445123-654</ListItemText>
                            </MenuItem>
                        </MenuList>

                    </DialogContentText>
                </DialogContent>
            </Dialog>

            <Dialog open={langModal} onClose={toggleLangModal}>
                <DialogTitle>
                    Change Languages
                </DialogTitle>
                <DialogContent>
                    <ToggleButtonGroup fullWidth value="en">
                        <ToggleButton onClick={toggleLangModal} value="en">English</ToggleButton>
                        <ToggleButton onClick={toggleLangModal} value="fr">French</ToggleButton>
                    </ToggleButtonGroup>
                </DialogContent>
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

            <Snackbar open={switchMessageOpen} autoHideDuration={6000} onClose={handleSwitchClose}>
                <Alert onClose={handleSwitchClose} severity="success" sx={{ width: '100%' }}>
                    You have successfully switched files.
                </Alert>
            </Snackbar>
        </div>
    );
}

export default PopDownMenu;