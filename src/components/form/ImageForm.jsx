import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


function ImageForm() {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-4 mt-2 grid min-h-[140px] w-1/3 place-items-center overflow-x-scroll lg:overflow-visible">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          className="object-cover object-center rounded-full h-96 w-96"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
          alt="nature image"
        />
        <div className="flex justify-center items-center gap-2">
          <label htmlFor="profile-image" className="cursor-pointer ml-3">
            <FaEdit className="w-6 h-6 text-green-600" />
          </label>
          <button className="cursor-pointer ml-3">
          <FaTrash className="w-6 h-6 text-red-600 cursor-pointer" />
          </button>
          
        </div>
      </div>
      <input
        type="file"
        id="profile-image"
        className="hidden"
        accept="image/*"
        //   onChange={onImageChoose}
      />
    </div>
  );
}

export default ImageForm;
