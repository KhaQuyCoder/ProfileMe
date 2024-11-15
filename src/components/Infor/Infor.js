import Accordion from "react-bootstrap/Accordion";

function BasicExample() {
  return (
    <Accordion
      style={{
        width: "100%",
        maxWidth: "1150px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ margin: "20px 0" }}>Bạn có thắc mắc không?</h1>
      <Accordion.Item eventKey="0">
        <Accordion.Header> Ai là người tạo ra trang web này?</Accordion.Header>
        <Accordion.Body>
          <i class="fa-solid fa-check" style={{ color: "green" }}></i>
          <span style={{ marginLeft: "10px" }}>Hồ Khả Quý</span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Trang web này sử dụng các công nghệ nào?
        </Accordion.Header>
        <Accordion.Body>
          <i class="fa-solid fa-check" style={{ color: "green" }}></i>
          <span style={{ marginLeft: "10px" }}>
            HTML, CSS, Javascript, React, Bootstrap
          </span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Mất bao lâu để hoàn thành website này?
        </Accordion.Header>
        <Accordion.Body>
          <i class="fa-solid fa-check" style={{ color: "green" }}></i>
          <span style={{ marginLeft: "10px" }}>
            3 ngày, nhưng website này dùng để lưu các dự án nên nó sẽ được cập
            nhật liên tục
          </span>
        </Accordion.Body>
      </Accordion.Item>{" "}
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Wevsite này có tích hợp backEnd không?
        </Accordion.Header>
        <Accordion.Body>
          <i class="fa-solid fa-check" style={{ color: "green" }}></i>
          <span style={{ marginLeft: "10px" }}>Không</span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" style={{ marginBottom: "100px" }}>
        <Accordion.Header>Dự định của Quý</Accordion.Header>
        <Accordion.Body>
          <i class="fa-solid fa-check" style={{ color: "green" }}></i>
          <span style={{ marginLeft: "10px" }}>
            Trở thành 1 Fullstacks Developer
          </span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
