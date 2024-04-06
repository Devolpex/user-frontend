// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ClientTable from "../../components/table/ClientTable";
import clientInfos from "../../../test/data/clients.json";
import Pagination from "../../components/pagination/Pagination";
import SearchInput from "../../components/inputs/SearchInput";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import axiosClient from "../../api/axios";
import ConfirmNotification from "../../components/notifications/ConfirmNotification";
import { useStateContext } from "../../context/ContextProvider";
import Success from "../../components/alert/Success";

function ClientList() {
  const {success,_setSuccess} =useStateContext();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  //current page and total pages is used for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const carouselPages = 5;

  // Delete notification state and functions
  const [confirmNotification, setConfirmNotification] = useState(false);
  const [deleteClientId, setDeleteClientId] = useState(null);

  /**
   * This function is used to handle the confirm notification.
   * The confirm notification is a modal that appears when the user clicks on the delete button.
   * When the user clicks on the confirm button, the deleteClient function is called.
   * deleteClient function is used to delete the client from the API.
   */
  const handleConfirm = () => {
    setConfirmNotification(false);
    deleteClient(deleteClientId);
  };

  /**
   * This function is used to handle the cancel notification.
   * The cancel notification is a modal that appears when the user clicks on the delete button.
   * When the user clicks on the cancel button, the handleCancel function is called.
   * _setSuccess function is used to show a success message from the context ContextProvider.jsx.
   */
  const handleCancel = () => {
    setConfirmNotification(false);
    _setSuccess("Delete action cancelled");
  };

  /**
   * this function render the getClient function when the page is loaded
   * currentPage is used to get the current page number
   */

  // useEffect(() => {
  //   getClients(currentPage);
  // }, [currentPage]);

  /**
   * This function is used to fetch data from the API.
   * The API returns a response with the data and metadata, such as total pages and current page,
   * which are then set in the state.
   * Note: You must develop the error card to handle API errors.
   */
  const getClients = (page) => {
    setLoading(true);
    axiosClient
      .get(`/clinets?page=${page}`)
      .then(({ data }) => {
        console.log("Clients", data);
        setClients(data.clients);
        setLoading(false);
        setTotalPages(data.totalPages);
      })
      .catch(() => {
        setLoading(false);
        // Show error card
      });
  };

  /**
   * 
   * @param {bigint} id
   * When the user cliciks on the delete button in the table, the onDeleteClick function is called
   * this funstion open the Confirm Notification by change the value of state confirmNotification to true
   * then set the deleteClientId to the id of the client that the user wants to delete 
   */
  const onDeleteClick = (id) => {
    setConfirmNotification(true);
    setDeleteClientId(id);
  };

  /**
   * 
   * @param {bigint} id 
   * This function is used to delete a client from the API
   * The client is deleted by calling the delete method on the axiosClient instance
   * then the getClients function is called to fetch the updated data from the API
   * the success message is return from response of the API like this 
   * { "message": "Client deleted successfully"}
   */
  const deleteClient = (id) => {
    axiosClient
      .delete(`/clients/${id}`)
      .then(() => {
        getClients(currentPage);
        _setSuccess("Client deleted successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Test Data Functions

  // Get Clients
  useEffect(() => {
    setClients(clientInfos);
  }, [clientInfos]);
  // console.log("Client Infos", clients);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      {confirmNotification && (
        <ConfirmNotification
          message={"You are sure you want to delete this client?"}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
      {success && (
        <Success message={success} />
      )}
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
