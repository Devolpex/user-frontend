import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TableSpinner from "../spinner/TableSpinner";
import CheckBox from "../inputs/CheckBox";

const headerTable = [
  "Select",
  "Client",
  "Phone",
  "Email",
  "Create At",
  "Auth",
  "Actions",
];

// eslint-disable-next-line react/prop-types
function ClientTable({ clients, loading, onDeleteClick }) {
  return (
    <div className=" bg-white rounded-2xl shadow p-8 animated fadeInDown w-full">
      <table className="">
        <thead className="bg-light ">
          <tr className="">
            {headerTable.map((header, index) => (
              <th key={index} className="  text-left">
                {index === 0 ? <CheckBox /> : header}
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
              clients.map((c, index) => (
                <tr key={c.id} className="">
                  <td>
                    {" "}
                    <CheckBox />
                  </td>
                  <td className="">
                    <div className="flex justify-start items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-3"
                        src={c.user.image}
                        alt={``}
                      />
                      <div>
                        {c.user.lastname} {c.user.firstname}
                      </div>
                    </div>
                  </td>
                  <td>{c.user.phone}</td>
                  <td>{c.user.email}</td>

                  <td>{c.user.created_at}</td>
                  <td className="">
                    {c.auth === "GOOGLE" ? (
                      <FcGoogle className="w-6 h-6" />
                    ) : c.auth === "FACEBOOK" ? (
                      <FaFacebook className="w-6 h-6" />
                    ) : c.auth === "EMAIL" ? (
                      <MdEmail className="w-6 h-6" />
                    ) : null}
                  </td>
                  <td className="flex items-center">
                    <Link
                      to={"/clients/view/" + c.id}
                      className="w-auto px-3.5 py-2 mr-2 bg-gray-600 hover:bg-gray-500 active:bg-gray-700 rounded-lg shadow justify-center items-center gap-2 flex"
                    >
                      <div className="text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]">
                        View
                      </div>
                    </Link>
                    <Link
                      to={"/clients/update/" + c.id}
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
  );
}

export default ClientTable;
