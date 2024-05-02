import { createContext, useContext, useState } from "react";

// eslint-disable-next-line no-undef
const HomeContext = createContext({
  home: [],
  _setHome: () => {},
  productsList: [],
  _setProductsList: () => {},
  categoriesList: [],
  _setCategoriesList: () => {},
  currentPage: 1,
  _setCurrentPage: () => {},
  tootalPages: 1,
  _setTotalPages: () => {},
  selectedCategory: null,
  _setSelectedCategory: () => {},
  updateProducts: () => {},
  products: [],
  resetProducts: () => {},
});

// eslint-disable-next-line react/prop-types
export const HomeProvider = ({ children }) => {
  // Categories List Provider
  const [categoriesList, setCategoriesList] = useState([]);
  const _setCategoriesList = (categories) => setCategoriesList(categories);

  // Products List Provider
  const [productsList, setProductsList] = useState([]);
  const _setProductsList = (products) => setProductsList(products);

  // Current Page Provider
  const [currentPage, setCurrentPage] = useState(1);
  const _setCurrentPage = (page) => setCurrentPage(page);

  // Total Pages Provider
  const [totalPages, setTotalPages] = useState(null);
  const _setTotalPages = (pages) => setTotalPages(pages);

  // Selected Category Provider
  const [selectedCategory, setSelectedCategory] = useState(null);
  const _setSelectedCategory = (category) => setSelectedCategory(category);

  // Update Products Provider
  const [products, setProducts] = useState([]);
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const resetProducts = () => {
    setProducts([]);
  };

  return (
    <HomeContext.Provider
      value={{
        categoriesList,
        _setCategoriesList,
        productsList,
        _setProductsList,
        currentPage,
        _setCurrentPage,
        totalPages,
        _setTotalPages,
        selectedCategory,
        _setSelectedCategory,
        updateProducts,
        products,
        resetProducts,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext); // Fixed hook name
