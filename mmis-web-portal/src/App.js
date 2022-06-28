import { Box, Divider, Grid, Stack, Switch } from '@mui/material';
import React, { Component } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import UpdatePersonalInfoPage from './pages/UpdatePersonalInfoPage';
import ViewCollectionsPage from './pages/ViewCollectionsPage';
import ViewTermsPage from './pages/ViewTermsPage';
import Layout from './pages/Layout';
import ViewPaymentsPage from './pages/ViewPaymentsPage';
import ViewDSAPage from './pages/ViewDSAPage';
import NotImplementedPage from './pages/NotImplementedPage'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Box>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        {/*{<Route path='' element={<WelcomeSplashScreen />} />}*/}
                        {<Route path='' element={<UpdatePersonalInfoPage />} />}
                        {<Route path='view_collections' element={<ViewCollectionsPage />} />}
                        {<Route path='view_terms' element={<ViewTermsPage />} />}
                        {<Route path='view_payments' element={<ViewPaymentsPage />} />}
                        {<Route path='view_dsa' element={<ViewDSAPage />} />}
                        {<Route path='not_implemented' element={<NotImplementedPage />} />}
                    </Route>
                </Routes>
            </Box>
        );
    }
}