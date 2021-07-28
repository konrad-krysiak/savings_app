import { Container } from "react-bootstrap";

import { Form, Row, Col, Button} from 'react-bootstrap';
import './style.scss';

const Login = () => {
    return (
        <Container className="pt-5">
            <Form className="">
            <Form.Group as={Row} className="mb-3 justify-content-sm-center" controlId="formHorizontalEmail">
                <Form.Label column sm={1}>
                Email
                </Form.Label>
                <Col sm={4}>
                <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 justify-content-sm-center" controlId="formHorizontalPassword">
                <Form.Label column sm={1}>
                Password
                </Form.Label>
                <Col sm={4}>
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 justify-content-sm-center">
                <Col sm={3}>
                    <Button type="submit">Sign in</Button>
                </Col>
            </Form.Group>
            </Form>
        </Container>
    );
}

export default Login;