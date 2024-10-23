import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-yellow-500 flex justify-between items-center px-10 py-5">
      <div className="flex items-center space-x-5">
        <div className="rounded-full bg-yellow-500 text-black p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M6.21 20.79A12.79 12.79 0 0 1 18 12v7"></path>
          </svg>
        </div>
        <Link to="/" className="text-yellow-500 hover:text-white">Inicio</Link>
        <Link to="/inscribete" className="text-yellow-500 hover:text-white">¡INSCRIBETE!</Link>
        <Link to="/redes" className="text-yellow-500 hover:text-white">Nuestras Redes</Link>
        <Link to="/contacto" className="text-yellow-500 hover:text-white">Contactanos</Link>
        <Link to="/HomeStore" className="text-yellow-500 hover:text-white">Tienda</Link>
        <Link to="/servicios" className="text-yellow-500 hover:text-white">Servicios</Link>
      </div>
      <div className="flex items-center space-x-5">
        <Link to="/" className="text-yellow-500 hover:text-white">Inicio</Link>
        <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900">Nuestros Planes Aqui</button>
      </div>
    </div>
  );
};

export default Header;
