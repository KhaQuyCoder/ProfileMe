import Container from "react-bootstrap/Container";
import ReactDOM from "react-dom/client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "../Offcanvas/Offcanvas";
import { Link } from "react-router-dom";
import myImage from "../../assets/image/AnhBonTrap.jpg";
import "./Header.css";
import { useState } from "react";
function NavScrollExample() {
  const [status, setStatus] = useState(false);
  const handerClickDark = () => {
    document.body.style.transition = "0.4s linear";
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffff";
    setStatus(true);
  };

  const handerClickLine = () => {
    document.body.style.transition = "0.4s linear";
    document.body.style.backgroundColor = "#ffff";
    document.body.style.color = "black";
    setStatus(false);
  };
  return (
    <Navbar expand="lg" style={{ backgroundColor: status ? "black" : "#ffff" }}>
      <Container className="body-header">
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
                style={{
                  textDecorationLine: "none",
                  color: status ? "#ffff" : "black",
                }}
              >
                Trang chủ
              </Link>
            </Nav.Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
                marginTop: "4px",
              }}
            >
              <i
                class="fa-regular fa-moon"
                onClick={handerClickDark}
                style={{ margin: "0 15px", cursor: "pointer" }}
              ></i>
              <i
                class="fa-regular fa-sun"
                onClick={handerClickLine}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
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
