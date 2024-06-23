import api from './api';

/** 
 * Retorna os dados de um usuário
 */
const loginUserApi = (userValues) =>
  api.post('/auth/login', userValues)
    .then((response) => response)
    .catch((err) => console.error('Erro na chamada', err));

/** 
 * Retorna os dados de um usuário
  */
const getUserById = (idUser) => {
  //console.log(idUser);
  return api.get(`/users/${idUser}`)
    .then(response => response)
    .catch((err) => err)
}

/** 
 * Adiciona um novo usuário
 */ 
const registerUser = (addUserValues) =>
  api.post('/users', addUserValues)
    .then(response => response)
    .catch((err) => console.error('Erro na chamada', err));

export { loginUserApi, getUserById, registerUser } 