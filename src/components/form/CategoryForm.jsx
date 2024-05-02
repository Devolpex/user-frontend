// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../api/axios";
import Spinner from "../spinner/Spinner";
import Error from "../alert/Error";
import { useCategoryContext } from "../../context/CategoryProvider";
import productService from '../../services/productService';

// eslint-disable-next-line react/prop-types
function CategoryForm({idCategory}) {
  const navigate = useNavigate();
  const {categoryForm,_setCategoryForm,_resetCategoryForm } = useCategoryContext();
  const { _setSuccess } = useStateContext();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (idCategory) {
      handelGetCategoryById(idCategory);
    }
  },[idCategory]);

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = { ...categoryForm };
    console.log("payload", payload);
    setLoading(true);
    if (idCategory) {
      putCategory(idCategory, payload);
    } else {
      postCategory(payload);
    }
  };
  const handelGetCategoryById = (idCategory) => {
    getCategoryById(idCategory);
  };

  setTimeout(() => {
    setErrors(null);
  }, 10000);

  // API Functions
  const postCategory = (payload) => {
    productService
      .post("/categories", payload)
      .then(({ data }) => {
        _setSuccess(data.success);
        console.log("Category Data", data);
        navigate(data.redirectTo);
        _resetCategoryForm();
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        setLoading(false);
      });
  };

  const putCategory = (id, payload) => {
    productService
      .put(`/categories/${id}`, payload)
      .then(({data}) => {
        console.log("Update Admin Data", data);
        _setSuccess(data.success);
        console.log("Update Admin Data", data);

        setLoading(false);
        _resetCategoryForm();
        navigate(data.redirectTo);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        setLoading(false);
      });
  };
  const getCategoryById = (id) => {
    productService
      .get(`/categories/${id}`)
      .then(({ data }) => {
        _resetCategoryForm()
        _setCategoryForm(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        setLoading(false);
      });
  };

  return (
    <div className="w-1/2">
      {errors && (
        <div className="fixed right-4 bottom-4 z-50 flex flex-col-reverse justify-end items-end space-y-4">
          {errors.map((e) => (
            <Error message={e} key={e} />
          ))}
        </div>
      )}
      {loading && <Spinner />}

      <div className="w-full card animated fadeInDown ">
        <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
          <div className="grid grid-colms-1 gab-8 ">
            <div className="flex flex-col justify-center items-center gap-2">
              <input
                value={categoryForm.name}
                onChange={(ev) =>
                  _setCategoryForm({ ...categoryForm, name: ev.target.value })
                }
                placeholder="Enter name of category"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />
              <input
                value={categoryForm.description}
                onChange={(ev) =>
                  _setCategoryForm({ ...categoryForm, description: ev.target.value })
                }
                placeholder="Type description of category"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />
            </div>

          </div>
          <div className="grid grid-cols-1 w-2/12">
            <button
              className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoryForm;
