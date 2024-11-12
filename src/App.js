import "./App.css";
import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ConverNumbersToMoney from "./components/ConvertNumbers/ConverNumbersToMoney";
import { MyProvider } from "./State/Context";
import Caculater from "./components/Caculater/Caculater";
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
        </Routes>
      </MyProvider>
    </div>
  );
}

export default App;
