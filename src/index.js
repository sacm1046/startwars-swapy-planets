import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-toastify/dist/ReactToastify.css'
import 'jquery';
import 'popper.js';
import 'bootstrap';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
    <>
        <AppRoutes />
        <ToastContainer />
    </>
    , document.getElementById('root'));

