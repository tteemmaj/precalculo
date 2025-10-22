import { Link } from "react-router-dom";
import { useState } from "react"; 
import Logo from "../assets/umg.png";
import "../styles/Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="divIzq">
        <img src={Logo} alt="Logo UMG" /> 
      </div>

      <button className="menu-icon" onClick={toggleMenu} aria-label="Abrir menú de navegación">
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`divDer ${isOpen ? 'open' : ''}`}>
        <ul className="font-weight-nav">
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/moduloI" onClick={closeMenu}>Módulo I</Link></li>
          <li><Link to="/moduloII" onClick={closeMenu}>Módulo II</Link></li>
          <li><Link to="/moduloIII" onClick={closeMenu}>Módulo III</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;