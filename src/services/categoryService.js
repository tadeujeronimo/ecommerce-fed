import api from './api';

/** 
 * Busca todas as categorias 
 */
const findAllCategories = () =>
    api.get('/products/categories')
      .then((response) => response)
      .catch(err => err);
 
/** 
 * Busca uma categoria pelo ID
 */
const findCategoryById = (id) =>
  api.get(`/categoria/find/${id}`)
    .then((response) => response)
    .catch((err) => err);

export { findAllCategories, findCategoryById }