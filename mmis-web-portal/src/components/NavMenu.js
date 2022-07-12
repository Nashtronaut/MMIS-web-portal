import { MenuList, MenuItem, Divider, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
    return (
        <MenuList sx={{ pt: 0, pb: 0 }}>
            <NavLink activeClassName='active' to='view_update_info'><MenuItem>Update Information</MenuItem></NavLink>

            <NavLink activeClassName='active' to='view_report_debtor_information'><MenuItem>Report Debtor Information</MenuItem></NavLink>

            <NavLink activeClassName='active' to='view_collections'><MenuItem>View Collections</MenuItem></NavLink>

            <NavLink activeClassName='active' to='view_terms'><MenuItem>View Terms</MenuItem></NavLink>

            <NavLink activeClassName='active' to='view_payments'><MenuItem>View Payments</MenuItem></NavLink>

            <NavLink activeClassName='active' to='view_dsa'><MenuItem>View DSA Summary</MenuItem></NavLink>

            <NavLink activeClassName='active' to='not_implemented'><MenuItem>Request Remmitance Forms</MenuItem></NavLink>

            <NavLink activeClassName='active' to='view_request_callback'><MenuItem>Request Callback</MenuItem></NavLink>

            <Divider />

            <NavLink activeClassName='active' to='view_change_password'><MenuItem>Change Password</MenuItem></NavLink>

            <NavLink activeClassName='active' to='view_change_login_info'><MenuItem>Change Login Info</MenuItem></NavLink>

            <NavLink activeClassName='active' to='not_implemented'><MenuItem>Log Out</MenuItem></NavLink>

            <Divider sx={{ display: { xs: 'none', lg: 'block' } }} />
        </MenuList>
        );
    };

export default NavMenu;