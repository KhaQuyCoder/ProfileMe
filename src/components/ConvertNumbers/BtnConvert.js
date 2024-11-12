import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ConverNumbersToMoney.css";
import { myContext } from "../../State/Context";
function Example() {
  const [show, setShow] = useState(false);
  const { money, setMoney } = useContext(myContext);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const numbers = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  const numbersMain = [
    "",
    "nghìn",
    "triệu",
    "tỷ",
    "nghìn tỷ",
    "triệu tỷ",
    "tỷ tỷ",
  ];
  const readThreeNumbers = (number) => {
    const hundred = Math.floor(number / 100);
    const dozen = Math.floor((number / 10) % 10);
    const unit = Math.floor((number % 100) % 10);
    let result = "";
    if (hundred > 0 && dozen === 0 && unit === 0) {
      result += numbers[hundred] + " trăm";
    } else if (hundred > 0) {
      result += numbers[hundred] + " trăm ";
    }

    if (hundred > 0 && dozen === 1 && unit === 0) {
      result += "mười";
    } else if (hundred > 0 && dozen === 0 && unit > 0) {
      result += numbers[dozen] + "lẻ ";
    } else if (hundred > 0 && dozen === 1 && unit > 0) {
      result += "mười ";
    } else if (hundred > 0 && dozen > 0) {
      result += numbers[dozen] + " mươi ";
    } else if (hundred === 0 && dozen === 1) {
      result += " mười ";
    } else if (hundred === 0 && dozen > 1) {
      result += numbers[dozen] + " mươi ";
    }

    if ((hundred || dozen > 0) && unit > 0 && unit === 1) {
      result += " mốt";
    } else if (unit === 1) {
      result += " một";
    } else if (unit === 5) {
      result += " lăm";
    } else {
      result += numbers[unit];
    }
    return result;
  };

  const mainRead = (money) => {
    let result = "";
    let index = 0;

    do {
      let threeNumber = money % 1000;
      result = `${readThreeNumbers(threeNumber)} ${
        threeNumber > 0 ? numbersMain[index] : ""
      } ${result} `;
      money = Math.floor(money / 1000);

      index++;
    } while (money > 0);

    return result[0].toLocaleUpperCase() + result.substring(1) + " đồng";
  };

  const ChuanHoa = (number) => {
    let index = 0;
    number = String(number);
    let result = "";

    for (let i = number.length - 1; i >= 0; i--) {
      result = number[i] + result;
      index++;
      if (index === 3 && i !== 0) {
        result = "," + result;
        index = 0;
      }
    }

    return result;
  };

  return (
    <>
      <Button onClick={handleShow} className="btn-convert">
        <i class="fa-solid fa-arrow-right"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Số tiền: {ChuanHoa(money)} VND</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mainRead(money)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Dóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
