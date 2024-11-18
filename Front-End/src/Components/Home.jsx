import React from "react";
import Menu from "./Menu";
import Product from "./Product";
import Joyas from "../Utils/Joyas.json"
import { useFilter } from "../Hook/useFilter";

const Home = () => {

  const { FilterProductos } = useFilter();
  const filtro = FilterProductos(Joyas);



  return <div>
    <Menu />
    <Product data={filtro } />
  </div>;
};

export default Home;
