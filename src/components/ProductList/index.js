import React, { useState, useEffect } from 'react'
import Product from '../Product'
import { findAllProducts, findAllProductsByCategory } from '../../services/productService';

const ProductList = () => {
  const [categoriaTab, setCategoriaTab] = useState('all');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (categoriaTab !== 'all') {
      const fetchProducts = async () => {
        const response = await findAllProductsByCategory(categoriaTab);
        setProducts(response.data);
      }
      fetchProducts();
    } else {
      getAllProducts();
    }
  }, [categoriaTab]);

  /** Função para obter todos os produtos */
  const getAllProducts = async () => {
    const response = await findAllProducts();
    setProducts(response.data);
  }

  return (
    <section className='max-w-screen-xl px-3 mx-auto my-20'>
      {/* Menu de categoria */}
      <div className='flex items-center justify-center space-x-6'>
        <p 
          className={categoriaTab === 'all' ? "active-menu-tab" : "menu-tab"} 
          onClick={() => setCategoriaTab('all')}
        >
          all
        </p>
        <p
          className={categoriaTab === 'electronics' ? "active-menu-tab" : "menu-tab"} 
          onClick={() => setCategoriaTab('electronics')}
        >
          electronics
        </p>
        <p
          className={categoriaTab === 'jewelery' ? "active-menu-tab" : "menu-tab"} 
          onClick={() => setCategoriaTab('jewelery')}
        >
          jewelery
        </p>
        <p
          className={categoriaTab === "men's clothing" ? "active-menu-tab" : "menu-tab"} 
          onClick={() => setCategoriaTab("men's clothing")}
        >
          men's clothing
        </p>
        <p
          className={categoriaTab === "women's clothing" ? "active-menu-tab" : "menu-tab"} 
          onClick={() => setCategoriaTab("women's clothing")}
        >
          women's clothing
        </p>
      </div>
      {/* Lista de Produtos */}
      <div className='grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3'>
        {products.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </section>
  )
};

export default ProductList