import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaArrowLeft } from "react-icons/fa";
import {
  findProductById,
  updateProductById,
} from "../../services/productService";
import { findAllCategories } from "../../services/categoryService";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productForm, setProductForm] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
    category: "",
    id: 0,
  });
  const [categories, setCategories] = useState([]);
  //const [selected, setSelected] = useState([]);

  /**
   * Função para buscar um produto pelo ID e popular o estado productForm com os dados do produto.
   */
  const getProductById = useCallback(async () => {
    const response = await findProductById(id);
    let productData = response.data;
    
    // Verifica se o retorno da busca de um produto vazio
    if (response.data === '') {
      let products = JSON.parse(localStorage.getItem("products")) || []; // Obtém a lista atual de produtos do localStorage
      const index = products.findIndex((product) => product.id == id); // Encontra o índice do produto que foi editado
      // Atualiza o produto na lista
      if (index !== -1) {
        productData = products[index];
      }
    }
    setProductForm(productData);
  }, [id]);

  /**
   * Função para buscar todas as categorias e popular o estado categories com os dados das categorias.
   */
  const getCategories = useCallback(async () => {
    const response = await findAllCategories();
    const categoriesSelect = response.data.map((categoria) => {
      return {
        value: categoria,
        label: categoria,
      };
    });
    setCategories(categoriesSelect);
    //setSelected(productForm.category);
  }, []);

  useEffect(() => {
    getCategories();
    getProductById();
  }, [getCategories, getProductById]);

  /**
   * Atualiza o estado productForm com o novo valor do campo de input
   * correspondente ao nome do alvo do evento.
   */
  const handleChangeValues = (event) => {
    setProductForm({
      ...productForm,
      [event.target.name]: event.target.value,
    });
  };

  /** 
   * Manipula o envio do formulário para atualizar um produto.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateProductById(id, productForm);

    if (response.status === 200) {
      //alert("Produto editado com sucesso!");

      let products = JSON.parse(localStorage.getItem("products")) || []; // Obtém a lista atual de produtos do localStorage
      const index = products.findIndex((product) => product.id == id); // Encontra o índice do produto que foi editado

      // Atualiza o produto na lista
      if (index !== -1) {
        products[index] = { ...productForm, id };
        localStorage.setItem("products", JSON.stringify(products)); // Salva a nova lista de produtos no localStorage
      }

      // Redirecionar para a página com a lista de produtos atualizada
      navigate("/admin", {
        state: {
          alert: { message: "Produto editado com sucesso!", show: true },
        },
      });
    }
  };

  return (
    <section className="max-w-screen-xl px-6 pt-10 mx-auto my-20">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl text-gray-600">Edição de Produtos</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-10 mt-6 md:grid-cols-1 lg:grid-cols-2"
      >
        <div className="flex flex-col space-y-4">
          <label htmlFor="title" className="text-gray-500">
            Nome
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={productForm.title}
            required
            onChange={handleChangeValues}
            className='w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-200 focus:ring-4 focus:outline-none focus:shadow-xl"'
          />
          <label htmlFor="description" className="text-gray-500">
            Descrição
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            value={productForm.description}
            onChange={handleChangeValues}
            className="w-full px-4 py-3 transition duration-500 border border-gray-200 rounded-lg resize-none focus:outline-none ring-red-200 focus:ring-4"
            required
          ></textarea>
        </div>

        <div className="flex flex-col space-y-4">
          <label htmlFor="price" className="text-gray-500">
            Preço
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={productForm.price}
            onChange={handleChangeValues}
            required
            className='className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-200 focus:ring-4 focus:outline-none focus:shadow-xl"'
          />
          <label htmlFor="image" className="text-gray-500">
            Imagem
          </label>
          <input
            type="text"
            id="image"
            onChange={handleChangeValues}
            name="image"
            value={productForm.image}
            required
            className='className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-200 focus:ring-4 focus:outline-none focus:shadow-xl"'
          />

          <label htmlFor="category" className="text-gray-500 poppins">
            Categoria
          </label>
          <select
            name="category"
            id="category"
            value={productForm.category}
            onChange={handleChangeValues}
            className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-200 focus:ring-4 focus:outline-none focus:shadow-xl"
          >
            <option>Selecione</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => navigate("/admin")}
            className="inline-flex items-center justify-center w-full gap-1 py-3 text-white transition duration-300 border-b-4 border-[--secondary-alt] rounded-lg bg-secondary ring-red-400 focus:outline-none focus:ring-4"
            title="Voltar"
          >
            <FaArrowLeft className="w-5 h-5 cursor-pointer" />
            Voltar
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full gap-1 py-3 text-white transition duration-300 border-b-4 border-[--primary-alt] rounded-lg bg-primary ring-red-400 focus:outline-none focus:ring-4"
            title="Editar"
          >
            <FaEdit className="w-5 h-5 cursor-pointer" />
            Editar
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
