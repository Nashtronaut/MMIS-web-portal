import { Box } from '@mui/material';
import React, { Component } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import UpdatePersonalInfoPage from './pages/UpdatePersonalInfoPage';
import ViewReportDebtorInfoPage from './pages/ViewReportDebtorInfoPage';
import ViewCollectionsPage from './pages/ViewCollectionsPage';
import ViewTermsPage from './pages/ViewTermsPage';
import Layout from './pages/Layout';
import ViewPaymentsPage from './pages/ViewPaymentsPage';
import ViewDSAPage from './pages/ViewDSAPage';
import ViewRequestCallbackPage from './pages/ViewRequestCallbackPage'
import ViewChangeLoginInfoPage from './pages/ViewChangeLoginInfoPage'
import ViewChangePasswordPage from './pages/ViewChangePasswordPage'
import NotImplementedPage from './pages/NotImplementedPage'
import LoginPage from './pages/LoginPage'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Box>
                <Routes>
                    {<Route path='/login' element={<LoginPage />} />}
                    <Route path='/' element={<Layout />}>
                        {<Route path='view_update_info' element={<UpdatePersonalInfoPage />} />}
                        {<Route path='view_report_debtor_information' element={<ViewReportDebtorInfoPage />} />}
                        {<Route path='view_collections' element={<ViewCollectionsPage />} />}
                        {<Route path='view_terms' element={<ViewTermsPage />} />}
                        {<Route path='view_payments' element={<ViewPaymentsPage />} />}
                        {<Route path='view_dsa' element={<ViewDSAPage />} />}
                        {<Route path='view_request_callback' element={<ViewRequestCallbackPage />} />}
                        {<Route path='view_change_login_info' element={<ViewChangeLoginInfoPage />} />}
                        {<Route path='view_change_password' element={<ViewChangePasswordPage />} />}
                        {<Route path='not_implemented' element={<NotImplementedPage />} />}
                    </Route>
                </Routes>
            </Box>
        );
    }
}