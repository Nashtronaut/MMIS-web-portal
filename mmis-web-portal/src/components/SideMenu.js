import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import SideMenuInformation from './SideMenuInfo'

const SideMenu = () => {
    return (
        <Paper elevation={3} variant="outlined" square sx={{ width: '1', height: '100vh' }}>
            <MenuList>
                <MenuItem>
                    <ListItemText>Update Information</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Report Debtor Information</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>View Collections</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>View Terms</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>View Payments</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>View DS Debtor Yearly File</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Summary</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Request Remittance Forms</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Request Call Back</ListItemText>
                </MenuItem>

                <Divider/>        

                <MenuItem>
                    <ListItemText>Change Password</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Change Login Info</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Log Out</ListItemText>
                </MenuItem>
                <Divider />
            </MenuList>

            {/*<SideMenuInformation />*/}


        </Paper>
        );
};

export default SideMenu;