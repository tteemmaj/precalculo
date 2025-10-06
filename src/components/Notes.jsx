import "../styles/Notes.css"
import { MathJax, MathJaxContext } from "better-react-mathjax";


function Notes(props) {
  return(
    <div className="mainFormsDiv">
      <div className="formsDiv">
        <h3>  { props.tituloFormula } </h3>
        <MathJaxContext>
              <MathJax>{ props.formulasMath }</MathJax>
        </MathJaxContext>
      </div>
    </div>
  );
}


export default Notes
