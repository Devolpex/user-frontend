import { useContext, useState } from 'react';
import { createContext } from "react";

const CategoryContext = createContext({
    categories: [], 
    _setCategories: () => {}, // Fixed function name
    categoryForm : {},
    _setCategoryForm: () => {}, // Fixed function name
    _resetCategoryForm: () => {} // Fixed function name
});

// eslint-disable-next-line react/prop-types
export const CategoryProvider = ({ children }) => {
    // Local state
    const [categories, setCategories] = useState([]);
    const [categoryForm, setCategoryForm] = useState({
        id: null,
        name: '',
        description: ''
    });

    // Global state
    const _setCategories = (categories) => {
        setCategories(categories);
    }

    const _setCategoryForm = (category) => {
        setCategoryForm(category);
    };

    const _resetCategoryForm = () => {
        setCategoryForm({
            id: null,
            name: '',
            description: ''
        });
    };
    return (
        <CategoryContext.Provider value={{ 
            categories,
            _setCategories, // Fixed function name
            categoryForm,
            _setCategoryForm, // Fixed function name
            _resetCategoryForm // Fixed function name
        }}>
            {children}
        </CategoryContext.Provider>
    );
}

export const useCategoryContext = () => useContext(CategoryContext); // Fixed hook name
