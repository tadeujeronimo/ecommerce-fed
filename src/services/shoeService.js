import api from './api';

const addShoeAPI = (Shoe) =>
  api.post('/sapato/create', Shoe)
    .then((response) => response)
    .catch((err) => err);

const findAllShoes = () =>
  api.get('/sapato/findAll')
    .then((response) => response)
    .catch((err) => err);

const findShoeById = (id) =>
  api.get(`/sapato/find/${id}`)
    .then((response) => response)
    .catch((err) => err);

const updateShoeById = (id, ShoeEdit) =>
  api.put(`/sapato/update/${id}`, ShoeEdit)
    .then((response) => response)
    .catch((err) => err);
  
const deleteShoe = (id) =>
  api.delete(`/sapato/delete/${id}`)
    .then((response) => response)
    .catch((err) => err);

export { addShoeAPI, findAllShoes, findShoeById, updateShoeById, deleteShoe };