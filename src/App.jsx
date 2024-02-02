import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeContent from "./components/HomeContent";
import NavBar from "./components/navBar";
import WritterInfos from "./components/WritterInfos";
import AllBooks from "./components/AllBooks";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", height: "122vh", width: "100vw" }}>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomeContent />} />
          <Route path="/about" element={<WritterInfos />} />
          <Route path="/artwork" element={<AllBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
