import React, { useState, useEffect } from 'react';
import Shoe from '../Shoe';
import ShoesMock from '../../mock/shoes';
import { findAllShoes } from '../../services/shoeService';

const ShoeList = () => {
  const [categoriaTab, setCategoriaTab] = useState('Tênis');
  const [shoes, setShoes] = useState(ShoesMock);

  useEffect(() => {
    getAllShoes();
  }, [])

  const getAllShoes = async() => {
    const response = await findAllShoes();
    setShoes(response.data);
    console.log(shoes);
  }

  return (
    <section className='max-w-screen-xl px-3 mx-auto my-12'>
      {/* Menu de categoria */}
      <div className='flex items-center justify-center space-x-6'>
        <p className={categoriaTab === 'Tênis' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Tênis')}>Tênis</p>
        <p className={categoriaTab === 'Social' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Social')}>Social</p>
        <p className={categoriaTab === 'Esporte' ? "active-menu-tab bg-primary" : "menu-tab"} onClick={() => setCategoriaTab('Esporte')}>Esporte</p>
      </div>
      {/* lista de sapatos */}
      <div className='grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3'>
        {shoes.map(shoe => (
          <Shoe key={shoe._id} shoe={shoe}/>
        ))}
      </div>
    </section>
  )
}

export default ShoeList;