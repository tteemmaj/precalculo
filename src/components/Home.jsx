import "../styles/Home.css"
import Cards from "../components/Cards.jsx"
import equaLogo from "../assets/equa.png"
import funLogo from "../assets/function.svg"
import anglesLogo from "../assets/angles.svg"
import Footer from "../components/Footer.jsx"

function Home() {
  return(
    <>
      <div className="mainDiv">
        <div><h1 className="tituloGeneral"> Precálculo 2025</h1></div>
        <div className="divCards">
          <Cards 
            link ="/moduloI" 
            tema1 = "Números reales, exponentes y radicales."
            tema2 = "Expresiones algebraicas y racionales."
            tema3 = "Ecuaciones y desigualdades."
            numModulo = "I"
            logoTema = { equaLogo }
          /> 
          <Cards 
            link ="/moduloII" 
            tema1 = "Geometría y rectas."
            tema2 = "Funciones gráficas y transformaciones."
            tema3 = "Funciones cuadráticas."
            numModulo = "II"
            logoTema = { funLogo }
          />
          <Cards 
            link ="/moduloIII" 
            tema1 = "Funciones polimoniales y números complejos"
            tema2 = "Trigonometría y ángulos"
            tema3 = "Ley de senos y cosenos"
            numModulo = "III"
            logoTema = { anglesLogo }
          /> 
      </div>
      </div>
      <Footer />
    </>
  )
}


export default Home;
