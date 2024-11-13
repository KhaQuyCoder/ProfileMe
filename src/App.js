import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ConverNumbersToMoney from "./components/ConvertNumbers/ConverNumbersToMoney";
import { MyProvider } from "./State/Context";
import Caculater from "./components/Caculater/Caculater";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <MyProvider>
        <Header />
        <Routes>
          <Route
            path="/ConvertNumbersToMoneyChar"
            element={<ConverNumbersToMoney />}
          />
          <Route path="/Caculater" element={<Caculater />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MyProvider>
    </div>
  );
}

export default App;
