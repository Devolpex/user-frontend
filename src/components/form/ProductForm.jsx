import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductProvider";
import { useStateContext } from "../../context/ContextProvider";
import productService from "../../services/productService";
import Error from "../alert/Error";
import { Spinner } from "@material-tailwind/react";
import Input from "../inputs/Input";
import Select from "../inputs/Select";

function ProductForm() {
  const navigate = useNavigate();
  const {
    _setProductForm,
    productForm,
    _resetProductForm,
    _setImage,
    categories,
    _setCategories,
    _setLoading,
    loading,
    _setErrors,
  } = useProductContext();
  const { _setSuccess } = useStateContext();
  const { id } = useParams();

  const [idProduct, setIdProduct] = useState(id);

  useEffect(() => {
    getListCategories();
    if (idProduct) {
      handelGetProductById(idProduct);
    }
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = { ...productForm };
    console.log("Payload", payload);
    _setLoading(true);
    if (idProduct) {
      putProduct(idProduct, payload);
    } else {
      postProduct(payload);
    }
  };
  const handelGetProductById = (idProduct) => {
    getProductById(idProduct);
  };

  setTimeout(() => {
    _setErrors(null);
  }, 10000);

  // API Functions
  const postProduct = (payload) => {
    productService
      .post("/products", payload)
      .then(({ data }) => {
        _setSuccess(data.success);
        _resetProductForm();
        _setLoading(false);
        navigate(data.redirectTo);
      })
      .catch((err) => {
        _setErrors(err.response.data.errors);
        _setLoading(false);
      });
  };

  const putProduct = (id, payload) => {
    productService
      .put(`/products/${id}`, payload)
      .then(({ data }) => {
        _setSuccess(data.success);
        _setLoading(false);
        _resetProductForm();
        navigate(data.redirectTo);
      })
      .catch((err) => {
        _setErrors(err.response.data.errors);
        _setLoading(false);
      });
  };
  const getProductById = (id) => {
    productService
      .get(`/products/${id}`)
      .then(({ data }) => {
        _setProductForm(data.product);
        _setImage(data.product.image);
        console.log("Product you want update", productForm);
        _setLoading(false);
      })
      .catch((err) => {
        _setErrors(err.response.data.errors);
        _setLoading(false);
      });
  };

  const getListCategories = () => {
    productService
      .get(`/categories/all-categories`)
      .then(({ data }) => {
        console.log("Categories data", data);
        _setCategories(data);
      })
      .catch((err) => {
        _setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="w-1/2">
      <div className="w-full card animated fadeInDown ">
        <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
          <div className="grid grid-colms-1 gab-8 ">
            <Input
              type={"text"}
              placeholder={"Enter title of Product"} // Corrected typo
              value={productForm.name}
              onChange={(value) =>
                _setProductForm({ ...productForm, name: value })
              }
            />
            <Input
              type={"text"}
              placeholder={"Enter description of Product"} // Corrected typo
              value={productForm.description}
              onChange={(value) =>
                _setProductForm({ ...productForm, description: value })
              }
            />
            <Input
              type={"number"}
              placeholder={"Enter price  of Product"} // Corrected typo
              value={productForm.price}
              onChange={(value) =>
                _setProductForm({ ...productForm, price: value })
              }
            />
            <Input
              type={"number"}
              placeholder={"Enter quntity of Product"} // Corrected typo
              value={productForm.quantity}
              onChange={(value) =>
                _setProductForm({ ...productForm, quantity: parseInt(value) })
              }
            />
            <Select
              value={productForm.categoryId}
              onChange={(value) =>
                _setProductForm({ ...productForm, categoryId: parseInt(value) })
              }
              options={categories}
              placeholder="Select a category"
            />

            {/* <div className="flex flex-col justify-center items-center gap-2">
                <input
                  value={adminForm.firstname}
                  onChange={(ev) =>
                    _setAdminForm({ ...adminForm, firstname: ev.target.value })
                  }
                  placeholder="Enter the admin first name"
                  className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
                />
                <input
                  value={adminForm.lastname}
                  onChange={(ev) =>
                    _setAdminForm({ ...adminForm, lastname: ev.target.value })
                  }
                  placeholder="Enter the admin last name"
                  className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
                />
              </div>

              <input
                value={adminForm.email}
                onChange={(ev) =>
                  _setAdminForm({ ...adminForm, email: ev.target.value })
                }
                disabled={idAdmin}
                placeholder="Email"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />
              <input
                value={adminForm.phone}
                onChange={(ev) =>
                  _setAdminForm({ ...adminForm, phone: ev.target.value })
                }
                placeholder="Phone"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />

              <input
                type="password"
                onChange={(ev) =>
                  _setAdminForm({ ...adminForm, password: ev.target.value })
                }
                placeholder="Password"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />
              <input
                type="password"
                onChange={(ev) =>
                  _setAdminForm({
                    ...adminForm,
                    confirm_password: ev.target.value,
                  })
                }
                placeholder="Password Confirmation"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              /> */}
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

export default ProductForm;
