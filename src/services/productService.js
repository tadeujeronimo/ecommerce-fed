import api from "./api";

const addProductAPI = (product) =>
  api
    .post("/products", product)
    .then((response) => response)
    .catch((err) => err);

const findAllProducts = () =>
  api
    .get("/products")
    .then((response) => response)
    .catch((err) => err);

const findProductById = (id) =>
  api
    .get(`/products/${id}`)
    .then((response) => response)
    .catch((err) => err);

const updateProductById = (id, productEdit) =>
  api
    .put(`/products/${id}`, productEdit)
    .then((response) => response)
    .catch((err) => err);

const deleteProduct = (id) =>
  api
    .delete(`/products/${id}`)
    .then((response) => response)
    .catch((err) => err);

const findAllProductsByCategory = (category) =>
  api
    .get(`/products/category/${category}`)
    .then((response) => response)
    .catch((err) => err);

const findAllCategories = () =>
  api
    .get("/products/categories")
    .then((response) => response)
    .catch((err) => err);

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
