import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <NavLink to="/" style={{ color: "gray", textDecoration: "none" }}>
          React-Bootstrap
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className="mx-2"
              to="/post"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Post
            </NavLink>

            <NavLink
              className="mx-2"
              to="/cart"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Cart
            </NavLink>
            <NavLink
              className="mx-2"
              to="/code"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Promo Code
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
