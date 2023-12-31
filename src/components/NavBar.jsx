import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWideget } from './CartWidget';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="#">Domino Games</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="#action2">Novedades</Nav.Link>
                        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/categories/Videojuegos">
                                Videojuegos
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categories/Consolas">
                                Consolas
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categories/Merchandising">
                                Merchandising
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="#action5">
                                Servicio tecnico
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className='navBarRight'>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar producto..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="light">Search</Button>
                    </Form>
                    <CartWideget />
                </div>

            </Container>
        </Navbar>
    );
}

export default NavBar;