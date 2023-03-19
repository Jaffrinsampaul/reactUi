import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ZomotoScreen from "./screen/zomotoScreen/ZomotoScreen";

function App() {
  return (
    <div className="App">
      {/* <p className="text-yellow-700">Welcome to this demo page</p> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/zomoto" element={<ZomotoScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
