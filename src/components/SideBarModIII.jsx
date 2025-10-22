import React, { useState } from "react";
import "../styles/SideBar.css";

const sections = [
  { title: "¿Qué es una función?", id: "que-es-funcion" },
  { title: "Gráfica de funciones", id: "grafica-funciones" },
  { title: "Gráfica de funciones por tramos", id: "grafica-tramos" },
  {
    title: "Ecuaciones que definen funciones",
    id: "ecuaciones-definen-funciones",
  },
  { title: "Transformación de funciones", id: "transformacion-funciones" },
  { title: "Desplazamiento vertical", id: "desplazamiento-vertical" },
  { title: "Desplazamiento horizontal", id: "desplazamiento-horizontal" },
  { title: "Gráficas que se reflejan", id: "graficas-reflejan" },
  {
    title: "Alargamiento y contracción verticales de gráficas",
    id: "alargamiento-contraccion",
  },
  {
    title: "Alargamiento y contracción horizontal de gráficas",
    id: "alargamiento-contraccion-horizontal",
  },

  { title: "funciones pares e impares", id: "funciones-pares-impares" },
  {
    title: "Trigonometría de triángulos rectángulos",
    id: "trigonometria-triangulos",
  },
  { title: "Relaciones trigonométricas", id: "relaciones-trigonometricas" },
  { title: "Triángulos especiales", id: "triangulos-especiales" },
  {
    title: "Aplicaciones de la triginometría",
    id: "aplicaciones-trigonometria",
  },
  { title: "Funciones trigonométricas de ángulos", id: "funciones-angulos" },
  { title: "Funciones trigonométricas inversas", id: "funciones-inversas" },
  {
    title: "Triángulos rectángulos y trigonometría",
    id: "triangulos-rectangulos-trigonometria",
  },
  { title: "Ley de senos", id: "ley-senos" },
  { title: "Ley de cosenos", id: "ley-cosenos" },
];

const SideBarModIII = () => {
  const initialActiveId = "grafica-tramos";
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

export default SideBarModIII;
