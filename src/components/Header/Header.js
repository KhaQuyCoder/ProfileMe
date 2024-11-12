import Container from "react-bootstrap/Container";
import ReactDOM from "react-dom/client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "../Offcanvas/Offcanvas";
import { Link } from "react-router-dom";
import myImage from "../../assets/image/AnhBonTrap.jpg";
import "./Header.css";
function NavScrollExample() {
  const body = ReactDOM.createRoot(document.getElementById("body"));
  // document.body.style.backgroundColor = "black";

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <Offcanvas />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link
                to={"/"}
                style={{ textDecorationLine: "none", color: "black" }}
              >
                Trang chủ
              </Link>
            </Nav.Link>
            <NavDropdown title="Chế độ màn hình" id="navbarScrollingDropdown">
              <NavDropdown.Item>Line</NavDropdown.Item>
              <NavDropdown.Item>Dark</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled></Nav.Link>
          </Nav>
          <div className="infor">
            <img src={myImage} className="myImage" />
            <div className="me">
              <span>Hồ Khả Quý</span>
              <span>Font-end Developer</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
