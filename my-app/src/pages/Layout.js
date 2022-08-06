
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = ( ) => {
  return (
    <>

      <Navbar bg="light" expand="lg">
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="Exercise1">Exercise1</Link></Nav.Link>
              <Nav.Link><Link to="Exercise2">Exercise2</Link></Nav.Link>
              <Nav.Link><Link to="Exercise3">Exercise3</Link></Nav.Link>
              <Nav.Link><Link to="Exercise4">Exercise4</Link></Nav.Link>
              <Nav.Link><Link to="Exercise5">Exercise5</Link></Nav.Link>
              <Nav.Link><Link to="Exercise6">Exercise6</Link></Nav.Link>
              
                       

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default Layout;