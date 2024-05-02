import React, { useEffect } from "react";
import { useHomeContext } from "../../context/HomeProvider";
import productService from "../../services/productService";
import Button from "../buttons/Button";

function CategoriesList() {
  const {
    _setCategoriesList,
    categoriesList,
    _setCurrentPage,
    _setTotalPages,
    currentPage,
    totalPages,
    selectedCategory,
    _setSelectedCategory,
  } = useHomeContext();

  useEffect(() => {
    getCategoryListApi(currentPage);
  }, [currentPage, totalPages]);

  const getCategoryListApi = (page) => {
    productService
      .get(`/categories/categories-pagination-client?page=${page}`)
      .then(({ data }) => {
        if (page === 1) {
          _setCategoriesList(data.category);
        } else {
          _setCategoriesList([...categoriesList, ...data.category]);
        }
        _setTotalPages(data.totalPages);
      })
      .catch(() => {
        // Handle error
      });
  };

  const handleMoreCategoriesClick = () => {
    if (currentPage < totalPages) {
      _setCurrentPage(currentPage + 1);
      getCategoryListApi(currentPage + 1);
    }
  };

  const handleCategoryClick = (category) => {
    _setSelectedCategory(category);
    console.log("Catagory ID Selected: ", selectedCategory);
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <button
          role="button"
          className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start ${
            selectedCategory === null
              ? "bg-gray-800 text-white"
              : "hover:bg-zinc-300 hover:bg-opacity-50 active:bg-zinc-400 active:bg-opacity-50"
          }`}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </button>
        {categoriesList.length > 0 &&
          categoriesList.map((category) => (
            <button
            key={category.id}
            role="button"
            className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start ${
              selectedCategory === category.id
                ? "bg-black text-white"
                : "hover:bg-zinc-300 hover:bg-opacity-50 active:bg-zinc-400 active:bg-opacity-50"
            }`}
            onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}

        {currentPage < totalPages && ( // Render "More Categories" button only if there are more pages
          <Button
            text={"More Categories"}
            color={"gray"}
            onClick={handleMoreCategoriesClick} // Add onClick event handler
          />
        )}
      </nav>
    </div>
  );
}

export default CategoriesList;
