import React, { useState } from "react";
import { useProductContext } from "../../context/ProductProvider";
import { useStateContext } from "../../context/ContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmNotification from "../notifications/ConfirmNotification";
import { Spinner } from "@material-tailwind/react";
import boxEmptyImage from "../../assets/images/box-empty.webp";

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

function ProductImageFrom() {
  // const [imageUrl, setImageUrl] = useState(default_avatar);
  //   const { imageInput, _setImageInput } = useClientContext();
  const { id } = useParams();

  const { _setImage, productForm } = useProductContext();

  const [confirmNotification, setConfirmNotification] = useState(false);
  const { _setSuccess } = useStateContext();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      _setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    _setImage(null);
  };

  const handleConfirm = () => {
    setConfirmNotification(false);
    setLoading(true);

    console.log("Payload Profile Picture : ", productForm.image);

    // _setSuccess("Image saved successfully");
  };

  const handleCancel = () => {
    setConfirmNotification(false);
    _setSuccess("Delete action cancelled");
  };

  /**
   * This function is used to save the image from the input file to the API.
   * The image is sent as a JSON object.
   */
  const saveImage = (ev) => {
    ev.preventDefault();
    setConfirmNotification(true);
    console.log("Image in File Based 64 saved: ", productForm.image);
  };

  // API functions
  /**
   * This function is used to save the image from the input file to the API.
   * The image is sent as a JSON object.
   * The API return respone jsone with the success message.
   * {"succed":"Image saved successfully"}
   */
  //   const postImage = async (payload) => {
  //     axiosClient
  //       .post(`/clients/profile-picture?id=${idClient}`, payload)
  //       .then(({ data }) => {
  //         setLoading(false);
  //         _setSuccess(data.success);
  //         navigate("/clients");
  //       })
  //       .catch((err) => {
  //         setErrors(err.response.data.errors);
  //         setLoading(false);
  //       });
  //   };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-4 mt-2 grid min-h-[140px] w-1/3 place-items-center overflow-x-scroll lg:overflow-visible">
      {confirmNotification && (
        <ConfirmNotification
          message={"You are sure you want to change your image picture?"}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
      {loading && <Spinner />}
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          className="object-cover object-center rounded-full h-96 w-96"
          src={productForm.image || boxEmptyImage}
        />

        <div className="flex justify-center items-center gap-2">
          <label htmlFor="profile-image" className="cursor-pointer ml-3">
            <FaEdit className="w-6 h-6 text-green-600" />
          </label>
          <button className="cursor-pointer ml-3" onClick={handleRemoveImage}>
            <FaTrash className="w-6 h-6 text-red-600 cursor-pointer" />
          </button>
          <form
            action=""
            onSubmit={saveImage}
            className="flex justify-center items-center"
          >
            {productForm.image || id ? (
              <button className="cursor-pointer ml-3" type="submit">
                <FaSave className="w-6 h-6 text-gray-600 cursor-pointer" />
              </button>
            ) : null}

            <input
              type="file"
              id="profile-image"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductImageFrom;
