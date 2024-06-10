import React, { useState, useEffect } from 'react'
import image from '../../assets/shoe.png';
import { useNavigate } from 'react-router-dom';
import { findCategoryById } from '../../services/categoryService';

const defaultCategory = {
  "_id": "6658c5fd24839c5ada75aa9a",
  "nome": "Tênis"
}

const Shoe = ({ shoe }) => {
  const [category, setCategory] = useState(defaultCategory);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory();
  }, [])

  const getCategory = async() => {
    let id = defaultCategory._id
    if (shoe?.categorias && shoe.categorias.length > 0) {
      id = shoe.categorias[0]._id;
    }
    const response = await findCategoryById(id);
    setCategory(response.data);    
    console.log(response.data);
  }
  
  return (
    <div className='relative p-4 transition duration-700 transform bg-white border border-gray-100 rounded-lg hover:shadow-xl hover:scale-105'>
      <span className='inline-block px-4 py-1 mb-4 text-sm bg-red-100 border border-red-500 rounded-full text-primary'>{category.nome}</span>
      <img className='w-64 mx-auto transition duration-300 transform hover:scale-105' src={shoe.imagem} alt="Imagem do produto" />
      <div className='flex flex-col items-center my-3 space-y-2'>
        <h1 className='text-lg text-gray-900'>{shoe.nome}</h1>
        <p className='text-sm text-center text-gray-500'>{shoe.descricao}</p>
        <h2 className='text-2xl font-bold text-gray-900'>R${shoe.precoUnitario}</h2>
        <button onClick={() => navigate(`/Shoe/${shoe._id}`)} className='px-8 py-2 text-white transition duration-300 transform rounded-full bg-primary hover:scale-105'>Pedir Agora</button>
      </div>
    </div>
  )
}

export default Shoe;