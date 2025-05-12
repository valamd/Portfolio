import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Single-page style home route that includes all sections and scrolls */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Project />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Optional: separate routes for individual sections if needed */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
