import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
