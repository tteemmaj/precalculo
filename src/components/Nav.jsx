import { Link } from "react-router-dom";
import Logo from "../assets/umg.png"
import "../styles/Nav.css"

function Nav() {
  return (
    <nav>
      <div className="divIzq">
        <img src={Logo} />
      </div>
      <div className="divDer">
        <ul className="font-weight-nav">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/moduloI">Módulo I</Link></li>
          <li><Link to="/moduloII">Módulo II</Link></li>
          <li><Link to="/moduloIII">Módulo III</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
