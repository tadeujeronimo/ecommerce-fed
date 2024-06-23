import React from "react";
import ProductList from "./../../components/ProductList";

const Home = () => {
  return (
    <main className="w-full pt-10 my-20">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-xl font-semibold text-center text-text sm:text-2xl lg:text-3xl">
          {process.env.REACT_APP_SLOGAN}
        </h1>
      </div>
      <ProductList />
    </main>
  );
};

export default Home;
