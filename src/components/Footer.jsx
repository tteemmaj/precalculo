import  "../styles/Footer.css"
import Calendar from "../assets/calendar.svg"

function Footer() {
 return(
   <>
      <div className="Footer">
        <div className="primerDiv">
          <img src={ Calendar } /> 
          <p>Segundo Semestre, sección "B"</p>
        </div>
        <div className="nombresDiv">
          <table className="tablaPadre">
            <thead>
              <tr>
                <th>Nombres y apellidos</th>
                <th>Números de Carné</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jeser Aziel Fuentes Pérez</td>
                <td>0903-25-21440</td>
              </tr>
              <tr>
                <td>José Julián Miranda Orozco</td>
                <td>0903-25-15941</td>
              </tr>
              <tr>
                <td>Ian Steven Barrios García</td>
                <td>0903-25-18329</td>
              </tr>
              <tr>
                <td>Juan Diego Berdúo Témaj</td>
                <td> 0903-25-15843 </td>
              </tr>
              <tr>
                <td>Luis Enrique González Orozco</td>
                <td>0902-25-21845</td>
              </tr>
              <tr>
                <td>Jonathan David Orozco Navarro</td>
                <td>0903-25-12882</td>
              </tr>
            </tbody>
          </table> 
        </div>
        <div></div>
      </div>
   </>
 )
}


export default Footer
