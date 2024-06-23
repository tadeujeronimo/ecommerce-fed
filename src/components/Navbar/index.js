import React, { Fragment, useContext } from "react";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUserPlus,
  FaSignInAlt,
  FaSignOutAlt,
  FaCogs,
  FaHome,
} from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const { userLogged, userFull, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 z-50 w-full shadow-md bg-background-alt">
      <nav className="flex flex-col items-center max-w-screen-xl px-6 py-3 mx-auto sm:flex-row">
        <div className="flex items-center flex-grow">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt={process.env.REACT_APP_NAME}
            title={process.env.REACT_APP_NAME}
            className="w-8 cursor-pointer dark:invert"
          />
          <h1
            onClick={() => navigate("/")}
            className="pl-2 text-2xl font-semibold text-center cursor-pointer text-text"
          >
            {process.env.REACT_APP_NAME}
          </h1>
        </div>
        <div className="flex items-center justify-end mt-4 space-x-4 sm:mt-0">
          <ThemeToggle />
          {userLogged ? (
            <Fragment>
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-1 px-4 py-1 transition duration-700 border-b-4 border-[--primary-alt] rounded-full text-white bg-primary hover:scale-105"
                title="Home"
              >
                <FaHome className="w-5 h-5 cursor-pointer" />
                Home
              </button>
              <button
                onClick={() => navigate("/admin")}
                className="inline-flex items-center gap-1 px-4 py-1 transition duration-700 border-b-4 border-[--primary-alt] rounded-full text-white bg-primary hover:scale-105"
                title="Admin"
              >
                <FaCogs className="w-5 h-5 cursor-pointer" />
                Admin
              </button>
              <div className="relative flex cursor-pointer">
                <span className="absolute flex items-center justify-center w-4 h-4 p-1 text-sm rounded-full text-text bg-tertiary -right-2 -top-2">
                  1
                </span>
                <FaShoppingCart
                  title="Carrinho"
                  className="cursor-pointer w-7 h-7 text-text"
                  onClick={() => navigate("/cart")}
                />
              </div>
              <div className="inline-flex items-center justify-center gap-1">
                <img
                  src={
                    userFull.image ??
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  className="w-8 h-8 rounded-full"
                  alt="Usuário"
                  title="Usuário"
                />
                <p className="text-text">{userFull["name"]}</p>
              </div>
              <button
                onClick={logoutUser}
                className="flex items-center justify-end gap-1 px-2 py-1 transition duration-700 border-2 border-[--secondary-alt] rounded hover:scale-105 bg-tertiary"
                title="Sair"
              >
                <FaSignOutAlt className="w-5 h-5" />
                Sair
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button
                onClick={() => navigate("/login")}
                className="inline-flex items-center gap-1 px-4 py-1 text-white transition duration-700 border-b-4 border-[--primary-alt] rounded-full bg-primary hover:scale-105"
                title="Login"
              >
                <FaSignInAlt className="w-5 h-5" />
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="inline-flex items-center gap-1 px-4 py-1 text-white transition duration-700 border-b-4 border-[--secondary-alt] rounded-full bg-secondary hover:scale-105"
                title="Cadastro"
              >
                <FaUserPlus className="w-5 h-5" />
                Cadastro
              </button>
            </Fragment>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
