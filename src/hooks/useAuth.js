import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserApi } from "../services/authService";
import api from "../services/api";
import usersMock from "../mock/users";

const useAuth = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userFull, setUserFull] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      api.defaults.headers.common["Authorization"] = `Bearer ${userInfo.token}`;
      //findUserById(userInfo.id);
      setUserLogged(true);
    }
    //setTimeout(() => {
      setLoading(false);
    //}, 3000);
  }, []);

  /** 
   * Função para encontrar um usuário pelo seu nome
   */
  const findUserByUsername = (username) => {
    return usersMock.find((user) => user.username === username);
  };

  /** Função para realizar o login */
  const loginUser = async (inputValues) => {
    const response = await loginUserApi(inputValues);
    const data = response.data;
    const user = findUserByUsername(inputValues.username);
    const userInfo = {
      ...data,
      username: user.username,
      name: user.name.firstname + " " + user.name.lastname,
      id: user.id
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
    navigate("/");
    setUserLogged(true);
    setUserFull(userInfo);
  };

  /** 
   * Função para realizar o logout 
   */
  const logoutUser = () => {
    setUserLogged(false);
    localStorage.removeItem(['userInfo']);
    navigate("/login");
  };

  /*
  const findUserById = async (idUser) => {
    const response = await getUserById(idUser);
    setUserFull(response.data);
    console.log(userFull);
  };
  */

  return { userLogged, userFull, loading, loginUser, logoutUser };
};

export default useAuth;
