import "../styles/Home.css"
import Cards from "../components/Cards.jsx"
import equaLogo from "../assets/equa.png"
import funLogo from "../assets/function.svg"
import anglesLogo from "../assets/angles.svg"

function Home() {
  return(
    <>
      <div className="mainDiv">
        <div><h1 className="tituloGeneral">Resumen Precálculo 2025</h1></div>
        <div className="divCards">
          <Cards 
            link ="/moduloI" 
            tema1 = "Números reales, exponentes y radicales."
            tema2 = "Expresiones algebraicas y racionales."
            tema3 = "Ecuaciones y desigualdades."
            numModulo = "modulo I"
            logoTema = { equaLogo }
          /> 
          <Cards 
            link ="/moduloII" 
            tema1 = "Geometría y rectas."
            tema2 = "Funciones gráficas y transformaciones."
            tema3 = "Funciones cuadráticas."
            numModulo = "modulo II"
            logoTema = { funLogo }
          />
          <Cards 
            link ="/moduloI" 
            tema1 = "Funciones polimoniales y números complejos"
            tema2 = "Trigonometría y ángulos"
            tema3 = "Ley de senos y cosenos"
            numModulo = "modulo III"
            logoTema = { anglesLogo }
          /> 
        </div>
      </div>
    </>
  )
}


export default Home;
