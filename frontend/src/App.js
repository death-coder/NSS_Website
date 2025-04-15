// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Team from "./pages/Team";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Footer from './components/Footer'

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Events" element={<Events />} />
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
