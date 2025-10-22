import React, { useState } from "react";
import "../styles/SideBar.css";

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

const SideBar = () => {
  const initialActiveId = "adicion-sustraccion";
  const [activeSectionId, setActiveSectionId] = useState(initialActiveId);

  const handleClick = (id) => {
    setActiveSectionId(id);

    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
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
            className={`element ${activeSectionId === section.id ? "active" : ""}`}
            onClick={() => handleClick(section.id)}
          >
            {section.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
