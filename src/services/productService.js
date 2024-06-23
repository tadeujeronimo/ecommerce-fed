import api from "./api";

/** 
 * Adiciona um novo produto 
 */
const addProductAPI = (product) =>
  api.post("/products", product)
    .then((response) => response)
    .catch((err) => err);

/** 
 * Retorna todos os produtos
 */
const findAllProducts = () =>
  api.get("/products")
    .then((response) => response)
    .catch((err) => err);

/** 
 * Retorna um produto pelo ID 
 */
const findProductById = (id) =>
  api.get(`/products/${id}`)
    .then((response) => response)
    .catch((err) => err);

/** 
 * Atualiza um produto pelo ID 
 */
const updateProductById = (id, productEdit) =>
  api.put(`/products/${id}`, productEdit)
    .then((response) => response)
    .catch((err) => err);

/** 
 * Deleta um produto pelo ID 
 */
const deleteProduct = (id) =>
  api.delete(`/products/${id}`)
    .then((response) => response)
    .catch((err) => err);

/** 
 * Retorna todos os produtos de uma categoria
 */
const findAllProductsByCategory = (category) =>
  api.get(`/products/category/${category}`)
    .then((response) => response)
    .catch((err) => err);

/** 
 * Busca todas as categorias 
 */
const findAllCategories = () =>
  api.get("/products/categories")
    .then((response) => response)
    .catch((err) => err);

/** 
 * Retorna o maior ID de um produto
 */
const getMaxProductId = () =>
  findAllProducts()
    .then((response) => {
      const products = response.data;
      let maxId = Math.max(...products.map((product) => product.id));
      return maxId;
    })
    .catch((err) => err);

export {
  addProductAPI,
  findAllProducts,
  findProductById,
  updateProductById,
  deleteProduct,
  findAllProductsByCategory,
  findAllCategories,
  getMaxProductId,
};
