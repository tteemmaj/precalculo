import "../styles/ModuloI.css";
import Titles from "../components/Titles.jsx";
import Parrafos from "../components/Parrafos.jsx";
import Videos from "../components/Videos.jsx";
import Notas from "../components/Notes.jsx";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import SideBarModIII from "../components/SideBarModIII.jsx";

function ModuloIII() {
  return (
    <>
      <div className="main-container">
        <div className="barDiv">
          <SideBarModIII />
        </div>
        <div className="contenidosDiv">
          {/*  2.1 _______________________________________________________________________________________ */}
          <Titles titulo="¿QUÉ ES UNA FUNCIÓN? " idTitulo="que-es-funcion" />
          <p>
            Una función es una regla. Para hablar de una función, es necesario
            darle un nombre. Usaremos letras como f, g, h,… para representar
            funciones. Por ejemplo, podemos usar la letra f para representar una
            regla como sigue: “f” es la regla “elevar al cuadrado el número”
          </p>
          <b>Evaluación de una función</b>
          <p>
            En la definición de una función, la variable independiente x
            desempeña el papel de un símbolo o dígito.
          </p>
          <p>
            Sea f(x)=3x 2 +x−5. Evalúe cada valor de la función. (a) f(−2) (b)
            f(0) (c) f(4) (d) f(1/2). Para evaluar f en un número, sustituimos
            el número por x en la definición de f.
          </p>
          <Notas
            tituloFormula="Ejemplo:"
            formulasMath={`$$f(x) = 3x^2 + x-5$$`}
          />
          <b>Dominio de una función</b>
          <p>
            Recuerde que el dominio de una función es el conjunto de todas las
            entradas para la función. El dominio de una función puede indicarse
            explícitamente. Por ejemplo, si escribimos: f(x)=x^2 0 ≤ x ≤ 5{" "}
          </p>
          <Notas
            tituloFormula="Ejemplo:"
            formulasMath="$$F(x) = \sqrt{\frac{1}{x-4}} \quad \text{y} \quad g(x) = \sqrt{x}$$"
          />
          <b>Cuatro formas de representar una función</b>
          <Notas
            tituloFormula="Formas:"
            formulasMath={`•	verbalmente (por descripción en palabras)
•	algebraicamente (por una fórmula explícita)
•	visualmente (por una gráfica)
•	numéricamente (por una tabla de valores)`}
          />
          <Videos linkVideos="https://youtu.be/UE9gWYYlY1Q" />
          {/*  2.2 _______________________________________________________________________________________ */}
          <Titles titulo="Graficas de funciones" idTitulo="grafica-funciones" />
          <p>
            Para graficar una función f, localizamos los puntos (x, f (x)) en un
            plano de coordenadas. En otras palabras, localizamos los puntos (x,
            y) cuya coordenada x es una entrada y cuya coordenada y es la
            correspondiente salida de la función.
          </p>
          <b>Función Lineal </b>{" "}
          <p>
            {" "}
            Es de la forma f(x)=mx+b. Su gráfica es una línea recta donde: m es
            la pendiente (que indica la inclinación). Y b es el punto de
            intersección con el eje y.
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <b>1. Función Lineal General: </b>
            <Notas formulasMath={" f(x) = mx + b "} />
            <b>2. Función Constante (Caso Especial de la Lineal): </b>
            <Notas formulasMath={" f(x) = b"} />
            <b>3. Ecuación de la Gráfica de la Función Lineal: </b>
            <Notas formulasMath={" y = mx + b"} />
          </p>
          <Titles
            titulo="Graficas de funciones por tramos"
            idTitulo="grafica-tramos"
          />
          <p>
            Una funcion definida por tramos es aquella que está determina por
            diferentes formulas aplicadas a dsititas partes de su dominio, como
            resultado su grafica se compone de tramos separados, cada uno
            correspondiente a la formula aplicada en este intervalo
            especifico{" "}
          </p>
          <Titles
            titulo="Ecuaciones que definen funciones"
            idTitulo="ecuaciones-definen-funciones"
          />
          <p>
            {" "}
            Cualquier ecuación con las variables X, y, Y defi ne una relación
            entre estas variables. Por ejemplo, la ecuación
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax inline>{"\\( y^2 - x^2 = 0 \\)"}</MathJax>
            </MathJaxContext>
          </p>
          <p>
            define una relación entre Y y X. ¿Esta ecuación define a y como
            función de x? Para saberlo, despejamos Y y obtenemos
          </p>
          <Videos linkVideos="https://youtube.com/shorts/eMeIjabBtY4?si=b0n99jgH7OWWfHv0" />
          {/*  2.5 _______________________________________________________________________________________ */}
          <Titles
            titulo="Transformación de funciones"
            idTitulo="transformacion-funciones"
          />
          <p>
            La transformación de funciones se refiere a cambiar la forma o la
            posición de la gráfica de una función original, moviéndola,
            estirándola, comprimiéndola o reflejándola.{" "}
          </p>
          <Titles
            titulo="Desplazamiento vertical"
            idTitulo="desplazamiento-vertical"
          />
          <p>
            Sumar una constante a una función desplaza verticalmente su gráfica;
            hacia arriba si la constante es positiva y hacia abajo si es
            negativa.
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Para graficar } y = f(x) + c, \\text{ desplace la gráfica de } y = f(x) \\ c \\text{ unidades hacia arriba.} $$`}</MathJax>
            </MathJaxContext>
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Para graficar } y = f(x) - c, \\text{ desplace la gráfica de } y = f(x) \\ c \\text{ unidades hacia abajo.} $$`}</MathJax>
            </MathJaxContext>
          </p>
          <Titles
            titulo="Desplazamiento horizontal"
            idTitulo="desplazamiento-horizontal"
          />
          <p>
            El desplazamiento horizontal de una gráfica de función, como la de
            y=f(x), funciona de forma inversa a lo que se espera del signo. Si
            se suma una constante positiva c a la variable x dentro de la
            función, es decir, y=f(x+c), la gráfica original se mueve c unidades
            hacia la izquierda. Por el contrario, si se resta esa misma
            constante positiva c a x, resultando en y=f(x−c), la gráfica se
            desplaza c unidades hacia la derecha. En esencia, el cambio ocurre
            dentro de los paréntesis y produce un movimiento opuesto al signo.
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ y = f(x + c) \\quad \\quad y = f(x - c) \\quad (c > 0) $$`}</MathJax>
            </MathJaxContext>
          </p>
          <b style={{ textAlign: "center" }}> Ejemplo: </b>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Para graficar } y = f(x - c), \\text{ desplace la gráfica de } y = f(x) \\ c \\text{ unidades a la derecha.} $$`}</MathJax>
            </MathJaxContext>
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Para graficar } y = f(x + c), \\text{ desplace la gráfica de } y = f(x) \\ c \\text{ unidades a la izquierda.} $$`}</MathJax>
            </MathJaxContext>
          </p>
          <Titles
            titulo="Gráficas que se reflejan"
            idTitulo="graficas-reflejan"
          />
          <p>
            Este pasaje describe cómo las reflexiones transforman una gráfica
            base, y=f(x): la gráfica de y=−f(x) se obtiene al tomar el negativo
            de cada coordenada y, lo que resulta en una reflexión sobre el eje x
            (un volteo vertical). Por otro lado, la gráfica de y=f(−x) se
            obtiene al hacer que el valor de la función en x sea igual a su
            valor en −x, lo que produce una reflexión sobre el eje y (un volteo
            horizontal). En resumen, negar la función completa refleja sobre el
            eje x, y negar solo la variable x dentro de la función refleja sobre
            el eje y.
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Para graficar } y = -f(x), \\text{ refleje la gráfica de } y = f(x) \\text{ en el eje } x. $$`}</MathJax>
            </MathJaxContext>
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Para graficar } y = f(-x), \\text{ refleje la gráfica de } y = f(x) \\text{ en el eje } y. $$`}</MathJax>
            </MathJaxContext>
          </p>
          <Titles
            titulo="Alargamiento y contracción verticales de gráficas"
            idTitulo="alargamiento-contraccion"
          />
          <p>
            El alargamiento y contracción verticales de una gráfica base y=f(x)
            se producen al multiplicar toda la función por una constante c,
            resultando en y=cf(x). Esta operación tiene el efecto de multiplicar
            cada coordenada y de la gráfica original por ese factor c, lo que
            causa que la figura se alargue o se contraiga verticalmente.
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Si } c > 1, \\text{ alargue la gráfica de } y = f(x) \\text{ verticalmente en un factor de } c. $$`}</MathJax>
            </MathJaxContext>
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Si } 0 < c < 1, \\text{ contraiga la gráfica de } y = f(x) \\text{ verticalmente en un factor de } c. $$`}</MathJax>
            </MathJaxContext>
          </p>
          <Titles
            titulo="Contracción y alargamiento horizontales de gráficas"
            idTitulo="alargamiento-contraccion-horizontal"
          />
          <p>
            Todas las transformaciones de una gráfica base y=f(x) siguen dos
            reglas de posición: los cambios internos a la función (que afectan
            solo a la x) son siempre horizontales e inversos a lo que el signo o
            el factor sugieren, mientras que los cambios externos (que afectan a
            toda la f(x)) son verticales y directos. Por ejemplo, el
            desplazamiento f(x menos c) mueve la gráfica a la derecha, y el
            alargamiento f(c por x) causa una contracción horizontal por un
            factor de uno sobre c. En contraste, el desplazamiento f(x) m a ˊ
            s c mueve la gráfica hacia arriba, y el alargamiento c por f(x)
            causa un alargamiento vertical por un factor de c. Finalmente, las
            reflexiones ocurren cuando se multiplica por menos uno: si el menos
            está afuera (menos f(x)), la reflexión es sobre el eje x, y si está
            adentro (f(menos x)), la reflexión es sobre el eje y.
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Si } c > 1, \\text{ contraiga la gráfica de } y = f(x) \\text{ horizontalmente en un factor de } 1/c. $$`}</MathJax>
            </MathJaxContext>
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ \\text{Si } 0 < c < 1, \\text{ alargue la gráfica de } y = f(x) \\text{ horizontalmente en un factor de } 1/c. $$`}</MathJax>
            </MathJaxContext>
          </p>
          <Titles
            titulo="Funciones pares e impares"
            idTitulo="funciones-pares-impares"
          />
          <p>
            Una función f es par si satisface que f(menos x) es igual a f(x)
            para todos los valores de x en su dominio. Por ejemplo, la función
            f(x)=x a la dos es par. La gráfica de una función par es simétrica
            respecto al eje y, lo que significa que, si conocemos la gráfica
            para los valores positivos de x, podemos obtener la gráfica completa
            simplemente reflejando esa parte sobre el eje y. Por otro lado, una
            función f es impar si satisface que f(menos x) es igual a menos f(x)
            para todos los valores de x en su dominio. Un ejemplo es la función
            f(x)=x al cubo. La gráfica de una función impar es simétrica
            alrededor del origen, lo que implica que podemos obtener toda la
            gráfica al girar la parte conocida (para x positivos) ciento ochenta
            grados alrededor del origen, lo que es equivalente a reflejarla
            primero sobre el eje x y luego sobre el eje y.
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ f \\text{ es } \\mathbf{par} \\text{ si } f(-x) = f(x) \\text{ para toda } x \\text{ en el dominio de } f. $$`}</MathJax>
            </MathJaxContext>
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`$$ f \\text{ es } \\mathbf{impar} \\text{ si } f(-x) = -f(x) \\text{ para toda } x \\text{ en el dominio de } f. $$`}</MathJax>
            </MathJaxContext>
          </p>
          <Videos linkVideos="https://youtu.be/em2JjUu4mdg" />
          {/*  6.2 _______________________________________________________________________________________ */}
          <Titles
            titulo="Trigonometría de triángulos rectángulos"
            idTitulo="trigonometria-triangulos"
          />
          <Parrafos parrafo="La trigonometría de triángulos rectángulos estudia las relaciones entre los lados y ángulos de un triángulo con un ángulo recto (90°). Se utiliza para resolver problemas geométricos y modelar situaciones del mundo real." />
          <Titles
            titulo="Relaciones trigonométricas"
            idTitulo="relaciones-trigonometricas"
          />
          <b>Definición</b>
          <Parrafos parrafo="Son razones que relacionan los lados de un triángulo rectángulo respecto a un ángulo agudo. Las principales son seno, coseno y tangente." />
          <MathJaxContext>
            <MathJax>
              {
                "\\[ \\sin(\\theta) = \\frac{\\text{cateto opuesto}}{\\text{hipotenusa}} \\]"
              }
            </MathJax>
          </MathJaxContext>
          <MathJaxContext>
            <MathJax>
              {
                "\\[ \\cos(\\theta) = \\frac{\\text{cateto adyacente}}{\\text{hipotenusa}} \\]"
              }
            </MathJax>
          </MathJaxContext>
          <MathJaxContext>
            <MathJax>
              {
                "\\[ \\tan(\\theta) = \\frac{\\text{cateto opuesto}}{\\text{cateto adyacente}} \\]"
              }
            </MathJax>
          </MathJaxContext>
          <Titles
            titulo="Triángulos especiales"
            idTitulo="triangulos-especiales"
          />
          <b>Triángulo 45°-45°-90°</b>
          <Parrafos parrafo="Es un triángulo isósceles cuyos catetos son iguales y la hipotenusa mide \\( \\sqrt{2} \\) veces uno de los catetos." />
          <MathJaxContext>
            <MathJax>{"\\[ Lados: \\quad 1 : 1 : \\sqrt{2} \\]"}</MathJax>
          </MathJaxContext>
          <b>Triángulo 30°-60°-90°</b>
          <Parrafos parrafo="Tiene lados en razón 1 : \\( \\sqrt{3} \\) : 2. Se usa para obtener razones trigonométricas exactas." />
          <MathJaxContext>
            <MathJax>{"\\[ Lados: \\quad 1 : \\sqrt{3} : 2 \\]"}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Aplicaciones de la trigonometría"
            idTitulo="aplicaciones-trigonometria"
          />
          <b>Resolución de triángulos</b>
          <Parrafos parrafo="Usando un ángulo y un lado conocidos, se pueden calcular los demás lados o ángulos mediante funciones trigonométricas y el teorema de Pitágoras." />
          <b>Ángulos de elevación y depresión</b>
          <Parrafos parrafo="El ángulo de elevación se mide hacia arriba desde una línea horizontal; el de depresión, hacia abajo. Se usan en contextos como navegación, aviación y construcción." />
          <b>Modelado de situaciones reales</b>
          <Parrafos parrafo="Las razones trigonométricas permiten representar fenómenos reales, como la altura de un objeto, la pendiente de una rampa, o la distancia entre dos puntos." />
          <Videos linkVideos="https://youtu.be/eQNixZah68o" />
          {/*  6.3 _______________________________________________________________________________________ */}
          <Titles
            titulo="Funciones Trigonométricas de Ángulos"
            idTitulo="funciones-angulos"
          />
          <p>
            Las funciones trigonométricas (seno, coseno, tangente, cotangente,
            secante y cosecante) son herramientas fundamentales para relacionar
            los ángulos de un triángulo con las longitudes de sus lados,
            especialmente en triángulos rectángulos. Estas funciones se definen
            en el contexto de un triángulo rectángulo o en el círculo unitario.
          </p>
          <b>Definiciones en un triángulo rectángulo:</b>
          <p>
            En un triángulo rectángulo con un ángulo agudo θ, los lados se
            denominan cateto opuesto (opuesto a θ), cateto adyacente (adyacente
            a θ) e hipotenusa (el lado opuesto al ángulo recto). Las funciones
            trigonométricas se definen como:
          </p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$
              \\sin(\\theta) = \\frac{\\text{cateto opuesto}}{\\text{hipotenusa}}, \\quad
              \\cos(\\theta) = \\frac{\\text{cateto adyacente}}{\\text{hipotenusa}}, \\quad
              \\tan(\\theta) = \\frac{\\text{cateto opuesto}}{\\text{cateto adyacente}}
              $$`}
            </MathJax>
          </MathJaxContext>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$
              \\csc(\\theta) = \\frac{\\text{hipotenusa}}{\\text{cateto opuesto}}, \\quad
              \\sec(\\theta) = \\frac{\\text{hipotenusa}}{\\text{cateto adyacente}}, \\quad
              \\cot(\\theta) = \\frac{\\text{cateto adyacente}}{\\text{cateto opuesto}}
              $$`}
            </MathJax>
          </MathJaxContext>
          <b>Ejemplo 1: Cálculo en un triángulo rectángulo</b>
          <p>
            En un triángulo rectángulo, el cateto opuesto a un ángulo θ mide 3
            cm, el cateto adyacente mide 4 cm y la hipotenusa mide 5 cm. Calcula
            las funciones trigonométricas de θ:
          </p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$
              \\sin(\\theta) = \\frac{3}{5}, \\quad \\cos(\\theta) = \\frac{4}{5}, \\quad \\tan(\\theta) = \\frac{3}{4}
              $$`}
            </MathJax>
          </MathJaxContext>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$
              \\csc(\\theta) = \\frac{5}{3}, \\quad \\sec(\\theta) = \\frac{5}{4}, \\quad \\cot(\\theta) = \\frac{4}{3}
              $$`}
            </MathJax>
          </MathJaxContext>
          <Notas tituloFormula="📘 Propiedades fundamentales" />
          <b>1️⃣ Identidad pitagórica:</b>
          <Notas
            formulasMath={`$$ \\sin^2(\\theta) + \\cos^2(\\theta) = 1 $$`}
          />
          <b>2️⃣ Relaciones entre funciones:</b>
          <Notas
            formulasMath={`$$ \\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}, \\quad \\cot(\\theta) = \\frac{1}{\\tan(\\theta)} $$`}
          />
          <h3>📘 Ejemplo: Funciones trigonométricas</h3>
          <Videos linkVideos="https://youtu.be/Cwhk39YxZEQ" />
          {/*  6.4 _______________________________________________________________________________________ */}
          <Titles
            titulo="Funciones Trigonométricas Inversas"
            idTitulo="funciones-inversas"
          />
          <p>
            Las funciones trigonométricas inversas (arcseno, arccoseno,
            arctangente, etc.) permiten encontrar el ángulo θ a partir de un
            valor dado de una función trigonométrica. Estas funciones son
            inversas de las funciones trigonométricas, pero tienen dominios
            restringidos para garantizar que sean funciones (es decir, que cada
            entrada tenga una única salida).
          </p>
          <b>Dominios y rangos:</b>
          <p>
            - <b>Arcseno (sin⁻¹):</b> Dominio: [-1, 1], Rango: [-π/2, π/2]
            <br />- <b>Arccoseno (cos⁻¹):</b> Dominio: [-1, 1], Rango: [0, π]
            <br />- <b>Arctangente (tan⁻¹):</b> Dominio: ℝ, Rango: (-π/2, π/2)
          </p>
          <b>Ejemplo 2: Uso de la función inversa</b>
          <p>Si sin(θ) = 0.5, encuentra θ. Usamos la función inversa:</p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$ \\theta = \\sin^{-1}(0.5) = \\frac{\\pi}{6} \\text{ radianes (o 30°)} $$`}
            </MathJax>
          </MathJaxContext>
          <p>
            Nota: La solución está en el rango [-π/2, π/2], que es el rango de
            sin⁻¹.
          </p>
          <p
            style={{
              fontSize: "1.3em",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Propiedades de funciones inversas
          </p>
          <br />
          <p style={{ fontWeight: "bold" }}>1️⃣ Propiedad inversa:</p>
          <Notas
            formulasMath={`$$ \\sin(\\sin^{-1}(x)) = x \\text{ para } x \\in [-1, 1], \\quad \\sin^{-1}(\\sin(\\theta)) = \\theta \\text{ para } \\theta \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}] $$`}
          />
          <h3>📘 Ejemplo: Funciones trigonométricas inversas</h3>
          <Videos linkVideos="https://youtu.be/aLPPzlc0rsg" />
          <Titles
            titulo="Triángulos Rectángulos y Trigonometría"
            idTitulo="triangulos-rectangulos-trigonometria"
          />
          <p>
            Los triángulos rectángulos son fundamentales en trigonometría porque
            las funciones trigonométricas se derivan directamente de sus
            proporciones. El teorema de Pitágoras relaciona los lados de un
            triángulo rectángulo:
          </p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$ a^2 + b^2 = c^2 $$`}
            </MathJax>
          </MathJaxContext>
          <p>Donde \(a\) y \(b\) son los catetos, y \(c\) es la hipotenusa.</p>
          <b>Ejemplo 3: Resolución de un triángulo rectángulo</b>
          <p>
            Un triángulo rectángulo tiene un cateto de 6 cm y una hipotenusa de
            10 cm. Encuentra el otro cateto y los ángulos agudos.
          </p>
          <p>
            <b>Paso 1: Encontrar el cateto faltante</b>
            <br />
            Usamos el teorema de Pitágoras:
          </p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$ 6^2 + b^2 = 10^2 $$`}
            </MathJax>
          </MathJaxContext>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$ 36 + b^2 = 100 \\implies b^2 = 64 \\implies b = 8 \\text{ cm} $$`}
            </MathJax>
          </MathJaxContext>
          <p>
            <b>Paso 2: Encontrar un ángulo agudo</b>
            <br />
            Usamos el coseno para el ángulo θ opuesto al cateto de 6 cm:
          </p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$ \\cos(\\theta) = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{8}{10} = 0.8 $$`}
            </MathJax>
          </MathJaxContext>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$ \\theta = \\cos^{-1}(0.8) \\approx 36.87^\\circ $$`}
            </MathJax>
          </MathJaxContext>
          <p>
            <b>Paso 3: Encontrar el otro ángulo</b>
            <br />
            La suma de los ángulos agudos en un triángulo rectángulo es 90°:
          </p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$ 90^\\circ - 36.87^\\circ \\approx 53.13^\\circ $$`}
            </MathJax>
          </MathJaxContext>
          <b>Aplicación práctica:</b>
          <p>
            La trigonometría en triángulos rectángulos se usa en campos como la
            física, la ingeniería y la navegación. Por ejemplo, para calcular
            alturas de edificios usando la sombra proyectada y el ángulo de
            elevación del sol.
          </p>
          <b>Ejemplo 4: Altura de un edificio</b>
          <p>
            Desde un punto en el suelo, el ángulo de elevación hacia la cima de
            un edificio es 30°, y la distancia horizontal al edificio es 50 m.
            Calcula la altura del edificio (h).
          </p>
          <p>Usamos la tangente:</p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$ \\tan(30^\\circ) = \\frac{h}{50} $$`}
            </MathJax>
          </MathJaxContext>
          <p>
            Sabemos que :
            <MathJaxContext>
              <MathJax style={{ fontSize: "1.1em" }}>
                {`$$ ( \\tan(30^\\circ) = \\frac{\\sqrt{3}}{3} \\approx 0.577 ) $$`}
              </MathJax>
            </MathJaxContext>
          </p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>
              {`$$ 0.577 = \\frac{h}{50} \\implies h = 50 \\cdot 0.577 \\approx 28.85 \\text{ m} $$`}
            </MathJax>
          </MathJaxContext>
          {/*  6.5 _______________________________________________________________________________________ */}
          <hr style={{ borderTop: "1px solid #ccc", margin: "1em 0" }} />
          <Titles titulo="Ley de Senos" idTitulo="ley-senos" />
          <p>
            La Ley de Senos establece que en cualquier triángulo la relación
            entre la longitud de un lado y el seno del ángulo opuesto es
            constante. Esto significa que:
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`\\( \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} \\)`}</MathJax>
            </MathJaxContext>
          </p>
          <p>
            Donde:
            <ul>
              <li>
                \\(a, b, c\\) son las longitudes de los lados del triángulo.
              </li>
              <li>
                \\(A, B, C\\) son los ángulos opuestos a esos lados
                respectivamente.
              </li>
            </ul>
          </p>
          <p>
            Esta ley es muy útil para resolver triángulos que no son
            rectángulos, especialmente cuando:
          </p>
          <ul>
            <li>Conocemos dos ángulos y un lado (AAS o ASA).</li>
            <li>Conocemos dos lados y un ángulo no comprendido (SSA).</li>
          </ul>
          <b>Ejemplo paso a paso:</b>
          <p>
            Supongamos que tenemos un triángulo donde \\( A = 40^\\circ \\), \\(
            a = 7 \\) y \\( b = 10 \\). Queremos calcular \\( B \\).
          </p>
          <Notas
            formulasMath={`\\( \\frac{7}{\\sin 40^\\circ} = \\frac{10}{\\sin B} \\)`}
          />
          <p>Primero, despejamos \\( \\sin B \\):</p>
          <Notas
            formulasMath={`\\( \\sin B = \\frac{10 \\cdot \\sin 40^\\circ}{7} \\)`}
          />
          <p>
            Luego calculamos el valor numérico y finalmente encontramos \\( B
            \\) usando la función inversa seno.
          </p>
          <p style={{ fontWeight: "bold" }}>📘 Consejo:</p>
          <p>
            Siempre verifica que los ángulos sumen 180° y que los resultados
            tengan sentido según la geometría del triángulo.
          </p>
          {/*  6.6 _______________________________________________________________________________________ */}
          <hr style={{ borderTop: "1px solid #ccc", margin: "1em 0" }} />
          <Titles titulo="Ley de Cosenos" idTitulo="ley-cosenos" />
          <p>
            La Ley de Cosenos permite relacionar los lados y los ángulos de
            cualquier triángulo, siendo especialmente útil cuando:
          </p>
          <ul>
            <li>
              Conocemos dos lados y el ángulo comprendido (SAS) y queremos
              calcular el tercer lado.
            </li>
            <li>
              Conocemos los tres lados y queremos calcular un ángulo (SSS).
            </li>
          </ul>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`\\( c^2 = a^2 + b^2 - 2ab \\cdot \\cos C \\)`}</MathJax>
            </MathJaxContext>
          </p>
          <p>También podemos despejar el ángulo si conocemos los tres lados:</p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`\\( \\cos C = \\frac{a^2 + b^2 - c^2}{2ab} \\)`}</MathJax>
            </MathJaxContext>
          </p>
          <b>Ejemplo paso a paso:</b>
          <p>
            Supongamos un triángulo con lados \\( a = 3 \\), \\( b = 4 \\) y
            queremos calcular \\( c \\) si el ángulo \\( C = 60^\\circ \\).
          </p>
          <Notas
            formulasMath={`\\( c^2 = 3^2 + 4^2 - 2 \\cdot 3 \\cdot 4 \\cdot \\cos 60^\\circ \\)`}
          />
          <p>Calculamos paso a paso:</p>
          <Notas
            formulasMath={`\\( c^2 = 9 + 16 - 24 \\cdot 0.5 = 25 - 12 = 13 \\)`}
          />
          <Notas formulasMath={`\\( c = \\sqrt{13} \\approx 3.61 \\)`} />
          <p style={{ fontWeight: "bold" }}>📘 Consejo:</p>
          <p>
            Siempre verifica que los resultados tengan sentido geométrico y
            recuerda que la Ley de Cosenos generaliza el Teorema de Pitágoras
            cuando el ángulo es de 90°.
          </p>
          <Videos linkVideos="https://youtu.be/-GxlWaGfafk" />
        </div>
      </div>
    </>
  );
}

export default ModuloIII;
