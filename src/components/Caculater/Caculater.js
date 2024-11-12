import React, { useRef, useState } from "react";
import "./Caculater.css";
const Caculater = () => {
  const options = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    "-",
    "*",
    "/",
    ".",
    <i class="fa-solid fa-arrow-left"></i>,
    "=",
    "DEL",
  ];
  const [value, setValue] = useState("");
  const handerCLick = (item) => {
    try {
      if (item === "DEL") {
        setValue("");
      } else if (item === "=") {
        setValue(eval(value));
      } else if (item == "[object Object]") {
        setValue(value.slice(0, -1));
      } else {
        setValue(value + item);
      }
    } catch {}
  };
  return (
    <div className="container-caculater">
      <div className="main-caculater">
        <div className="dispay-caculater">{value}</div>
        <div className="wreaper-caculater">
          {options.map((item, index) => (
            <p
              key={index}
              className="number-caculater"
              onClick={() => handerCLick(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Caculater;
