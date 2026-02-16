import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl w-[400px] shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Recuperar contraseña
      </h1>

      <p className="text-sm text-gray-600 mb-4 text-center">
        Ingresa tu correo y te enviaremos instrucciones.
      </p>

      <input
        type="email"
        placeholder="Ingrese su correo"
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
        ENVIAR
      </button>

      <div className="mt-6 text-center">
        <Link
          to="/"
          className="text-sm text-blue-600 hover:underline"
        >
          Volver a iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;