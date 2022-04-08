import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastNotification = () => {
    return (
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
}

export default ToastNotification;
