import SideBar from "../components/SideBar.jsx"
import "../styles/ModuloI.css"
import Titles from "../components/Titles.jsx"
import Parrafos from "../components/Parrafos.jsx"
import Images from "../components/Images.jsx"
import Videos from "../components/Videos.jsx"

function ModuloI() {
  return(
    <>
      <div className="main-container">
        <div className="barDiv"> 
          <SideBar />
      </div>
        <div className="contenidosDiv">
          <Titles 
            titulo= "Desigualdades"
          />
          <Parrafos 
            parrafo ="Una inecuación es una desigualdad algebraica que involucra una o más incógnitas (letras) y se expresa mediante los signos . Para resolver una inecuación, se busca encontrar todos los valores de la incógnita que hacen que la desigualdad sea verdadera, y estas soluciones pueden expresarse en forma de conjunto, intervalo o representación gráfica. "
          />
          <Images />
          <Titles 
            titulo="Inecuaciones"
          />

          <Parrafos 
            parrafo="El lorem ipsum es un texto de relleno que se usa en el diseño gráfico, la maquetación y la impresión. Su propósito es simular la apariencia de un texto real en un documento para que los diseñadores y maquetadores puedan centrarse en el diseño, la tipografía y la estructura sin distraerse con el contenido legible. El texto en sí no tiene sentido; se deriva de una obra de Cicerón y ha sido alterado a lo largo del tiempo. Al no tener un significado, el lorem ipsum evita que el cliente o el revisor se enfoquen en el contenido en lugar del diseño. Es una herramienta muy útil para crear prototipos de sitios web, folletos, revistas o cualquier otro material impreso. "
          />
    
          <Videos />

        </div>
      </div>
    </>
  )
}


export default ModuloI
