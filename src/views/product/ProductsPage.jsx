import React, { useEffect, useState } from 'react'
import ConfirmNotification from '../../components/notifications/ConfirmNotification';
import { useStateContext } from '../../context/ContextProvider';
import Success from '../../components/alert/Success';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import ProductsTable from '../../components/table/ProductsTable';
import Pagination from '../../components/pagination/Pagination';
import { useProductContext } from '../../context/ProductProvider';
import axiosClient from '../../api/axios';

function ProductsPage() {

  const [confirmNotification, setConfirmNotification] = useState(false);
  const {success,_setSuccess} = useStateContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const {_setProducts,products} = useProductContext();
  useEffect(() => {
    handleGetProducts(currentPage);
  }, [currentPage]);


  const handleGetProducts = (page) => {
    getProductsApi(page);
  };

  const getProductsApi = (page) => {
    axiosClient
      .get(`/product-service/products?page=${page}`)
      .then(({ data }) => {
        // _setAdmins(data.admins);
        _setProducts(data.products);
        console.log(data.products);
        setLoading(false);
        setTotalPages(data.totalPages);
      })
      .catch(() => {
        setLoading(false);
      });
  };


  // const handleConfirm = () => {
  //   setConfirmNotification(false);
  //   deleteProduct(deleteProductId);
  // };


  // const handleCancel = () => {
  //   setConfirmNotification(false);
  //   _setSuccess("Delete category action cancelled");
  // };

  // const onDeleteClick = (id) => {
  //   setConfirmNotification(true);
  //   setDeleteCategoryId(id);
  // };

  const deleteCategory = (id) => {
    // axiosClient
    //   .delete(`/admins/${id}`)
    //   .then(({data}) => {
    //     handleGetAdmins(currentPage);
    //     _setSuccess(data.success);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      {confirmNotification && (
        <ConfirmNotification
          message={"You are sure you want to delete this Admin?"}
            // onCancel={handleCancel}
            // onConfirm={handleConfirm}
        />
      )}
      {success && <Success message={success} />}
      {/* Header section */}
      <Header title={"Products"} />
      {/* Serach and buttons section */}
      <div className="w-full py-4 flex justify-end items-center">
        <div className="flex justify-center items-center gap-2">
          <Link
            to={"/products/new"}
            className="w-auto px-3.5 py-2 mr-2 bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-lg shadow justify-center items-center gap-2 flex text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]"
          >
            New Product
          </Link>
        </div>
      </div>
      {/* Table section */}
      <ProductsTable
        products={products}
        // loading={loading}
        // onDeleteClick={onDeleteClick}
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

export default ProductsPage