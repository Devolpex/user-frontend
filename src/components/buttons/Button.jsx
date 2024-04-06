import React from "react";

function Button({ color, message }) {
    return (
      <button
        className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-${color}-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 hover:bg-${color}-700 focus:shadow-none active:bg-${color}-900 active:shadow-none`}
        type="button"
      >
        {message}
      </button>
    );
  }
  
  export default Button;
  
