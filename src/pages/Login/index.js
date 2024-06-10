import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    senha: ''
  })
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChangeValues = (evento) => {
    setInputValues({
      ...inputValues,
      [evento.target.name]: evento.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(inputValues);
  }

  return (
    <main className="w-full h-screen pt-20 banner">
      <div className="flex flex-col items-center h-screen pt-20">
        <img className="w-20" src={logo} alt="UnylineShoes" title="UnylineShoes" />
        <form onSubmit={handleSubmit} className="p-4 mt-6 bg-white border-2 rounded-lg shadow-xl w-96">
          <div className="flex flex-col space-y-6">
            <input
              type="mail"
              placeholder="Digite seu e-mail"
              name="email"
              className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-200 focus:ring-4 focus:outline-none focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              name="senha"
              className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-200 focus:ring-4 focus:outline-none focus:shadow-xl"
              onChange={handleChangeValues}
            />
          </div>
          <button type="submit" className="inline-flex items-center justify-center w-full gap-2 py-3 mt-6 text-white transition duration-300 border-b-4 border-purple-900 rounded-lg bg-primary focus:outline-none focus:ring-4">
            <FaSignInAlt className="w-5 h-5 cursor-pointer" />
            Entrar
          </button>
          <p className="my-6 text-base text-center cursor-pointer text-primary hover:underline">Precisa de uma conta ?</p>
        </form>
      </div>
    </main>
  );
};

export default Login;