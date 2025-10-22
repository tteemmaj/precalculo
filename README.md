# 📚 Proyecto Módulos de Estudio

Este repositorio contiene la interfaz de usuario (UI) para una aplicación web diseñada para la visualización y navegación de contenido modular, enfocada en temario académico.

## 🚀 Tecnologías

El proyecto está construido usando las siguientes tecnologías:

* **React:** Para la construcción de componentes.
* **React Router Dom:** Para la gestión de rutas y navegación.
* **CSS (Puro):** Para los estilos, incluyendo el diseño responsive.

***

## ⚙️ Componentes Clave

### 1. Nav (Barra de Navegación)

* **Responsividad:** Implementa un menú de navegación horizontal en escritorio y se transforma en un **menú hamburguesa** colapsable en dispositivos móviles.
* **Logo:** El logo se ha optimizado para mantener su proporción en todos los tamaños de pantalla.

### 2. SideBar (Menú Lateral de Temario)

* **Función:** Facilita la navegación interna del contenido con desplazamiento suave (`scrollIntoView`).
* **Responsividad:** Se muestra como un menú lateral de altura completa (`100vh`) en escritorio (`> 768px`) y se **oculta completamente** en móviles (`<= 768px`) para maximizar el espacio para el contenido principal.

***

## 💻 Puesta en Marcha

Sigue estos pasos para levantar el proyecto localmente.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/).

### Pasos

1.  **Clona el repositorio:**

    ```bash
    git clone [https://github.com/tteemmaj/precalculo.git]
    cd [precalculo]
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecuta la aplicación:**

    ```bash
    npm start
    ```
