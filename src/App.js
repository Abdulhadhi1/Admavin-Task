import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Nested } from "./components/Pages/Nested";
import { Element } from "./components/Pages/Element";
import { Infinite } from "./components/Pages/Infinite";
import { Game } from "./components/Pages/Game";
import { Box } from "./components/Pages/Box";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            {/* <Route path="/" element={<Element />} />
            <Route path="/nested" element={<Nested />} /> */}
            <Route path="/infinite" element={<Infinite />} />
            {/* <Route path="/game" element={<Game />} /> */}
            <Route path="/box" element={<Box />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
