import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SocialLogin from './SocialLogin';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white p-8 rounded-xl w-[400px] shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        ProyectHub
      </h1>

      {/* Pestañas de navegación */}
      <div className="flex mb-6 border-b">
        <button className="flex-1 pb-2 text-blue-600 border-b-2 border-blue-600 font-medium">
          Iniciar sesión
        </button>
        <button className="flex-1 pb-2 text-gray-500 font-medium">
          Registrarse
        </button>
      </div>

      <input
        type="email"
        placeholder="Ingrese su correo"
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Ingrese su contraseña"
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center text-sm text-gray-600">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          Mostrar contraseña
        </label>
        
       <Link
        to="/forgot-password"
        className="text-sm text-blue-600 hover:underline"
      >
        ¿Olvidaste tu contraseña?
      </Link>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
        INICIAR SESIÓN
      </button>

      <div className="mt-6 text-center text-gray-500">
        <p className="mb-3">Otras maneras de iniciar</p>
        <SocialLogin />
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        <p>Sistema de Gestión de Proyectos del Sena</p>
        <p className="mt-1">Solo usuarios autorizados</p>
      </div>
    </div>
  );
};

export default LoginForm;