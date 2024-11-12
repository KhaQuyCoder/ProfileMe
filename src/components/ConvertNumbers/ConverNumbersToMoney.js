import React, { useContext, useRef } from "react";
import "./ConverNumbersToMoney.css";
import BtnConvert from "./BtnConvert";
import { myContext } from "../../State/Context";
const ConverNumbersToMoney = () => {
  const valueMoney = useRef();
  const { setMoney } = useContext(myContext);
  const handerValue = () => {
    setMoney(valueMoney.current.value);
  };
  return (
    <div className="container-convert">
      <div className="wraper-covert">
        <input
          type="text"
          placeholder="Nhập số tiền..."
          className="number"
          ref={valueMoney}
          onInput={handerValue}
        />
        <BtnConvert />
      </div>
    </div>
  );
};

export default ConverNumbersToMoney;
