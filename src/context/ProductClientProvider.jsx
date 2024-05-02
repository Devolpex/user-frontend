import { createContext, useContext, useState } from "react";

// Create the context
const ProductClientContext = createContext({
  // Products Data
  productsList: [],
  updateProductsList: () => {},
  resetProducts: () => {},

  // Product Pagination
  currentProductPage: 1,
  totalProductPages: 1,
  updateCurrentProductPage: () => {},
  updateTotalProductPages: () => {},

  // ------------------------------------------------------------

  // Categories Data
  categoriesList: [],
  updateCategoriesList: () => {},
  selectedCategory: null,
  updateSelectedCategory: () => {},
  // Category Pagination
  currentCategoryPage: 1,
  totalCategoryPages: 1,
  updateCurrentCategoryPage: () => {},
  updateTotalCategoryPages: () => {},

  // Loading 
  isLoading: false,
  updateIsLoading: () => {},
});

// Create the provider component
// eslint-disable-next-line react/prop-types
export default function ProductClientProvider({ children }) {
  // Product Functions
  // ------------------------------------------------------------

  // State to hold the product data
  const [productsList, setProductsList] = useState([]);
  // Function to update the product data
  const updateProductsList = (newProducts) => {
    setProductsList(newProducts);
  };

  // Function to reset the products
  const resetProducts = () => {
    setProductsList([]);
  };

  // State to hold the product pagination
  const [currentProductPage, setCurrentProductPage] = useState(1);
  const [totalProductPages, setTotalProductPages] = useState(1);

  // Function to update the product pagination
  const updateCurrentProductPage = (newCurrentPage) => {
    setCurrentProductPage(newCurrentPage);
  };
  const updateTotalProductPages = (newTotalPages) => {
    setTotalProductPages(newTotalPages);
  };

  // Category Functions
  // ------------------------------------------------------------

  // State to hold the category data
  const [categoriesList, setCategoriesList] = useState([]);
  // Function to update the category data
  const updateCategoriesList = (newCategories) => {
    setCategoriesList(newCategories);
  };

  // State to hold the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Function to update the selected category
  const updateSelectedCategory = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  // State to hold the category pagination
  const [currentCategoryPage, setCurrentCategoryPage] = useState(1);
  const [totalCategoryPages, setTotalCategoryPages] = useState(1);

  // Function to update the category pagination
  const updateCurrentCategoryPage = (newCurrentPage) => {
    setCurrentCategoryPage(newCurrentPage);
  };
  const updateTotalCategoryPages = (newTotalPages) => {
    setTotalCategoryPages(newTotalPages);
  };

  // Loading products
  // ------------------------------------------------------------
  const [isLoading, setIsLoading] = useState(false);
  const updateIsLoading = (newIsLoading) => {
    setIsLoading(newIsLoading);
  };

  // Render the provider with the value and children
  return (
    <ProductClientContext.Provider
      value={{
        // Products
        productsList,
        updateProductsList,
        resetProducts,
        currentProductPage,
        totalProductPages,
        updateCurrentProductPage,
        updateTotalProductPages,

        // Categories
        categoriesList,
        updateCategoriesList,
        selectedCategory,
        updateSelectedCategory,
        currentCategoryPage,
        totalCategoryPages,
        updateCurrentCategoryPage,
        updateTotalCategoryPages,

        // Loading
        isLoading,
        updateIsLoading,
      }}
    >
      {children}
    </ProductClientContext.Provider>
  );
}

export const useProductClientContext = () => useContext(ProductClientContext); // corrected function name
