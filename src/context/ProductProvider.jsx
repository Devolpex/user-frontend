import { useContext, useState } from 'react';
import { createContext } from "react";

const ProductContext = createContext({
    products: [],
    _setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productForm, setProductForm] = useState({
        id: null,
        name: "",
        price: "",
        description: "",
        categoryName: "",
        image: "",
    });

    const _setProducts = (products) => {
        setProducts(products);
    }

    return (
        <ProductContext.Provider value={{
            products,
            _setProducts,
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext); // Fixed hook name