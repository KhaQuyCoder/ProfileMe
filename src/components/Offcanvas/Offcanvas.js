import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Offcanvas.css";
import { Link } from "react-router-dom";
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handerClose = () => setShow(false);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <i class="fa-solid fa-gear"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="wraper">
              <img
                className="imgJS"
                src="https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg?w=720&h=480&fit=clip&auto=format"
                alt="imageJS"
              />
              <p>Full javascript</p>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-option">
            <li>
              <Link
                to="/ConvertNumbersToMoneyChar"
                onClick={handerClose}
                style={{ textDecoration: "none", color: "black" }}
              >
                <i class="fa-solid fa-money-bill"></i>
                {"   "}
                Đọc số thành tiền ở dạng chữ
              </Link>
            </li>
            <li>
              <Link
                to="/Caculater"
                onClick={handerClose}
                style={{ textDecoration: "none", color: "black" }}
              >
                <i class="fa-solid fa-calculator"></i>
                {"   "} Máy tính bỏ túi cơ bản
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
