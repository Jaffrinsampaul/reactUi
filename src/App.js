import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ZomatoScreen from "./screen/zomatoScreen/ZomatoScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/zomoto" element={<ZomatoScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
