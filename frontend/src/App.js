// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Team from "./pages/team";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/events";
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;



// // import logo from './logo.svg';
// import './App.css';
// import AboutSection from './components/AboutSection';
// import Carousel from './components/Carousel';

// function App() {
//   return (
//     <div>
    
//     <div>
//       <Carousel/>
//     </div>

//       <div>
//         <AboutSection/>
//       </div>
//     </div>
//   );
// }

// export default App;
