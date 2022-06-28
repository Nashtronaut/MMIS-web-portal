import { MenuList, MenuItem, ListItemText, Divider } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'

const NavMenu = () => {

    return (
        <MenuList>
            <NavLink activeClassName='active' to='/'><MenuItem>Update Information</MenuItem></NavLink>
            
            <NavLink activeClassName='active' to='/not_implemented'><MenuItem>View Debtor Information</MenuItem></NavLink>

            <NavLink activeClassName='active' to='view_collections'><MenuItem>View Collections</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/view_terms'><MenuItem>View Terms</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/view_payments'><MenuItem>View Payments</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/view_dsa'><MenuItem>View DSA Summary</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/not_implemented'><MenuItem>Request Remmitance Forms</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/not_implemented'><MenuItem>Request Callback</MenuItem></NavLink>

            <Divider />

            <NavLink activeClassName='active' to='/not_implemented'><MenuItem>Change Password</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/not_implemented'><MenuItem>Change Login Info</MenuItem></NavLink>

            <NavLink activeClassName='active' to='/not_implemented'><MenuItem>Log Out</MenuItem></NavLink>

            <Divider />
        </MenuList>
        );
};

export default NavMenu;