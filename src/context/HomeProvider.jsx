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
});

// eslint-disable-next-line react/prop-types
export const HomeProvider = ({ children }) => {
  const [categoriesList, setCategoriesList] = useState([]);
  const _setCategoriesList = (categories) => setCategoriesList(categories);
  const [productsList, setProductsList] = useState([]);
  const _setProductsList = (products) => setProductsList(products);

  const [currentPage, setCurrentPage] = useState(1);
  const _setCurrentPage = (page) => setCurrentPage(page);

  const [totalPages, setTotalPages] = useState(null);
  const _setTotalPages = (pages) => setTotalPages(pages);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const _setSelectedCategory = (category) => setSelectedCategory(category);

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
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext); // Fixed hook name
