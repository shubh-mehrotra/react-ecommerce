import { Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setToast } from '../../store/actions/toastActions';

export default function Header() {
    const dispatch = useDispatch();

    const toast = useSelector(state => state.toast);

    return (
        <div>
            <h1 className="mt-4">Welcome to <Link to="/">e-commerce</Link> world!</h1>

            <ToastContainer position="top-end" className="p-3">
                <Toast show={toast != false} onClose={() => dispatch(setToast(false))} bg={toast.type} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">{toast.title}</strong>
                    </Toast.Header>
                    <Toast.Body>{toast.message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}
