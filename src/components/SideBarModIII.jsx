import React, { useState } from "react";
import "../styles/SideBar.css";

// 🎯 Definimos el temario con IDs claros para el scroll
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
  // Inicializamos el estado activo con el ID que corresponde a la clase 'active' inicial.
  const initialActiveId = "grafica-tramos";
  const [activeSectionId, setActiveSectionId] = useState(initialActiveId);

  const handleClick = (id) => {
    // 1. Establecer el ID activo para cambiar la clase CSS
    setActiveSectionId(id);

    // 2. Realizar el desplazamiento suave al elemento de la documentación
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
      <span>In this article</span>
      <div className="card__container">
        {sections.map((section) => (
          <p
            key={section.id}
            // La clase 'active' se aplica si el ID del estado coincide
            className={`element ${activeSectionId === section.id ? "active" : ""}`}
            onClick={() => handleClick(section.id)} // Manejar el clic y el scroll
          >
            {section.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideBarModIII;
