import SideBar from "../components/SideBar.jsx"
import "../styles/ModuloI.css"
import Titles from "../components/Titles.jsx"
import Parrafos from "../components/Parrafos.jsx"
import Images from "../components/Images.jsx"
import Videos from "../components/Videos.jsx"
import Notas from "../components/Notes.jsx"
import { MathJaxContext, MathJax } from "better-react-mathjax"

function ModuloI() {
  return(
    <>
      <div className="main-container">
        <div className="barDiv"> 
          <SideBar />
      </div>
        <div className="contenidosDiv">
          <Titles 
            titulo="Números Reales"
          />
          <p>Los tipos números que conforman el sistema de números reales:</p>
          <b>Números Naturales: </b> <p style={{ textAlign: 'center' }} >1, 2, 3, 4, ...</p>
          <b>Enteros: </b> <p style={{ textAlign: 'center' }} >..., -3, -2, -1, 0, 1, 2, 3, 4, ...</p>
          <b>Números Racionales: </b> <p> Los Números racionales se construyen al tomar razones de enteros:</p><p style={{ textAlign: 'center',fontSize: '1.5em' }} >
            <MathJaxContext>
              <MathJax>{ `\\( r = \\frac{m}{n} \\) ` }</MathJax>
            </MathJaxContext>
          </p>
          <p>Donde m y n no son enteros y n no es igual a 0</p>
          <b>Números Irracionales:</b>
          <p>Números que no se pueden expresar como una razón entre enteros. Ejemplos:</p>
          <p style={{ marginLeft: '25px' }} >
            <MathJaxContext>
              <MathJax>{ `\\[ \\sqrt{3}, \\quad \\sqrt{5}, \\quad \\sqrt[3]{2}, \\quad \\pi, \\quad \\frac{3}{\\pi^2} \\]` }</MathJax>
            </MathJaxContext>
          </p>
          <Titles 
            titulo="Propiedades de los Númereso Reales"
          />
          <b>Propiedad Conmutativa:</b>
          <p>Cuando sumamos dos números, el orden de Adición no importa</p>
          <p style={{ textAlign: 'center',fontSize: '1.5em' }} >
            <MathJaxContext>
              <MathJax inline>
                { `\\( a + b = b + a \\)` }
            </MathJax>
            </MathJaxContext>
          </p>
          <Notas 
            tituloFormula="Propiedades Conmutativas"
            formulasMath={`\\( a + b = b + a \\\\ ab = ba \\)`}
          />
        </div>
      </div>
    </>
  )
}


export default ModuloI
