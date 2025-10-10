import React, { useState } from "react";
import "../styles/SideBar.css";

// Definimos el temario completo con un 'title' para mostrar y un 'id' para el scroll.
const sections = [
  { title: "Números Reales", id: "numeros-reales" },
  { title: "Propiedades de los Números Reales", id: "propiedades-reales" },
  { title: "Adición y sustracción", id: "adicion-sustraccion" },
  { title: "Multiplicación y división", id: "multiplicacion-division" },
  { title: "La recta real", id: "recta-real" },
  { title: "Intervalos en la recta real", id: "intervalos-recta-real" },
  { title: "Valor absoluto", id: "valor-absoluto" },
  { title: "Exponentes y radicales", id: "exponentes-radicales" },
  { title: "Expresiones Algebraicas", id: "expresiones-algebraicas" },
  { title: "Suma y resta de polinomios", id: "suma-resta-polinomios" },
  {
    title: "Multiplicación de expresiones algebraicas",
    id: "multiplicacion-expresiones",
  },
  { title: "Factorización de factores comunes", id: "factorizacion-comunes" },
  { title: "Expresiones Racionales", id: "expresiones-racionales" },
  { title: "Dominio de una expresión algebraica", id: "dominio-expresion" },
  {
    title: "Simplificación de expresiones racionales",
    id: "simplificacion-racionales",
  },
  {
    title: "Multiplicación y división de expresiones racionales",
    id: "mult-div-racionales",
  },
  {
    title: "Suma y resta de expresiones racionales",
    id: "suma-resta-racionales",
  },
  { title: "Fracciones compuestas", id: "fracciones-compuestas" },
  {
    title: "Racionalización del denominador o el numerador",
    id: "racionalizacion",
  },
  { title: "¿Qué es una ecuación?", id: "que-es-ecuacion" },
  { title: "Ecuaciones Lineales", id: "ecuaciones-lineales" },
  { title: "Ecuaciones Cuadráticas", id: "ecuaciones-cuadraticas" },
  { title: "El determinante", id: "determinante" },
  { title: "Modelado con Ecuaciones", id: "modelado-ecuaciones" },
];

// Usamos PascalCase para la convención de componentes de React
const SideBar = () => {
  // Inicializamos el estado con la sección que quieres que esté activa por defecto (ej. 'Adición y sustracción')
  const initialActiveId = "adicion-sustraccion";
  const [activeSectionId, setActiveSectionId] = useState(initialActiveId);

  const handleClick = (id) => {
    // 1. Actualiza el estado para cambiar la clase 'active'
    setActiveSectionId(id);

    // 2. Realiza el desplazamiento suave a la sección de contenido
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Muestra el encabezado en la parte superior de la ventana
      });
    }
  };

  return (
    <div className="card">
      <span>Temario</span>
      <div className="card__container">
        {sections.map((section) => (
          <p
            key={section.id}
            // Aplica la clase 'active' si el ID coincide con el estado actual
            className={`element ${activeSectionId === section.id ? "active" : ""}`}
            onClick={() => handleClick(section.id)} // Llama a la función al hacer clic
          >
            {section.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
