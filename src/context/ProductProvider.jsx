import React, { useContext, useState, createContext } from 'react'; // Import React and useContext

const ProductContext = createContext({
    products: [],
    _setProducts: () => {},
    productForm: {},
    _setProductForm: () => {},
    _resetProductForm: () => {},
    _setImage: () => {}
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productForm, setProductForm] = useState({
        id: null,
        name: "",
        price: "",
        description: "",
        categoryName: "",
        categoryId: null,
        image: "",
    });

    const _setProducts = (products) => {
        setProducts(products);
    }

    const _setProductForm = (product) => { 
        setProductForm(product);
    };

    const _resetProductForm = () => {
        setProductForm({
            id: null,
            name: "",
            price: null,
            description: "",
            quantity:null,
            categoryName: "",
            categoryId: null,
            image: "",
        });
    };

    const _setImage = (image) => {
        setProductForm(prevForm => ({
            ...prevForm,
            image: image
        }));
    };





    return (
        <ProductContext.Provider
            value={{
                products,
                _setProducts,
                productForm,
                _setProductForm,
                _resetProductForm,
                _setImage
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export const useProductContext = () => useContext(ProductContext); // Fixed hook name
