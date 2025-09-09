import "../styles/Cards.css"
import {Link} from "react-router-dom"
import Dot from "../assets/arrow.svg"

function Cards(props) {
  return(
    <>
      <Link className="linkCardsStyle" to={props.link}> 
        <div className="padreTarjeta">
          <div className="temas">
              <p> <img src={ Dot } className="Dot" /> { props.tema1 } </p>
              <p> <img src={ Dot } className="Dot" />  { props.tema2 } </p>
              <p> <img src={ Dot } className="Dot" /> { props.tema3 }</p>
          </div>
          <div className="moduloBoton">
            <div className="logo"> { <img className="logoTema" src={ props.logoTema } />  }</div>
            <div className="boton"> <h4>Ver resumen </h4> </div>
          </div>
        </div> 
      </Link>
    </>
  )
}


export default Cards
