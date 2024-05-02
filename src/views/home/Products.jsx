import React from "react";
import HomeNavbar from "../../components/navbar/HomeNavbar";
import ProductHero from "../../components/hero/ProductHero";
import CategoriesList from "../../components/list/CategoriesList";
import ProductsList from "../../components/list/ProductsList";

function Products() {
  return (
    <div className="w-full">
      <ProductHero />
      <div className="w-full h-screen p-8 flex flex-1 justify-start items-start gap-8">
        <CategoriesList />
        <ProductsList />

      </div>

    </div>
  );
}

export default Products;
