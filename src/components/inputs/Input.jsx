import React from "react";

function Input({ value, onChange,placeholder ,type}) {
  const handleInputChange = (ev) => {
    onChange(ev.target.value);
  };

  return (
    <input
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      type={type}
      className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
    />
  );
}

export default Input;
