import React from "react";
import ShoeList from "./../../components/ShoeList";

const Home = () => {
  return (
    <>
      <section className="w-full home-banner">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-semibold text-center text-gray-700 md:text-4xl lg:text-3xl">
            O e-commerce de sapatos mais popular do Brasil!
          </h1>
        </div>
      </section>
      <ShoeList />
    </>
  );
};

export default Home;
