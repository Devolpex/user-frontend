// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ClientTable from "../../components/table/ClientTable";
import clientInfos from "../../../test/data/clients.json";
import Pagination from "../../components/pagination/Pagination";
import SearchInput from "../../components/inputs/SearchInput";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

function ClientList() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setClients(clientInfos);
  }, [clientInfos]);
  console.log("Client Infos", clients);

  const onDeleteClick = (client) => {};

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      {/* Header section */}
      <Header title={"Manage Clients"} />
      {/* Serach and buttons section */}
      <div className="w-full py-4 flex justify-between items-center">
        <SearchInput />
        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            className="w-auto px-3.5 py-2 mr-2 bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg shadow justify-center items-center gap-2 flex text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]"
          >
            Delete All
          </button>
          <Link
            to={"/clients/new"}
            className="w-auto px-3.5 py-2 mr-2 bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-lg shadow justify-center items-center gap-2 flex text-white text-xs font-bold font-['Roboto'] uppercase leading-[18px]"
          >
            New Client
          </Link>
        </div>
      </div>
      {/* Table section */}
      <ClientTable
        clients={clients}
        loading={loading}
        onDeleteClick={onDeleteClick}
      />
      {/* Pagination section */}
      <Pagination currentPage={1} totalPages={10} setCurrentPage={() => {}} />
    </div>
  );
}

export default ClientList;
