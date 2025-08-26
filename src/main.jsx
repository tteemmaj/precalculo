import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./components/Home.jsx"
import { RouterProvider } from "react-router-dom";
import router from "./components/AppRoutes.jsx"
import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
