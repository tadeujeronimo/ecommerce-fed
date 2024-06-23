import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { findAllProducts, deleteProduct } from "../../services/productService";
import { FaSave, FaRedo } from "react-icons/fa";
import FlashMessage from "../../components/FlashMessage";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [flashAlert, setFlashAlert] = useState(location.state?.alert);

  useEffect(() => {
    getAllProducts();
  }, []);

  /**
   * Recupera todos os produtos do localStorage ou faz uma chamada para a API se eles não existirem.
   */
  const getAllProducts = async () => {
    // Verifica se os produtos já existem no localStorage
    let products = JSON.parse(localStorage.getItem("products"));

    // Se os produtos não existirem no localStorage, faz a chamada para a API
    if (!products) {
      const response = await findAllProducts(); // Chama a API para obter os produtos
      products = response.data;
      localStorage.setItem("products", JSON.stringify(products)); // Armazena os produtos no localStorage
    }
    setProducts(products); // Atualiza o estado local com os novos produtos
  };

  /**
   * Função para remover um produto com base no ID fornecido.
   */
  const handleRemoveProduct = async (id) => {
    const answer = window.confirm("Deseja excluir o produto?");
    if (answer) {
      const response = await deleteProduct(id);
      if (response.status === 200) {
        alert("Produto excluído com sucesso!");
        setFlashAlert({ message: "Produto excluído com sucesso!", show: true });
        //console.log(flashAlert);

        //getAllProducts();

        // Simular exclusão de produto com localStorage
        let products = JSON.parse(localStorage.getItem("products")); // Obtem os produtos do localStorage
        products = products.filter((product) => product.id !== id); // Remove o produto do array
        localStorage.setItem("products", JSON.stringify(products)); // Atualiza os produtos no localStorage
        setProducts(products); // Atualiza o estado local com os novos produtos

        navigate("/admin", {
          state: {
            alert: { message: "Produto excluído com sucesso!", show: true },
          },
        });
      }
    }
  };

  /**
   * Função para limpar os produtos armazenados no localStorage e atualizar o estado local para um array vazio.
   */
  const cleanProducts = () => {
    localStorage.removeItem("products"); // Limpa os produtos do localStorage
    setProducts([]); // Atualiza o estado local para um array vazio
  };

  /**
   * Função para restaurar os produtos.
   */
  const restoreProducts = () => {
    localStorage.removeItem("products"); // Limpa os produtos do localStorage
    getAllProducts(); // Atualiza a lista de produtos
  };

  return (
    <section className="max-w-screen-xl px-6 pt-20 mx-auto my-20">
      {flashAlert && (
        <FlashMessage show={flashAlert.show}>{flashAlert.message}</FlashMessage>
      )}
      <div className="flex justify-end space-x-3">
        <button
          onClick={() => navigate("/admin/add-product")}
          className="inline-flex items-center justify-center gap-1 px-1 py-2 text-white transition duration-300 border-b-4 border-[--primary-alt] rounded-lg w-44 bg-primary ring-red-400 focus:outline-none focus:ring-4 poppins "
          title="Adicionar Produto"
        >
          <FaSave className="w-5 h-5 cursor-pointer" />
          Adicionar Produto
        </button>
        <button
          onClick={cleanProducts}
          className="inline-flex items-center justify-center gap-1 px-1 py-2 text-white transition duration-300 border-b-4 border-[--secondary-alt] rounded-lg w-44 bg-secondary ring-red-400 focus:outline-none focus:ring-4 poppins "
          title="Limpar Produtos"
        >
          <FaTrash className="w-5 h-5 cursor-pointer" />
          Limpar Produtos
        </button>
        <button
          onClick={restoreProducts}
          className="inline-flex items-center justify-center gap-1 px-1 py-2 text-white transition duration-300 border-b-4 border-[--secondary-alt] rounded-lg w-44 bg-secondary ring-red-400 focus:outline-none focus:ring-4 poppins "
          title="Restaurar Produtos"
        >
          <FaRedo className="w-5 h-5 cursor-pointer" />
          Restaurar Produtos
        </button>
      </div>
      <div className="flex flex-col my-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="border-b-2 bg-background-alt">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-text"
                    >
                      Imagem
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-text"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-text"
                    >
                      Preço
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-text">
                        Ações
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.length === 0 ? (
                    <tr className="bg-white border-b">
                      <td
                        colSpan="4"
                        className="px-6 py-4 text-xl font-medium text-center"
                      >
                        Lista de produtos vazia!
                      </td>
                    </tr>
                  ) : (
                    products.map((product) => (
                      <tr key={product.id} className="bg-white border-b">
                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                          <img
                            className="w-16"
                            src={product.image}
                            alt={product.title}
                          />
                        </td>
                        <td
                          className="px-6 py-4 text-sm font-medium whitespace-nowrap"
                          title={product.description}
                        >
                          {product.title}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                          {product.price}
                        </td>
                        <td className="flex flex-col items-center justify-center h-24 px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-center space-x-3">
                            <Link to={`/admin/edit-product/${product.id}`}>
                              <FaEdit
                                className="text-2xl cursor-pointer text-primary"
                                title="Editar"
                              />
                            </Link>
                            <FaTrash
                              onClick={() => handleRemoveProduct(product.id)}
                              className="text-2xl cursor-pointer text-secondary"
                              title="Excluir"
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
