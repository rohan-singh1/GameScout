import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          {/* <Navbar.Toggle aria-controls="offcanvas-navbar-nav" onClick={handleShow} /> */}
          <Button variant="primary" onClick={handleShow} className="">
            Click
          </Button>
          <Navbar.Brand href="#">Game Scout</Navbar.Brand>
          <Offcanvas show={show} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Game Scout</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/dashboard">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/gamelist">
                  Games
                </Nav.Link>

                <NavDropdown title="Dropdown" id="offcanvas-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/action3">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/logout">
                  Logout
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Sidebar;
