// src/SideBar.js
import React, { useState } from "react";
import "../styles/SideBar.css";

// 🎯 Definimos el temario completo con un 'title' para mostrar y un 'id' para el scroll.
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
  // Inicializamos el estado activo con el ID del elemento que deseas que esté activo por defecto.
  const initialActiveId = "solucion-no-lineales";
  const [activeSectionId, setActiveSectionId] = useState(initialActiveId);

  const handleClick = (id) => {
    // 1. Actualiza el estado para cambiar la clase 'active'
    setActiveSectionId(id);

    // 2. Realiza el desplazamiento a la sección de contenido
    const targetElement = document.getElementById(id);

    if (targetElement) {
      // Usamos scrollIntoView para un desplazamiento suave
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Alinea el inicio del elemento con el inicio de la vista
      });
    }
  };

  return (
    <div className="card">
      <span>In this article</span>
      <div className="card__container">
        {sections.map((section) => (
          <p
            key={section.id} // Clave única para React
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
