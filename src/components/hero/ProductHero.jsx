import React from "react";

function ProductHero() {
    return (
        <div className="relative min-h-screen w-full">
          <img
            src="/image/productHeroBg.jpg"
            alt=""
            className="absolute inset-0 w-full h-5/6 object-cover"
          />
    
          <div className="absolute bottom-10 left-0 right-0 mx-8 lg:mx-16 rounded-xl bg-white p-5 md:p-14 shadow-md z-10">
            <div>
              <h1 className="mb-3 font-extrabold text-4xl">Products</h1>
              <p className="font-normal text-gray-500 lg:w-5/12">
                Download our app to dive into a vast library of courses, tutorials,
                and study materials on a wide range of subjects - from programming
                and language learning to personal development and beyond
              </p>
            </div>
          </div>
        </div>
      );
}

export default ProductHero;
