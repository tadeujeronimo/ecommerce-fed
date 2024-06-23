import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="w-full h-screen pt-10 text-primary-alt">
      <div className="flex flex-col items-center h-screen pt-20">
        <h1 className="text-5xl text-secondary-alt">404</h1>
        <h1>Oops! Parece que você está perdido.</h1>
        <p>Aqui estão alguns links úteis:</p>
        <Link className="underline" to="/">
          Home
        </Link>
        <Link className="underline" to="/login">
          Login
        </Link>
        <Link className="underline" to="/register">
          Cadastro
        </Link>
      </div>
    </main>
  );
};

export default NotFound;