// eslint-disable-next-line no-unused-vars
import React from 'react'
import TableSpinner from '../spinner/TableSpinner';
import { Link } from 'react-router-dom';

const headerTable = [
    "Product",
    "Description",
    "Products",
    "Actions",
  ];
// eslint-disable-next-line react/prop-types
function CategoryTable({ categories, loading, onDeleteClick }) {
  return (
    <div className=" bg-white rounded-2xl shadow p-8 animated fadeInDown w-full">
      <table className="">
        <thead className="bg-light ">
          <tr className="">
            {headerTable.map((header, index) => (
              <th key={index} className="  text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {loading && (
          <tbody>
            <tr>
              <td colSpan="7" className="text-center w-full">
                <TableSpinner />
              </td>
            </tr>
          </tbody>
        )}
        {!loading && (
          <tbody className="">
            {!loading &&
              // eslint-disable-next-line react/prop-types
              categories.map((c, index) => (
                <tr key={c.id} className="" >
                  <td className="">
                    <div className="flex justify-start items-center">
                      <div>
                        {c.name} 
                      </div>
                    </div>
                  </td>
                  <td>{c.description} ...</td>
                  <td>{c.products}</td>
                  <td className="flex items-center">
                    <Link
                      to={"/categories/update/" + c.id}
                      className="w-auto px-3.5 py-2 mr-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow justify-center items-center gap-2 flex"
                    >
                      <div className="text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]">
                        Edit
                      </div>
                    </Link>
                    <button
                      onClick={(ev) => onDeleteClick(c.id)}
                      className="w-auto px-3.5 py-2 bg-red-600 hover:bg-red-500 active:bg-red-700  rounded-lg shadow justify-center items-center gap-2 flex"
                    >
                      <div className="text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]">
                        Delete
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        )}
      </table>
    </div>
  )
}

export default CategoryTable