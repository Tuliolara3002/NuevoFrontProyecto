// src/routes.js
import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer';
import HomeStore from './components/Tienda/HomeStore';
import Cart from './components/Tienda/Cart';
import Login from './components/Login/Login';

const Root = () => (
  <>
    <Header />
    <Outlet /> {/* Aquí se renderizarán las rutas hijas */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,  // HomePage como la ruta principal
      },
      {
        path: "servicios",
        element: <Servicios />, // Define la ruta para Servicios
      },
      {
        path: "Login", // Define la ruta para Login
        element: <Login />,
      },
      {
        path: "HomeStore", // Define la ruta para HomeStore
        element: <HomeStore />,
      },
      {
        path: "cart", // Define la ruta para Cart
        element: <Cart />,
      },
    ],
  },
]);

export default router;
