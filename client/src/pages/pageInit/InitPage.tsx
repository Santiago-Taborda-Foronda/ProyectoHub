import React from 'react';
import LoginForm from '../../Components/auth/LoginForm';
import fondoImage from '../../assets/images/fondo-proyectos.png';

const InitPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${fondoImage})`
      }}
    >
      {/* Capa oscura semitransparente para mejorar legibilidad */}
      {/* <div className="absolute inset-0  bg-opacity-50"></div> */}
      
      {/* El formulario está por encima de la capa oscura */}
      <div className="relative z-10">
        <LoginForm />
      </div>
    </div>
  );
};

export default InitPage;