// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useCategoryContext } from '../../context/CategoryProvider'

// eslint-disable-next-line react/prop-types
function HeaderCategoryForm({idCategory}) {
  const {categoryForm} = useCategoryContext();
  return (
    <div className="w-auto h-20  justify-between items-center inline-flex">
      <div className="text-black text-5xl font-bold font-['Roboto'] leading-[62.40px]">
        {idCategory&& (
          <h1>
            Update Category:  {categoryForm.name}{" "}
          </h1>
        )}
        {!idCategory && <h1>New Category</h1>}
      </div>
    </div>
  )
}

export default HeaderCategoryForm