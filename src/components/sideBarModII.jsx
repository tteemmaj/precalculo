
import React, { useState } from "react";
import "../styles/SideBar.css";

const sections = [
  { title: "Desigualdades", id: "desigualdades" },
  { title: "Solución de desigualdades lineales", id: "solucion-lineales" },
  {
    title: "Solución de desigualdades no lineales",
    id: "solucion-no-lineales",
  },
  { title: "Geometría de Coordenadas", id: "geometria-coordenadas" },
  { title: "La recta", id: "la-recta" },
  { title: "Pendiente de una recta", id: "pendiente-recta" },
  { title: "Forma punto-pendiente", id: "forma-punto-pendiente" },
  { title: "Forma pendiente-intersección", id: "forma-pendiente-interseccion" },
  {
    title: "Rectas verticales y horizontales",
    id: "rectas-verticales-horizontales",
  },
  { title: "Ecuación general de la recta", id: "ecuacion-general" },
  {
    title: "Rectas paralelas y perpendiculares",
    id: "rectas-paralelas-perpendiculares",
  },
  { title: "Modelado con ecuaciones lineales", id: "modelado-lineales" },
];

const SideBar = () => {
  const initialActiveId = "solucion-no-lineales";
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
