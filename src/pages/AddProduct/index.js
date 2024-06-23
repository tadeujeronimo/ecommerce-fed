import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import { findAllCategories } from "../../services/categoryService";
import { addProductAPI, getMaxProductId } from "../../services/productService";
//import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
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

  useEffect(() => {
    getCategories();
  }, []);

  /**
   * Função para buscar todas as categorias e popular o estado categories com os dados das categorias.
   */
  const getCategories = async () => {
    const response = await findAllCategories();
    const categoriesSelect = response.data.map((categoria) => {
      return {
        value: categoria,
        label: categoria,
      };
    });
    setCategories(categoriesSelect); // Atualiza o estado local com os novas categorias
  };

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

  /** Função para adicionar um novo produto. */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      ...productForm,
      category: productForm.category,
      price: parseInt(productForm.price) || 0,
      description: productForm.description,
      image: productForm.image,
      //id: uuidv4(),
      id: (await getMaxProductId()) + 1, // Obtem o ID do maior ID existente + 1      
    };

    const response = await addProductAPI(product);

    if (parseInt(response.status) === 200) {
      //alert(`Produto ${response.data.title} cadastrado com sucesso !`);

      // Obtém a lista atual de produtos do localStorage
      const productsLS = JSON.parse(localStorage.getItem("products")) || [];

      // Verifica se o ID do novo produto é maior que todos os IDs existentes
      const index = productsLS.findIndex((pLS) => pLS.id === product.id.toString());
      if (index !== -1) {
        product.id = Math.max(...productsLS.map((pLS) => pLS.id)) + 1; // Se não, atualiza o ID do novo produto com o maior ID existente + 1
      }

      // Adiciona o novo produto à lista
      productsLS.push(product);

      // Salva a nova lista de produtos no localStorage
      localStorage.setItem("products", JSON.stringify(productsLS));

      // Redirecionar para a página com a lista de produtos atualizada
      navigate("/admin", {
        state: {
          alert: {
            message: `Produto ${response.data.title} cadastrado com sucesso!`,
            show: true,
          },
        },
      });
    }
  };

  return (
    <section className="max-w-screen-xl px-6 pt-10 mx-auto my-20">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl text-gray-600">Cadastro de Produtos</h1>
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
            required
            onChange={handleChangeValues}
            className='className="w-full px-4 py-3 transition duration-300 border border-gray-300 rounded-lg ring-red-200 focus:ring-4 focus:outline-none focus:shadow-xl"'
          />

          <label htmlFor="description" className="text-gray-500">
            Descrição
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
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
            onChange={handleChangeValues}
            data-type="currency"
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
            title="Adicionar"
          >
            <FaSave className="w-5 h-5 cursor-pointer" />
            Adicionar
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
