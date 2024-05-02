// eslint-disable-next-line no-unused-vars
import React from "react";
import ManipulationHeader from "../../components/header/ManipulationHeader";
import ProductForm from "../../components/form/ProductForm";
import ProductImageFrom from "../../components/form/ProductImageFrom";
import { useProductContext } from "../../context/ProductProvider";
import Spinner from "../../components/spinner/Spinner";
import Error from "../../components/alert/Error";

function ProductsManipulation() {
  const { loading,errors } = useProductContext();
  return (
    <div className="flex flex-col justify-center items-start gap-8 p-8">
      <ManipulationHeader id={false} infos={{ service: "Product" }} />
      <div className="flex flec-col justify-between items-center w-full ">
        {loading && <Spinner />}
        {errors && (
          <div className="fixed right-4 bottom-4 z-50 flex flex-col-reverse justify-end items-end space-y-4">
            {errors.map((e) => (
              <Error message={e} key={e} />
            ))}
          </div>
        )}

        <ProductForm />
        <ProductImageFrom />
      </div>
    </div>
  );
}

export default ProductsManipulation;
