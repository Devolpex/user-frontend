import { createContext, useContext, useState } from "react";

// Create the context
const ProductContext = createContext({
  products: [],
  updateProducts: () => {},
});

// Create the provider component
// eslint-disable-next-line react/prop-types
export default function ProductProvider ({ children }){
  // State to hold the product data
  const [products, setProducts] = useState([]);

  // Function to update the product data
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  // Render the provider with the value and children
  return (
    <ProductContext.Provider
      value={{
        products,
        updateProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductClientContext = () => useContext(ProductContext); // corrected function name
