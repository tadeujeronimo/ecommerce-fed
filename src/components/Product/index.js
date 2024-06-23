import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="relative p-4 transition duration-700 transform bg-white border border-gray-100 rounded-lg hover:shadow-xl hover:scale-105">
      <span className="inline-block px-4 py-1 mb-4 text-sm bg-tertiary border border-[--tertiary-alt] rounded-full text-text">
        {product.category}
      </span>
      <img
        className="w-64 mx-auto transition duration-300 transform hover:scale-105"
        src={product.image}
        alt="Imagem do produto"
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-lg text-gray-900">{product.title}</h1>
        <p className="text-sm text-center text-gray-500">
          {product.description}
        </p>
        <h2 className="text-2xl font-bold text-gray-900">R${product.price}</h2>
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="inline-flex gap-1 border-b-4 border-[--primary-alt] px-8 py-2 transition duration-300 transform rounded-full text-text bg-primary hover:scale-105"
          title="Pedir Agora"
        >
          <FaShoppingCart className="w-5 h-5 cursor-pointer" />
          Pedir Agora
        </button>
      </div>
    </div>
  );
};

export default Product;
