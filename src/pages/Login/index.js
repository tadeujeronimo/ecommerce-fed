import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    usermane: "",
    password: "",
  });
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  /**
   * Função para popular o estado inputValues com os dados do formulário
   */
  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Função para realizar o login
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(inputValues);
  };

  return (
    <main className="w-full h-screen pt-10">
      <div className="flex flex-col items-center h-screen pt-20">
        <img
          className="w-20 pb-2 dark:invert"
          src={logo}
          alt={process.env.REACT_APP_NAME}
          title={process.env.REACT_APP_NAME}
        />
        <h1 className="text-2xl text-text">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="p-4 mt-6 bg-white border-2 rounded-lg shadow-xl w-96"
        >
          <div className="flex flex-col space-y-6">
            <input
              type="username"
              placeholder="Digite seu usuário"
              name="username"
              className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-200 focus:ring-4 focus:outline-none focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              name="password"
              className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-200 focus:ring-4 focus:outline-none focus:shadow-xl"
              onChange={handleChangeValues}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full gap-1 py-3 mt-6 text-white transition duration-300 border-b-4 border-[--primary-alt] rounded-lg bg-primary focus:outline-none focus:ring-4"
            title="Entrar"
          >
            <FaSignInAlt className="w-5 h-5 cursor-pointer" />
            Entrar
          </button>
          <p
            onClick={() => navigate("/register")}
            className="my-6 text-base text-center cursor-pointer text-secondary hover:underline"
          >
            Precisa de uma conta?
          </p>
          <hr />
          <p className="mt-2 text-center text-secondary">
            Usuário: donero | Senha: ewedon
          </p>
          <p className="mt-2 text-center underline text-primary-alt">
            <a href="https://fakestoreapi.com/users" target="_blank" title="All users - Fake Store API">
              [ Outros usuários ]
            </a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
