import "../styles/Titles.css";
import arrowTitle from "../assets/arrowTitle.svg";
function Titles(props) {
  return (
    <div className="divTitles">
      <img src={arrowTitle} />
      <h1 id={props.idTitulo}> {props.titulo} </h1>
    </div>
  );
}

export default Titles;
