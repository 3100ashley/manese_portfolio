import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./pages/Projects";
import About from "./pages/About";
function App() {
  return (
    <>
    <div className="min-h-full">
      <BrowserRouter>
        <NavBar className="absolute z-10">
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
         
        </NavBar>
        
      </BrowserRouter>
     
    </div>
    <Footer />
    </>
  );
}

export default App;
