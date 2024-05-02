import React from "react";
import { exploreProductsContent } from "../../constants/Text";
import ProductCard from "../cards/ProductCard";
import { Link } from "react-router-dom";

function ExploreProducts() {
  return (
    <section className="px-8 pt-4 font-semibold my-16 flex flex-col gap-8 justify-center items-center">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <h2 className="mb-2 text-4xl text-blue-gray">
            {exploreProductsContent.title}
          </h2>
          <p className="mx-auto mb-24 w-full text-gray-500 lg:w-5/12">
            {exploreProductsContent.description}
          </p>
        </div>
      </div>
      <div className="grid justify-items-center content-center grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Link
        to={"/#/products"}
        className="align-middle w-1/6 select-none bg-gray-800 hover:bg-slate-700 focus:bg-slate-900 text-white font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        type="button"
      >
        See More
      </Link>
    </section>
  );
}

export default ExploreProducts;
