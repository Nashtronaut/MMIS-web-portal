import { Box, Divider, Grid, Stack, Switch } from '@mui/material';
import React, { Component } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'
import TopBar from './components/TopBar';
import Flag from './components/Flag'
import SideMenu from './components/SideMenu'
import PageInfo from './components/PageInfo'
import UpdatePersonalInfoPage from './pages/UpdatePersonalInfoPage'
import Layout from './pages/Layout';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Box>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        {<Route path='' element={<UpdatePersonalInfoPage />} />}
                    </Route>
                </Routes>
            </Box>
        );
    }
}