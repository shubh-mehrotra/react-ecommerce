import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export function Login() {
    const [validated, setValidated] = useState(false);

    useEffect(() => {
    }, [validated]);

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        if (form.checkValidity()) {
            setValidated(true);

            loginCustomer(form);
        }
    }

    const loginCustomer = form => {
        console.log(validated);
    }

    return (
        <Form noValidate className="page-content" validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" defaultValue="admin@example.com" required />
                <Form.Control.Feedback type="invalid">
                    Please enter email address.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" defaultValue="admin123" required />
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
