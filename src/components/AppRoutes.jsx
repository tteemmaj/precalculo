// src/components/AppRoutes.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import ModuloI from "./ModuloI.jsx";
import ModuloII from "./ModuloII.jsx";
import ModuloIII from "./ModuloIII.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "moduloI",
        element: <ModuloI />,
      },
      {
        path: "moduloII",
        element: <ModuloII />,
      },
      {
        path: "moduloIII",
        element: <ModuloIII />,
      },
    ],
  },
]);

export default router;
