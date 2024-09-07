import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';
import About from './components/about';
import Footer from './components/footer/footer';
import Home from './components/home';
import Projects from './components/projects';

function App() {
  return (
    <div className='App px-1'>
      <Navbar expand="lg" className='py-4'>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Personal Logo" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Projects</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
