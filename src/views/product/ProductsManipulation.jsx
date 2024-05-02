// eslint-disable-next-line no-unused-vars
import React from 'react'
import ManipulationHeader from '../../components/header/ManipulationHeader'
import ProductForm from '../../components/form/ProductForm'
import ProductImageFrom from '../../components/form/ProductImageFrom'

function ProductsManipulation() {
  return (
    <div className='flex flex-col justify-center items-start gap-8 p-8'>
      <ManipulationHeader id={false} infos={{service: 'Product'}} />
      <div className='flex flec-col justify-between items-center w-full '>
      <ProductForm/>
      <ProductImageFrom/>
      </div>

    </div>
  )
}

export default ProductsManipulation