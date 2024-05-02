import React, { useContext, useState, createContext } from 'react'; // Import React and useContext

const ProductContext = createContext({
    products: [],
    _setProducts: () => {},
    productForm: {},
    _setProductForm: () => {},
    _resetProductForm: () => {},
    _setImage: () => {},
    categories: [],
    _setCategories: () => {},
    loading: false,
    _setLoading: () => {},
    errors: [],
    _setErrors: () => {},
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productForm, setProductForm] = useState({
        id: null,
        name: "",
        price: "",
        description: "",
        quantity:null,
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

    const [categories, setCategories] = useState([]);
    const _setCategories = (categories) => {
        setCategories(categories);
    }

    const [loading, setLoading] = useState(false);
    const _setLoading = (loading) => {
        setLoading(loading);
    }

    const [errors, setErrors] = useState([]);
    const _setErrors = (errors) => {
        setErrors(errors);
    }


    return (
        <ProductContext.Provider
            value={{
                products,
                _setProducts,
                productForm,
                _setProductForm,
                _resetProductForm,
                _setImage,
                categories,
                _setCategories,

                loading,
                _setLoading,
                errors,
                _setErrors,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export const useProductContext = () => useContext(ProductContext); // Fixed hook name
