import "../styles/Notes.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";

function Notes(props) {
  return (
    <div
      className="mainFormsDiv"
      data-aos="fade-up"
      data-aos-anchor=".other-element"
    >
      <div className="formsDiv">
        <h3> {props.tituloFormula} </h3>
        <p className="formulasTexto">
          <MathJaxContext>
            <MathJax>{props.formulasMath}</MathJax>
          </MathJaxContext>
        </p>
      </div>
    </div>
  );
}

export default Notes;
