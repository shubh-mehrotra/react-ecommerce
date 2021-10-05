import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { setToast } from "../../store/actions/toastActions";

export function Login() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("admin@example.com");
    const [password, setPassword] = useState("admin123");

    useEffect(() => {
        if (localStorage.getItem("isUserLoggedIn") == "true") {
            dispatch(setToast({
                type: "success",
                title: "Warning!",
                message: "Kudos! You're already logged in."
            }));

            history.push("/admin/dashboard");
        }
    }, [])

    const loginAdmin = () => {
        if (email == "admin@example.com" && password == "admin123") {
            dispatch(setToast({
                type: "success",
                title: "Success!",
                message: "Kudos! You're logged in."
            }));

            localStorage.setItem("isUserLoggedIn", true);

            history.push("/admin/dashboard");
        } else {
            dispatch(setToast({
                type: "danger",
                title: "Error!",
                message: "Oops! Please check your credentials once."
            }));
        }
    }

    const handleInputChange = ({target}, fieldType) => {
        switch (fieldType) {
            case 'email':
                setEmail(target.value);
                break;

            case 'password':
                setPassword(target.value);
                break;

            default:
                break;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (form.checkValidity()) {
            loginAdmin(form);
        }
    }

    return (
        <Form noValidate className="page-content" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={event => handleInputChange(event, "email")} required />
                <Form.Control.Feedback type="invalid">
                    Please enter email address.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={event => handleInputChange(event, "password")} required />
                <Form.Control.Feedback type="invalid">
                    Please enter password.
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
