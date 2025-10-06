import "../styles/Images.css"
import Ejemplo from "../assets/ejemplo.jpg"
function Images() {
  return(
    <div className="imagenDiv">
      <div className="padreImg">
        <img src={ Ejemplo } />
      </div>
    </div>
  );
}


export default Images
