import React from "react";
import ForgotPasswordForm from "../../Components/auth/ForgotPasswordForm";
import fondoImage from "../../assets/images/fondo-proyectos.png";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${fondoImage})` }}
    >
      <div className="relative z-10">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;