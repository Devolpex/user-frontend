import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ConfirmNotification from '../../components/notifications/ConfirmNotification'
import { useStateContext } from '../../context/ContextProvider';
import Success from '../../components/alert/Success';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import CategoryTable from '../../components/table/CategoryTable';
import { useCategoryContext } from '../../context/CategoryProvider';

import productService from '../../services/productService';

function CategoriesPage() {
  const [confirmNotification, setConfirmNotification] = React.useState(false);
  const {success, _setSuccess}  = useStateContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const {_setCategories,categories} = useCategoryContext();
  const [deleteCategoryId, setDeleteCategoryId] = useState(null);


  useEffect(() => {
    handleGetCategories(currentPage);
  }, [currentPage]);

  const handleGetCategories = (page) => {
    getCategoriesApi(page);
  };

  const getCategoriesApi = (page) => {
    productService
      .get(`/categories?page=${page}`)
      .then(({ data }) => {
        console.log(data);
        _setCategories(data.category);
        setLoading(false);
        setTotalPages(data.totalPages);
      })
      .catch(() => {
        setLoading(false);
      });
  };


  const handleConfirm = () => {
    setConfirmNotification(false);
    deleteCategory(deleteCategoryId);
  };


  const handleCancel = () => {
    setConfirmNotification(false);
    _setSuccess("Delete category action cancelled");
  };

  const onDeleteClick = (id) => {
    setConfirmNotification(true);
    setDeleteCategoryId(id);
  };

  const deleteCategory = (id) => {
    productService
      .delete(`/categories/${id}`)
      .then(({data}) => {
        handleGetCategories(currentPage);
        _setSuccess(data.success);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      {confirmNotification && (
        <ConfirmNotification
          message={"You are sure you want to delete this Category?"}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
        />
      )}
      {success && <Success message={success} />}
      {/* Header section */}
      <Header title={"Categories"} />
      {/* Serach and buttons section */}
      <div className="w-full py-4 flex justify-end items-center">
        <div className="flex justify-center items-center gap-2">
          <Link
            to={"/categories/new"}
            className="w-auto px-3.5 py-2 mr-2 bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-lg shadow justify-center items-center gap-2 flex text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]"
          >
            New Category
          </Link>
        </div>
      </div>
      {/* Table section */}
      <CategoryTable
      categories={categories}
        loading={loading}
        onDeleteClick={onDeleteClick}
      />
      {/* Pagination section */}
      <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={totalPages}
      />
    </div>
  )
}

export default CategoriesPage