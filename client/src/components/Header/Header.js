import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} to="/">Savings application</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/Preferences">Preferences</Nav.Link>
                    <Nav.Link as={Link} to="/History">History</Nav.Link>
                </Nav>
                <Nav className="justyfy-content-end">
                    <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}
 
export default Header;