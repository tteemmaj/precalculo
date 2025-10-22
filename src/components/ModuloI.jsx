import SideBar from "../components/SideBar.jsx";
import "../styles/ModuloI.css";
import Titles from "../components/Titles.jsx";
import Parrafos from "../components/Parrafos.jsx";
import Images from "../components/Images.jsx";
import Videos from "../components/Videos.jsx";
import Notas from "../components/Notes.jsx";
import { MathJaxContext, MathJax } from "better-react-mathjax";





function ModuloI() {

  return (
    <>
      <div className="main-container">
        <div className="barDiv">
          <SideBar />
        </div>
        <div className="contenidosDiv">
          {/*  1.1 _______________________________________________________________________________________ */}
          <Titles titulo="Números Reales" idTitulo="numeros-reales" />
          <p>Los tipos números que conforman el sistema de números reales:</p>
          <b>Números Naturales: </b>{" "}
          <p style={{ textAlign: "center" }}>1, 2, 3, 4, ...</p>
          <b>Enteros: </b>{" "}
          <p style={{ textAlign: "center" }}>
            ..., -3, -2, -1, 0, 1, 2, 3, 4, ...
          </p>
          <b>Números Racionales: </b>{" "}
          <p>
            {" "}
            Los Números racionales se construyen al tomar razones de enteros:
          </p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`\\( r = \\frac{m}{n} \\) `}</MathJax>
            </MathJaxContext>
          </p>
          <p>Donde m y n no son enteros y n no es igual a 0</p>
          <b>Números Irracionales:</b>
          <p>
            Números que no se pueden expresar como una razón entre enteros.
            Ejemplos:
          </p>
          <p style={{ fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>
                {
                  "\\[ \\sqrt{3}, \\quad \\sqrt{5}, \\quad \\sqrt[3]{2}, \\quad \\pi, \\quad \\frac{3}{\\pi^2} \\]"
                }
              </MathJax>
            </MathJaxContext>
          </p>
          <Titles
            titulo="Propiedades de los Númereso Reales"
            idTitulo="propiedades-reales"
          />
          <b>Propiedad Conmutativa:</b>
          <p>
            Todos sabemos que 2,3,3,2 y 5,7,7,5, y 5, 13,8,87,513, etc. En
            álgebra, expresamos todos estos hechos (un infinito de ellos) si
            escribimos a+b=b+a
          </p>
          <p>Cuando sumamos dos números, el orden de Adición no importa</p>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax inline>{"\\( a + b = b + a \\)"}</MathJax>
            </MathJaxContext>
          </p>
          <Notas
            tituloFormula="Propiedades Conmutativas"
            formulasMath="$$ a + b = b + a \quad \text{y} \quad ab = ba $$"
          />
          <Notas
            tituloFormula="Asociativas"
            formulasMath="$$(a + b) + c = a + (b + c)$$"
          />
          <Notas
            tituloFormula="Distributivas"
            formulasMath="$$a(b + c) = ab + ac \quad \text{y} \quad (b + c)a = ab + ac$$"
          />
          <h3>📘 Ejemplo: Propiedades de los Números Reales</h3>
          <Videos linkVideos="https://youtu.be/m1I4sFDMwzg" />
          <Titles
            titulo="Adición y sustracción"
            idTitulo="adicion-sustraccion"
          />
          <p>
            El número 0 es especial para la adición; recibe el nombre de
            identidad aditiva porque a+0= a para cualquier número real a. Todo
            número real a tiene un negativo, -a, que satisface a + (–a)=0. La
            sustracción es la operación que deshace a la adición; para sustraer
            un número de otro, simplemente sumamos el negativo de ese número.
            Por definición a–b =a+(–b)
          </p>
          <b>
            {" "}
            Para combinar números reales con números negativos, usamos las
            siguientes propiedades:
          </b>
          <br />
          <p
            style={{
              textAlign: "center",
              color: "#EA9216",
              fontWeight: "bolder",
              fontSize: "1.3em",
              marginTop: "10px",
            }}
          >
            Propiedades de los negativos
          </p>
          <br />
          <b>1️⃣ Multiplicación de signos iguales:</b>
          <Notas
            formulasMath={`$$ (-) \\times (-) = (+) \\quad \\text{=} \\quad (-3) \\times (-2) = +6 $$`}
          />
          <b>2️⃣ Multiplicación de signos diferentes:</b>
          <Notas
            formulasMath={`$$ (+) \\times (-) = (-) \\quad \\text{y} \\quad (-) \\times (+) = (-) \\quad \\text{ejemplo:} \\quad 4 \\times (-5) = -20 $$`}
          />
          <b> 3️⃣ División de signos iguales:</b>
          <Notas
            formulasMath={`$$ (-) \\div (-) = (+) \\quad \\text{Ejemplo: } \\quad (-12) \\div (-3) = 4 $$`}
          />
          <b>4️⃣ División de signos diferentes:</b>
          <Notas
            formulasMath={`$$ (+) \\div (-) = (-) \\quad \\text{y} \\quad (-) \\div (+) = (-) \\quad \\text{Ejemplo: } \\quad (-15) \\div 3 = -5 $$`}
          />
          <b>5️⃣ Suma de números con el mismo signo:</b>
          <p>Se suman los valores absolutos y se mantiene el signo.</p>
          <Notas formulasMath={`$$ (-4) + (-6) = -10 $$`} />
          <b>6️⃣ Suma de números con distinto signo:</b>
          <p>
            Se restan los valores absolutos y se coloca el signo del número
            mayor.
          </p>
          <Notas formulasMath={`$$ (-8) + (5) = -3 $$`} />
          <b>7️⃣ Resta de números negativos:</b>
          <p>Restar es sumar el opuesto.</p>
          <Notas formulasMath={`$$ (-7) - (-3) = (-7) + (3) = -4 $$`} />
          <h3> Ejemplo:Adición y sustracción</h3>
          <Videos linkVideos="https://youtube.com/shorts/UDVyBsnycrg" />
          <Titles
            titulo="Multiplicación y división"
            idTitulo="multiplicacion-division"
          />
          <p>
            El número 1 es especial para la multiplicación; recibe el nombre de
            identidad multiplicativa porque a 1 a para cualquier número real a.
            Todo número real a diferente de cero tiene un recíproco, 1/a, que
            satisface a (1/a) 1. La división es la operación que deshace la
            multiplicación; para dividir entre un número, multiplicamos por el
            recíproco de ese número. Si b 0, entonces, por defi nición,
          </p>
          <p>
            Escribimos a (1/b) simplemente como a/b. Nos referimos a a/b como el
            cociente entre a y b o como la fracción de a sobre b; a es el
            numerador y b es el denominador (o divisor). Para combinar números
            reales usando la operación de división, usamos las siguientes
            propiedades.
          </p>
          <b>
            1️⃣ Para multiplicar fracciones, multiplique numeradores y
            denominadores:
          </b>
          <Notas
            formulasMath={
              "$$ \\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15} $$"
            }
          />
          <b>
            {" "}
            2️⃣ Para dividir fracciones, multiplique por el recíproco del
            divisor:
          </b>
          <Notas
            formulasMath={
              "$$\\quad \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} \\quad \\quad \\frac{2}{3} \\div \\frac{5}{7} = \\frac{2}{3} \\cdot \\frac{7}{5} = \\frac{14}{15} $$"
            }
          />
          <b>
            {" "}
            3️⃣ Para sumar fracciones con el mismo denominador, sume los
            numeradores.
          </b>
          <Notas
            formulasMath={
              "$$ \\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c} \\quad \\quad \\frac{2}{5} + \\frac{7}{5} = \\frac{2+7}{5} = \\frac{9}{5} $$"
            }
          />
          <b>
            {" "}
            4️⃣ Para sumar fracciones con denominadores diferentes, encuentre un
            común denominador y a continuación sume los numeradores.
          </b>
          <Notas
            formulasMath={
              "$$ \\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd} \\quad \\quad \\frac{2}{5} + \\frac{3}{7} = \\frac{2\\cdot 7 + 3\\cdot 5}{35} = \\frac{29}{35} $$"
            }
          />
          <b>
            {" "}
            5️⃣ Cancele números que sean factores comunes en numerador y
            denominador.
          </b>
          <Notas
            formulasMath={
              "$$ \\frac{ac}{bc} = \\frac{a}{b} \\quad \\quad \\frac{2 \\cdot 5}{3 \\cdot 5} = \\frac{2}{3} $$"
            }
          />
          <b> 6️⃣ Multiplicación cruzada.</b>
          <Notas
            formulasMath={
              "$$ \\text{Si } \\frac{a}{b} = \\frac{c}{d}, \\text{ entonces } ad = bc \\quad \\frac{2}{3} = \\frac{6}{9}, \\text{ así que } 2\\cdot 9 = 3\\cdot 6 $$"
            }
          />
          <h3>Ejemplo: Multiplicación y división</h3>
          <Videos linkVideos="https://youtube.com/shorts/4Y5_-l8D_E0" />
          <Titles titulo="La recta real" idTitulo="recta-real" />
          <p>
            Los números reales se representan con puntos sobre una recta,
            llamada recta real o recta coordenada.El origen (O) corresponde al
            número 0.Los números positivos se ubican a la derecha del origen.
            Los números negativos se ubican a la izquierda del origen.Cada punto
            de la recta tiene un valor asociado llamado coordenada, y cada
            número real puede verse como un punto en la recta real.
          </p>
          <b>
            Si a&lt;b, significa que a está a la izquierda de b (o que b – a es
            positivo). Si b&gt;a, significa que b está a la derecha de a.
          </b>
          <Notas tituloFormula="Ejemplos" />
          <b> 1️⃣ Es menor que 7 </b>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`3 < 7 `}</MathJax>
            </MathJaxContext>
          </p>
          <b>2️⃣-2 Está a la izquierda de 5</b>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`-2 < 5 `}</MathJax>
            </MathJaxContext>
          </p>
          <b>3️⃣8 Es mayor que 1</b>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`8 > 1`}</MathJax>
            </MathJaxContext>
          </p>
          <b>4️⃣-3 es mayor o igual que -5</b>
          <p style={{ textAlign: "center", fontSize: "1.1em" }}>
            <MathJaxContext>
              <MathJax>{`-3 > -5`}</MathJax>
            </MathJaxContext>
          </p>
          <Titles
            titulo="Intervalos en la recta real"
            idTitulo="intervalos-recta-real"
          />
          <p>
            Un conjunto es una colección de objetos, llamados elementos. Si un
            elemento pertenece a un conjunto se escribe: a ∈ S Si un elemento no
            pertenece: b ∉ S
          </p>
          <b>
            Los conjuntos se pueden escribir: por extensión, listando los
            elementos dentro de llaves &lbrace; &rbrace;
          </b>
          <Notas tituloFormula="📗 Intervalos en la recta real" />
          <b>1️⃣Abiertos (sin incluir extremos)</b>
          <Notas formulasMath={"(a, b)   = { x ∈ ℝ | a < x < b }"} />
          <b>2️⃣Cerrados (incluye extremos)</b>
          <b>4️⃣Semiabiertos o semicerrados</b>
          <Notas
            formulasMath={
              "[a, b)   = { x ∈ ℝ | a ≤ x < b } (a, b]   = { x ∈ ℝ | a < x ≤ b }"
            }
          />
          <b>5️⃣Intervalos infinitos</b>
          <Notas formulasMath={" [ a, ∞)  = { x ∈ ℝ | x ≥ a }  "} />
          <h3>Ejemplo: Conjuntos e intervalos</h3>
          <Videos linkVideos="https://youtube.com/shorts/4Y5_-l8D_E0" />
          <Titles titulo="Valor absoluto" idTitulo="valor-absoluto" />
          <p>
            El valor absoluto de un número real a, representado como |a|, es la
            distancia entre a y 0 en la recta numérica. Esa distancia siempre es
            positiva o cero, por lo que se cumple:{" "}
          </p>
          <b>|a| ≥ 0 para todo número real a.</b>
          <br />
          <b>1️⃣El valor absoluto de un número siempre es positivo o cero: </b>
          <Notas formulasMath={"(|5| = 5 ) (|0| = 0)"} />
          <b>2️⃣ Propiedad multiplicativa: </b>
          <Notas formulasMath={"(|a × b| = |a| × |b|)"} />
          <b>3️⃣ Propiedad del cociente: </b>
          <Notas formulasMath={" (|a ÷ b| = |a| ÷ |b| (con b ≠ 0)"} />
          <h3>Ejemplo: Valor absoluto</h3>
          <Videos linkVideos="https://youtu.be/AwXIzQGXFSU" />
          {/*  1.2 _______________________________________________________________________________________ */}
          <Titles
            titulo="Exponentes y radicales"
            idTitulo="exponentes-radicales"
          />
          <p>
            Los exponentes y radicales son operaciones inversas entre sí. Un
            exponente indica cuántas veces se multiplica un número por sí mismo,
            mientras que un radical representa la raíz o el valor que, elevado a
            un exponente dado, produce el número original.
          </p>
          <Notas
            formulasMath={`$$ a^m \\cdot a^n = a^{m+n} \\quad \\text{y} \\quad \\sqrt[n]{a} = a^{1/n} $$`}
          />
          <p>
            Las propiedades de los exponentes permiten simplificar expresiones
            algebraicas y resolver ecuaciones más fácilmente. Los radicales, por
            otro lado, son útiles para expresar números no exactos y operaciones
            inversas a las potencias.
          </p>
          <br />
          <b>📘 Ejemplo de exponentes:</b>
          <p>
            Simplificar:{" "}
            <MathJaxContext>
              <MathJax inline>{`$$ 2^3 \\cdot 2^4 = 2^{3+4} = 2^7 $$`}</MathJax>
            </MathJaxContext>
          </p>
          <p>
            Resultado:{" "}
            <MathJaxContext>
              <MathJax inline>{`$$ 2^{3+4} = 2^7 = 128 $$`}</MathJax>
            </MathJaxContext>
          </p>
          <b>📘 Ejemplo de radicales:</b>
          <p>
            Calcular:{" "}
            <MathJaxContext>
              <MathJax inline>{`$$ \\sqrt[3]{27} $$`}</MathJax>
            </MathJaxContext>
          </p>
          <p>
            <MathJaxContext>
              <MathJax
                inline
              >{`$$ \\text{Como } 27 = 3^3, \\text{ entonces: } \\sqrt[3]{27} = 3 $$`}</MathJax>
            </MathJaxContext>
          </p>
          <br />
          <br />
          <Videos linkVideos="https://youtu.be/RCnAlwNFiI8" />
          {/*  1.3 _______________________________________________________________________________________ */}
          <Titles
            titulo="Expresiones Algebraicas"
            idTitulo="expresiones-algebraicas"
          />
          <p>
            {" "}
            Una variable es una letra que puede representar cualquier número
            tomado de un conjunto de números dado. Si empezamos con variables,
            por ejemplo x, y y z, y algunos números reales, y las combinamos
            usando suma, resta, multiplicación, división, potencias y raíces,
            obtenemos una expresión algebraica.
          </p>
          <b>Polinomios:</b>
          <p>
            Un polinomio en la variable x es una expresión de la forma donde a0,
            a1, . . . , an son números reales, y n es un entero no negativo. Si
            an 0, entonces el polinomio tiene grado n. Los monomios a k x k que
            conforman el polinomio reciben el nombre de términos del polinomio
          </p>
          <MathJaxContext>
            <MathJax inline>{`$$ 2x^2 - 3x + 4 $$`}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Suma y resta de polinomios"
            idTitulo="suma-resta-polinomios"
          />
          <p>
            Sumamos y restamos polinomios usando las propiedades de números
            reales que. La idea es combinar términos semejantes (esto es,
            términos con las mismas variables elevados a las mismas potencias)
            usando la Propiedad Distributiva.{" "}
          </p>
          <MathJaxContext>
            <MathJax inline>{`$$ 5x^7 + 3x^7 = (5 + 3)x^7 = 8x^7 $$`}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Multiplicación de expresiones algebraicas"
            idTitulo="multiplicacion-expresiones"
          />
          <p>
            Para hallar el producto de polinomios o de otras expresiones
            algebraicas, es necesario usar repetidamente la Propiedad
            Distributiva. En particular, usándola tres veces en el producto de
            dos binomios, obtenemos
          </p>
          <MathJaxContext>
            <MathJax
              inline
            >{`$$ (a + b)(c + d) = ac + ad + bc + bd $$`}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Factorización de factores comunes"
            idTitulo="factorizacion-comunes"
          />
          <p>
            Usamos la Propiedad Distributiva para expandir expresiones
            algebraicas. A veces necesitamos invertir este proceso (de nuevo
            usando la Propiedad Distributiva) al factorizar una expresión como
            un producto de otras más sencillas. Por ejemplo, podemos escribir.
          </p>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.3em" }}
            >{`$$ x^2 - 4 = (x - 2)(x + 2) $$`}</MathJax>
          </MathJaxContext>
          <h3>Ejemplo:</h3>
          <Videos linkVideos="https://youtu.be/fCJ1v8aEKUc" />
          {/*  1.4 _______________________________________________________________________________________ */}
          <Titles
            titulo="Expresiones Racionales"
            idTitulo="expresiones-racionales"
          />
          <p>
            Una expresión racional es, simplemente, una fracción donde tanto la
            parte de arriba (el numerador) como la de abajo (el denominador) son
            polinomios:
          </p>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.1em" }}
            >{`$$ \\frac{x^3 - x}{x^2 - 5x + 6} $$`}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Dominio de una expresión algebraica"
            idTitulo="dominio-expresion"
          />
          <p>
            El dominio de una expresión algebraica constituye el conjunto
            completo de números reales que la variable puede admitir sin que se
            produzca una inconsistencia o una operación indefinida en el sistema
            numérico. Ejemplo:
          </p>
          <Videos linkVideos="https://youtu.be/Hld_wwk496k" />
          <Titles
            titulo="Simplificación de expresiones racionales"
            idTitulo="simplificacion-racionales"
          />
          <p>
            La simplificación de una expresión racional requiere, como paso
            esencial, la factorización completa del numerador y del denominador.
            Una vez factorizada la expresión, se aplica la propiedad fundamental
            de las fracciones: cualquier factor común que aparezca idénticamente
            en el numerador y en el denominador puede ser cancelado (anulado)
            para obtener la forma simplificada de la expresión.{" "}
          </p>
          <Notas formulasMath={`$$ \\frac{AC}{BC} = \\frac{A}{B} $$`} />
          <b>Ejemplo:</b>
          <Videos linkVideos="https://youtu.be/RvxUjXPFv6g" />
          <Titles
            titulo="Multiplicación y división de expresiones racionales"
            idTitulo="mult-div-racionales"
          />
          <p>
            Para multiplicar dos fracciones multiplicamos sus numeradores y
            multiplicamos sus denominadores.
          </p>
          <Notas
            formulasMath={`$$ \\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{AC}{BD} $$`}
          />
          <p>
            Para dividir una fracción entre otra fracción, invertimos el divisor
            y multiplicamos
          </p>
          <Notas
            formulasMath={`$$ \\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C} $$`}
          />
          <b>Ejemplo:</b>
          <Videos linkVideos="https://youtu.be/2CKMRp4c-n0" />
          <Titles
            titulo="Suma y resta de expresiones racionales"
            idTitulo="suma-resta-racionales"
          />
          <p>
            Primero encontramos un denominador común y a continuación usamos la
            siguiente propiedad de fracciones.
          </p>
          <Notas
            formulasMath={`$$ \\frac{A}{C} + \\frac{B}{C} = \\frac{A+B}{C} $$`}
          />
          <b>Ejemplo:</b>
          <Videos linkVideos="https://youtu.be/HjRYrWHJ3gw" />
          <Titles
            titulo="Fracciones compuestas"
            idTitulo="fracciones-compuestas"
          />
          <p>
            Es una fracción en la que el numerador, el denominador, o ambos, son
            expresiones fraccionarias
          </p>
          <b>Ejemplo:</b>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.1em" }}
            >{`$$ \\frac{\\frac{1}{1+x+h} - \\frac{1}{1+x}}{h} $$`}</MathJax>
          </MathJaxContext>
          <p>
            Combinamos las fracciones en el numerador sobre un denominador
            común:
          </p>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.1em" }}
            >{`$$ \\frac{\\frac{1 \\cdot (1+x) - 1 \\cdot (1+x+h)}{(1+x+h)(1+x)}}{h} $$`}</MathJax>
          </MathJaxContext>
          <p>
            Distribuimos el signo negativo y cancelamos términos en el
            numerador:
          </p>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.1em" }}
            >{`$$ \\frac{\\frac{1+x - 1 - x - h}{(1+x+h)(1+x)}}{h} $$`}</MathJax>
          </MathJaxContext>
          <p>El numerador se simplifica a -h:</p>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.1em" }}
            >{`$$ \\frac{\\frac{-h}{(1+x+h)(1+x)}}{h} $$`}</MathJax>
          </MathJaxContext>
          <p>Convertimos la división por h en una multiplicación por 1/h</p>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.1em" }}
            >{`$$ \\frac{-h}{(1+x+h)(1+x)} \\cdot \\frac{1}{h} $$`}</MathJax>
          </MathJaxContext>
          <p>Cancelamos el factor h para obtener el resultado final:</p>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.1em" }}
            >{`$$ \\frac{-1}{(1+x+h)(1+x)} $$`}</MathJax>
          </MathJaxContext>
          <Titles
            titulo="Racionalizaciòn del denominador o el numerador"
            idTitulo="racionalizacion"
          />
          <p>
            Si el denominador de una fracción es una suma de dos términos, donde
            uno de ellos incluye una raíz cuadrada (por ejemplo, tiene la forma
            de un número más otro número multiplicado por una raíz cuadrada),
            puedes eliminar la raíz del denominador. Para lograr esto,
            multiplicas tanto la parte de arriba (numerador) como la parte de
            abajo (denominador) de la fracción por el conjugado del radical. El
            conjugado es esencialmente el mismo denominador, pero cambiándole el
            signo que separa los dos términos. Al hacer esta multiplicación, se
            aplica una propiedad matemática que garantiza que el nuevo
            denominador resultante ya no tendrá ninguna raíz cuadrada. Este
            proceso se llama racionalización.
          </p>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.1em" }}
            >{`$$ (A + B\\sqrt{C})(A - B\\sqrt{C}) = A^2 - B^2C $$`}</MathJax>
          </MathJaxContext>
          <b>Ejemplo:</b>
          <Videos linkVideos="https://youtu.be/fdRaWN7StdQ" />
          {/*  1.5 _______________________________________________________________________________________ */}
          <Titles titulo="¿Qué es una ecuación?" idTitulo="que-es-ecuacion" />
          <Parrafos parrafo="Una ecuación es una igualdad matemática que contiene una o más variables (también llamadas incógnitas), y cuyo objetivo principal es encontrar el valor o los valores que hacen verdadera dicha igualdad. Ambos lados de la ecuación están separados por un signo igual (=) y deben tener el mismo valor una vez que se resuelven." />
          <Parrafos parrafo="Resolver una ecuación significa encontrar el valor de la variable que satisface esa igualdad." />
          <Titles
            titulo=" Ecuaciones Lineales"
            idTitulo="ecuaciones-lineales"
          />
          <b>Definición</b>
          <Parrafos parrafo="Una ecuación lineal es aquella en la que la variable aparece con exponente uno y no se multiplica por sí misma ni aparece en el denominador. Representa una relación de tipo lineal entre los términos, es decir, su gráfica es una línea recta." />
          <b>Características</b>
          <Parrafos parrafo="Su estructura general es:" />
          <MathJaxContext>
            <MathJax>
              {"\\[ ax + b = c \\quad \\text{donde } a \\neq 0 \\]"}
            </MathJax>
          </MathJaxContext>
          <Parrafos parrafo="• Solo tiene una solución en la mayoría de los casos." />
          <Parrafos parrafo="• Las operaciones realizadas para resolverla deben mantener el equilibrio de la igualdad." />
          <b>Método de resolución:</b>
          <Parrafos parrafo="Se basa en despejar la variable aplicando operaciones inversas: sumar, restar, multiplicar o dividir ambos lados por el mismo número (excepto cero). El objetivo es aislar la variable y encontrar su valor." />
          <Titles
            titulo="Ecuaciones Cuadráticas"
            idTitulo="ecuaciones-cuadraticas"
          />
          <b>Definición</b>
          <Parrafos parrafo="Una ecuación cuadrática es aquella en la que la variable aparece elevada al cuadrado, es decir, con exponente dos. Representa una relación no lineal, y su gráfica es una parábola." />
          <b>Características:</b>
          <Parrafos parrafo="Su forma general es:" />
          <MathJaxContext>
            <MathJax>
              {"\\[ ax^2 + bx + c = 0 \\quad \\text{donde } a \\neq 0 \\]"}
            </MathJax>
          </MathJaxContext>
          <Parrafos parrafo="• Puede tener dos soluciones, una sola o ninguna en los números reales, dependiendo del discriminante." />
          <b>Métodos de resolución</b>
          <Parrafos parrafo="• Factorización: se reescribe la ecuación como el producto de dos binomios y se aplica la propiedad del producto cero." />
          <Parrafos parrafo="• Raíz cuadrada directa: se usa cuando la ecuación no tiene término lineal y se puede aislar el cuadrado." />
          <Parrafos parrafo="• Completar el cuadrado: se transforma la ecuación en un trinomio cuadrado perfecto." />
          <Parrafos parrafo="• Fórmula general: se aplica la fórmula que resuelve cualquier cuadrática:" />
          <MathJaxContext>
            <MathJax>
              {"\\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\]"}
            </MathJax>
          </MathJaxContext>
          <Titles
            titulo="El determinante"
            size="small"
            idTitulo="determinante"
          />
          <Parrafos parrafo="El discriminante es el valor que aparece dentro de la raíz cuadrada en la fórmula general:" />
          <MathJaxContext>
            <MathJax>{"\\[ \\Delta = b^2 - 4ac \\]"}</MathJax>
          </MathJaxContext>
          <Parrafos parrafo="Sirve para determinar el tipo de soluciones:" />
          <MathJaxContext>
            <MathJax>
              {
                "$$ \\text{Si } \\Delta > 0, \\text{ hay dos soluciones reales distintas.} $$"
              }
            </MathJax>
          </MathJaxContext>
          <Videos linkVideos="https://youtu.be/9xEb4KgHEgU" />
          {/*  1.6 _______________________________________________________________________________________ */}
          <Titles
            titulo="Modelado con Ecuaciones"
            idTitulo="modelado-ecuaciones"
          />
          <p id="modelado-ecuaciones">
            El modelado con ecuaciones consiste en representar situaciones del
            mundo real mediante expresiones matemáticas que describen relaciones
            entre variables. Una ecuación es una igualdad que contiene una o más
            variables, y resolverla implica encontrar los valores de las
            variables que hacen que la igualdad sea cierta. Este proceso es útil
            en ciencias, ingeniería, economía y otras áreas para resolver
            problemas prácticos.
          </p>
          <b>Pasos para modelar con ecuaciones:</b>
          <p>
            <b>1. Identificar las variables:</b> Determina las cantidades
            desconocidas y asígnales variables (por ejemplo, x para distancia, t
            para tiempo).
            <br />
            <b>2. Establecer relaciones:</b> Usa la información del problema
            para escribir ecuaciones que relacionen las variables.
            <br />
            <b>3. Resolver la ecuación:</b> Aplica técnicas algebraicas para
            encontrar los valores de las variables.
            <br />
            <b>4. Verificar la solución:</b> Comprueba que la solución tenga
            sentido en el contexto del problema.
          </p>
          <b>Ejemplo 1: Problema de distancia</b>
          <p>
            Un automóvil viaja a una velocidad constante de 60 km/h. ¿Cuánto
            tiempo (t) tarda en recorrer 180 km? La fórmula de la distancia es:
          </p>
          <MathJaxContext>
            <MathJax
              style={{ fontSize: "1.1em" }}
            >{`$$ d = v \\cdot t $$`}</MathJax>
          </MathJaxContext>
          <p>
            Sustituyendo los valores conocidos: <br />
            <MathJaxContext>
              <MathJax
                style={{ fontSize: "1.1em" }}
              >{`$$ 180 = 60 \\cdot t $$`}</MathJax>
            </MathJaxContext>
            Dividiendo ambos lados entre 60: <br />
            <MathJaxContext>
              <MathJax
                style={{ fontSize: "1.1em" }}
              >{`$$ t = \\frac{180}{60} = 3 \\text{ horas} $$`}</MathJax>
            </MathJaxContext>
          </p>
          <b>Ejemplo 2: Problema de costos</b>
          <p>
            Una tienda vende camisetas a $20 cada una, y tiene un costo fijo de
            $100 por día. Si se venden x camisetas, el ingreso total es:
          </p>
          <MathJaxContext>
            <MathJax style={{ fontSize: "1.1em" }}>{`$$ I = 20x $$`}</MathJax>
          </MathJaxContext>
          <p>
            El costo total es: <br />
            <MathJaxContext>
              <MathJax
                style={{ fontSize: "1.1em" }}
              >{`$$ C = 100 + 10x $$`}</MathJax>
            </MathJaxContext>
            Para encontrar el punto de equilibrio (donde ingreso iguala costo):{" "}
            <br />
            <MathJaxContext>
              <MathJax
                style={{ fontSize: "1.1em" }}
              >{`$$ 20x = 100 + 10x $$`}</MathJax>
            </MathJaxContext>
            Restando 10x de ambos lados: <br />
            <MathJaxContext>
              <MathJax
                style={{ fontSize: "1.1em" }}
              >{`$$ 10x = 100 $$`}</MathJax>
            </MathJaxContext>
            Dividiendo entre 10: <br />
            <MathJaxContext>
              <MathJax
                style={{ fontSize: "1.1em" }}
              >{`$$ x = 10 \\text{ camisetas} $$`}</MathJax>
            </MathJaxContext>
          </p>
          <h3>📘 Ejemplo: Modelado con ecuaciones</h3>
          <Videos linkVideos="https://youtu.be/QF3hFKnoIRs" />
        </div>
      </div>
    </>
  );
}

export default ModuloI;
