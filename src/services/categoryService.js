import api from './api';

const findAllCategories = () =>
    api.get('/categoria/findAll')
      .then((response) => response)
      .catch(err => err);
  
const findCategoryById = (id) =>
  api.get(`/categoria/find/${id}`)
    .then((response) => response)
    .catch((err) => err);

export { findAllCategories, findCategoryById }