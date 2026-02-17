import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from './SocialLogin';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setShowRoleModal(true); // En desarrollo mostramos el modal directo
  };

  const handleRoleSelect = (role: 'admin' | 'instructor' | 'aprendiz') => {
    setShowRoleModal(false);
    navigate(`/${role}`);
  };

  return (
    <div className="bg-white p-8 rounded-xl w-[400px] shadow-lg relative">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        ProyectHub
      </h1>

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
        <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
      >
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

      {/* Modal de selección de rol */}
      {showRoleModal && (
        <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center z-20">
          <div className="bg-white rounded-xl p-6 w-72 shadow-xl">
            <h2 className="text-lg font-bold text-center text-gray-800 mb-2">
              Selecciona tu rol
            </h2>
            <p className="text-xs text-center text-gray-400 mb-5">
              (Solo para desarrollo)
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleRoleSelect('admin')}
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
              >
                👤 Administrador
              </button>
              <button
                onClick={() => handleRoleSelect('instructor')}
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
              >
                🎓 Instructor
              </button>
              <button
                onClick={() => handleRoleSelect('aprendiz')}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                📚 Aprendiz
              </button>
            </div>

            <button
              onClick={() => setShowRoleModal(false)}
              className="w-full mt-4 py-2 text-sm text-gray-500 hover:text-gray-700"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;