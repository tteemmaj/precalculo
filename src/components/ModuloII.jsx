import "../styles/ModuloI.css";
import Titles from "../components/Titles.jsx";
import Parrafos from "../components/Parrafos.jsx";
import Videos from "../components/Videos.jsx";
import Notas from "../components/Notes.jsx";
import SideBarModII from "../components/sideBarModII.jsx";
import { MathJaxContext, MathJax } from "better-react-mathjax";

function ModuloI() {
  return (
    <>
      <div className="main-container">
        <div className="barDiv">
          <SideBarModII />
        </div>
        <div className="contenidosDiv">
          {/*  1.7 _______________________________________________________________________________________ */}
          <Titles titulo="Desigualdades" idTitulo="desigualdades" />
          <p>
            En álgebra, una desigualdad es una expresión matemática que compara
            dos cantidades usando símbolos de comparación, en lugar del signo
            igual. Mientras que una ecuación establece que dos expresiones son
            iguales, una desigualdad muestra que una cantidad es mayor, menor,
            mayor o igual, o menor o igual que otra.
          </p>
          <b>Regla importante: </b>{" "}
          <p>
            {" "}
            Al multiplicar o dividir una desigualdad por un número negativo, el
            signo se invierte:
          </p>
          <p>
            <b></b>
            <Notas formulasMath={" x < -2"} />
            <b>Suma: </b>{" "}
            <p>
              Sumar la misma cantidad a cada lado de una desigualdad, da una
              desigualdad equivalente.
            </p>
            <Notas formulasMath={" 3 < 7 → 3 + 5 < 7 + 5 → 8 < 12"} />
            <b>Resta:</b>{" "}
            <p>
              Restar la misma cantidad de cada lado de una desigualdad dauna
              desigualdad equivalente.
            </p>
            <Notas formulasMath={" 10 > 4 → 10 - 3 > 4 - 3 → 7 > 1 "} />
            <b>Multiplicación</b>{" "}
            <p>
              Restar la misma cantidad de cada lado de una desigualdad dauna
              desigualdad equivalente.
            </p>
            <Notas formulasMath={" 3 < 6 → 3 * 2 < 6 * 2 → 6 < 12 "} />
          </p>
          <Titles
            titulo="Solución de desigualdades lineales"
            idTitulo="solucion-lineales"
          />
          <p>
            Una desigualdad es lineal si cada término es constante o un múltiplo
            de la variable. Parar resolver una desigualdad lineal, aislamos la
            variable en un lado del signo de desigualdad.
          </p>
          <Notas formulasMath={" 2x + 5 < 9 → 2x < 4 → x < 2 "} />
          <Titles
            titulo="Solución de desigualdades no lineales"
            idTitulo="solucion-no-lineales"
          />
          <p>
            {" "}
            Para resolver desigualdades que contengan cuadrados y otras
            potencias de la variable, usamos factorización, junto con el
            principio siguiente
          </p>
          <Notas
            formulasMath={" x^2 - 5x + 6 > 0 → (x-2)(x-3) > 0 → x < 2 o x > 3"}
          />
          {/*  1.8 _______________________________________________________________________________________ */}
          <Titles
            titulo="Geometría de coordenadas "
            idTitulo="geometria-coordenadas"
          />
          <p>
            El plano coordenado es el vínculo entre el álgebra y la geometría.
            En el plano coordenado podemos trazar gráficas de ecuaciones
            algebraicas. Las gráficas, a su vez, nos permiten “ver” la relación
            entre las variables de la ecuación. En esta sección estudiamos el
            plano coordenado.
          </p>
          <b>Fórmulas para distancia y punto medio:</b>
          <p>
            A continuación encontramos una fórmula para la distancia d(A, B)
            entre dos puntos A(x1 , y1) y B(x2 , y2 ) del plano.
          </p>
          <Notas
            tituloFormula="Fórmula para distancias: "
            formulasMath={
              " $$ d(A, B) = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$ "
            }
          />
          <b>Formula del punto medio</b>
          <p>
            El punto medio del segmento de recta de A(x1, y1) al punto B(x2,y2)
            es{" "}
          </p>
          <Notas
            tituloFormula="Fórmula para del punto medio: "
            formulasMath={
              " $$ \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right) $$ "
            }
          />
          <b>Gráficas de ecuaciones con dos variables</b>
          <p>
            Una ecuación con dos variables, por ejemplo y =x^2 +1, expresa una
            relación entre dos cantidades. Un punto (x, y) satisface la ecuación
            si hace verdadera a la ecuación cuando los valores para x y y son
            sustituidos en la ecuación.
          </p>
          <b>Puntos de intersección</b>
          <p>
            Las coordenadas x de los puntos donde una gráfica interseca al eje x
            reciben el nombre de puntos de intersección x de la gráfica y se
            obtienen al hacer y = 0 en la ecuación de la gráfica. Las
            coordenadas y de los puntos donde una gráfica interseca al eje y se
            denominan puntos de intersección y de la gráfica y se obtienen al
            hacer x = 0 en la ecuación de la gráfica.
          </p>
          <b>Circunferencias</b>
          <p>
            Hasta este punto, hemos estudiado cómo hallar la gráfica de una
            ecuación en x y y. El problema inverso es hallar una ecuación de una
            gráfica, es decir, una ecuación que represente una curva determinada
            en el plano xy.
          </p>
          <Notas
            tituloFormula="Ecuación de una circunferencia: "
            formulasMath={" $$ (x - h)^2 + (y - k)^2 = r^2 $$ "}
          />
          <Videos linkVideos="https://youtu.be/htqy_UCWZTk" />
          {/*  1.10 _______________________________________________________________________________________ */}
          <Titles titulo="La recta" idTitulo="la-recta" />
          <Parrafos parrafo="Una recta es una figura geométrica que se extiende infinitamente en ambas direcciones y representa una relación lineal entre dos variables. En el plano cartesiano, se representa mediante una ecuación de primer grado." />
          <Titles titulo="Pendiente de una recta" idTitulo="pendiente-recta" />
          <b>Definición</b>
          <Parrafos parrafo="La pendiente es un número real que indica la inclinación de una recta. Representa la razón de cambio entre las variables y se calcula como la variación de 'y' dividida por la variación de 'x'." />
          <MathJaxContext>
            <MathJax>{"\\[ m = \\frac{y_2 - y_1}{x_2 - x_1} \\]"}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Forma punto-pendiente"
            idTitulo="forma-punto-pendiente"
          />
          <b>Definición</b>
          <Parrafos parrafo="Es una forma de la ecuación de la recta que usa un punto conocido de la recta y su pendiente." />
          <MathJaxContext>
            <MathJax>{"\\[ y - y_1 = m(x - x_1) \\]"}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Forma pendiente-intersección"
            idTitulo="forma-pendiente-interseccion"
          />
          <b>Definición</b>
          <Parrafos parrafo="Es la forma más común para representar una recta. Muestra explícitamente la pendiente y el punto de intersección con el eje y." />
          <MathJaxContext>
            <MathJax>{"\\[ y = mx + b \\]"}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Rectas verticales y horizontales"
            idTitulo="rectas-verticales-horizontales"
          />
          <b>Definición</b>
          <Parrafos parrafo="Las rectas horizontales tienen pendiente cero y se representan como y = c. Las rectas verticales tienen pendiente indefinida y se representan como x = c." />
          <Titles
            titulo="Ecuación general de la recta"
            idTitulo="ecuacion-general"
          />
          <b>Definición</b>
          <Parrafos parrafo="Es una forma general de expresar cualquier recta en el plano. Se puede transformar a otras formas para analizar su pendiente e intersección." />
          <MathJaxContext>
            <MathJax>{"\\[ Ax + By + C = 0 \\]"}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Rectas paralelas y perpendiculares"
            idTitulo="rectas-paralelas-perpendiculares"
          />
          <b>Definición</b>
          <Parrafos parrafo="Dos rectas son paralelas si tienen la misma pendiente. Son perpendiculares si sus pendientes son recíprocas negativas, es decir, su producto es igual a -1." />
          <MathJaxContext>
            <MathJax>{"\\[ m_1 = m_2 \\quad \\text{(paralelas)} \\]"}</MathJax>
          </MathJaxContext>
          <MathJaxContext>
            <MathJax>
              {"\\[ m_1 \\cdot m_2 = -1 \\quad \\text{(perpendiculares)} \\]"}
            </MathJax>
          </MathJaxContext>
          <Titles
            titulo="Modelado con ecuaciones lineales"
            idTitulo="modelado-lineales"
          />
          <b>Definición</b>
          <Parrafos parrafo="El modelado con ecuaciones lineales consiste en usar rectas para representar situaciones reales. La pendiente indica la rapidez de cambio entre las variables, lo cual es útil para hacer predicciones." />
          <Videos linkVideos="https://youtu.be/9LXxplAT7cc" />
        </div>
      </div>
    </>
  );
}

export default ModuloI;
