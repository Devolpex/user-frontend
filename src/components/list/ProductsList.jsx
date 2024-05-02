import React, { useEffect, useState, useRef } from "react";
import productService from "../../services/productService";
import ProductCard from "../cards/ProductCard";
import { useHomeContext } from "../../context/HomeProvider";

function ProductsList() {
  const {
    products,
    updateProducts,
    selectedCategory,
    _setSelectedCategory,
  } = useHomeContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        window.innerHeight + window.scrollY >=
          containerRef.current.offsetTop + containerRef.current.offsetHeight
      ) {
        if (currentPage < totalPages && !loading) {
          setLoading(true); // Set loading state to true before fetching
          setCurrentPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, loading, totalPages, selectedCategory]);

  useEffect(() => {
    if (selectedCategory === null) {
      fetchAllProducts(currentPage);
    } else {
      fetchProductsByCategory(selectedCategory, currentPage);
    }
  }, [currentPage, selectedCategory]);

  const fetchAllProducts = (page) => {
    productService
      .get(`/products/client-side-pagination?page=${page}`)
      .then(({ data }) => {
        handleFetchSuccess(data, page);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading state to false if there's an error
      });
  };

  const fetchProductsByCategory = (categoryId, page) => {
    productService
      .get(`/products/categoryId/${categoryId}?page=${page}`)
      .then(({ data }) => {
        handleFetchSuccess(data, page);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading state to false if there's an error
      });
  };

  const handleFetchSuccess = (data, page) => {
    console.log(data);
    if (page === 1) {
      updateProducts(data.products);
    } else {
      updateProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
    setCurrentPage(data.currentPage);
    setTotalPages(data.totalPages);
    setLoading(false); // Set loading state to false after fetching
  };

  return (
    <div
      className="grid grid-cols-3 gap-4 justify-items-center content-center"
      ref={containerRef}
    >
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default ProductsList;
