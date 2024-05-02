// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom';
import HeaderCategoryForm from '../../components/header/HeaderCategoryForm';
import CategoryForm from '../../components/form/CategoryForm';

function CategoriesManipulation() {
  let { id } = useParams();
  let idCategory = id ? id : null;
return (
  <div>
    <div className="w-full flex justify-start items-center">
      <HeaderCategoryForm idCategory={idCategory} />
    </div>
    <div className="flex justify-start items-start w-full gap-4">
      <CategoryForm idCategory={idCategory}/>
    </div>
  </div>
);
}

export default CategoriesManipulation