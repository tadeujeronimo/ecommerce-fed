import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { registerUser } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

const Register = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
  });
  const [name, setName] = useState("");
  const navigate = useNavigate();

  /**
   * Função para popular o estado inputValues com os dados do formulário
   */
  const handleChangeValues = (event) => {
    if (event.target.name === "firstname" || event.target.name === "lastname") {
      setInputValues({
        ...inputValues,
        name: {
          ...inputValues.name,
          [event.target.name]: event.target.value,
        },
      });
    } else {
      setInputValues({
        ...inputValues,
        [event.target.name]: event.target.value,
      });
    }
    setName(`${inputValues.name.firstname} ${inputValues.name.lastname}`);
    //console.log(inputValues);
  };

  /**
   * Função para realizar o cadastro de um novo usuário
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await registerUser(inputValues);
    //console.log(response);
    if (response.status === 200) {
      alert(`Usuário "${name}" cadastrado com sucesso!`);
      navigate("/admin");
    }
  };

  return (
    <main className="w-full h-screen pt-10 banner">
      <div className="flex flex-col items-center h-screen pt-20">
        <img
          className="w-20 pb-2 dark:invert"
          src={logo}
          alt={process.env.REACT_APP_NAME}
          title={process.env.REACT_APP_NAME}
        />
        <h1 className="text-2xl text-text">Cadastro de Usuário</h1>
        <form
          onSubmit={handleSubmit}
          className="p-4 mt-6 bg-white border-2 rounded-lg shadow-lg w-96"
        >
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              name="firstname"
              placeholder="Digite seu nome"
              className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-400 focus:ring-1 focus:outline-none focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Digite seu sobrenome"
              className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-400 focus:ring-1 focus:outline-none focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-400 focus:ring-1 focus:outline-none focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="text"
              name="username"
              placeholder="Insira a url da imagem de avatar"
              className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-400 focus:ring-1 focus:outline-none focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-400 focus:ring-1 focus:outline-none focus:shadow-xl"
              onChange={handleChangeValues}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full gap-1 py-3 mt-6 text-white transition duration-300 border-b-4 border-[--primary-alt] rounded-lg bg-primary focus:outline-none focus:ring-4"
              title="Cadastrar"
            >
              <FaUserPlus className="w-5 h-5 cursor-pointer" />
              Cadastrar
            </button>
            <Link
              to="/login"
              className="my-6 text-base text-center cursor-pointer text-secondary hover:underline"
            >
              Já possui uma conta?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
