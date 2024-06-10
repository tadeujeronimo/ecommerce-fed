import React from "react";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { userLogged, userFull, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <nav className="flex flex-col items-center max-w-screen-xl px-6 py-3 mx-auto sm:flex-row">
        <div className="flex items-center flex-grow">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="UnylineShoes"
            title="UnylineShoes"
            className="w-10 cursor-pointer"
          />
          <h1 className="pl-2 text-3xl font-semibold text-center text-gray-700">
            UnylineShoes
          </h1>
        </div>
        {userLogged ? (
          <div className="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
            <div className="relative flex cursor-pointer">
              <span className="absolute flex items-center justify-center w-5 h-5 p-1 text-white rounded-full bg-primary -right-2 -top-2"></span>
              <FaShoppingCart className="w-5 h-5 cursor-pointer" />
            </div>
            <img src="" alt="" />
            <p className="text-gray-700">Bem-vindo, {userFull.nome}!</p>
            <Link to="/admin">Admin</Link>
            <img
              src={userFull.imagem}
              className="w-10 h-10 rounded-full"
              alt=""
            />
            <FaSignOutAlt className="w-5 h-5 cursor-pointer" onClick={logoutUser} />
          </div>
        ) : (
          <div className="flex items-center justify-end mt-4 space-x-6 sm:mt-0">
            <button
              onClick={() => navigate("/login")}
              className="inline-flex items-center gap-2 px-6 py-3 text-white transition duration-700 border-b-4 border-blue-700 rounded-full bg-secondary hover:scale-105"
            >
              <FaSignInAlt className="w-5 h-5 cursor-pointer" />
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="inline-flex items-center gap-2 px-6 py-3 text-white transition duration-700 border-b-4 border-purple-900 rounded-full bg-primary hover:scale-105"
            >
              <FaUserPlus className="w-5 h-5 cursor-pointer" />
              Cadastro
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
