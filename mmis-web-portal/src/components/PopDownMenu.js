import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Divider, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

const PopDownMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                
                <MenuItem onClick={handleClose}><Link to='/' onClick={handleClose}>Update Information</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/view_report_debtor_information' onClick={handleClose}>View Debtor Information</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/view_collections' onClick={handleClose}>View Collections</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/view_terms' onClick={handleClose}>View Terms</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/view_payments' onClick={handleClose}>View Payments</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/view_dsa' onClick={handleClose}>View DSA Summary</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/not_implemented' onClick={handleClose}>Request Remittance Forms</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/view_request_callback' onClick={handleClose}>Request Callback</Link></MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}><Link to='/view_change_password' onClick={handleClose}>Change Password</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/view_change_login_info' onClick={handleClose}>Change Login Info</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/not_implemented' onClick={handleClose}>Log Out</Link></MenuItem>
            </Menu>
        </div>
    );
}

export default PopDownMenu;