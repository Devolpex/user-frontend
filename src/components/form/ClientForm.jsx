import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axios";
import { useStateContext } from "../../context/ContextProvider.jsx";
import Error from "../alert/Error.jsx";
import data from "../../../test/data/clientUpdate.json";
import { useClientContext } from "../../context/ClientContext.jsx";
import Spinner from "../spinner/Spinner.jsx";

// eslint-disable-next-line react/prop-types
function ClientForm({idClient}) {
  const navigate = useNavigate();
  const { client, _setClient, _restClient } = useClientContext();
  const { _setSuccess } = useStateContext();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = { ...client };
    setLoading(true);
    if (idClient) {
      putClient(idClient, payload);
    } else {
      postClient(payload);
    }
  };


  setTimeout(() => {
    setErrors(null);
  }, 10000);

  // API Functions
  const postClient = (payload) => {
    axiosClient
      .post("/client", payload)
      .then(({ data }) => {
        _setSuccess(data.success);
        navigate("/clients");
        _restClient();
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        setLoading(false);
      });
  };

  const putClient = (id, payload) => {
    axiosClient
      .put(`/client/${id}`, payload)
      .then(({ data }) => {
        _setSuccess(data.success);
        navigate("/clients");
        _restClient();
        setLoading(false);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        setLoading(false);
      });
  };

  /**
   * Test Functions
   */

  // useEffect(() => {
  //   if (idClient) {
  //     _setClient(data.client);
  //   }
  // }, [idClient])

  return (
    <div className="w-1/2">
      {errors && (
        <div className="fixed right-4 bottom-4 z-50 flex flex-col-reverse justify-end items-end space-y-4">
          {errors.map((e) => (
            <Error message={e} key={e} />
          ))}
        </div>
      )}
      {loading && <Spinner /> }

      <div className="w-full card animated fadeInDown ">
        <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
          <div className="grid grid-colms-1 gab-8 ">
            <div className="flex flex-col justify-center items-center gap-2">
              <input
                value={client.first_name}
                onChange={(ev) =>
                  _setClient({ ...client, first_name: ev.target.value })
                }
                placeholder="Enter the client first name"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />
              <input
                value={client.last_name}
                onChange={(ev) =>
                  _setClient({ ...client, last_name: ev.target.value })
                }
                placeholder="Enter the client last name"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />
            </div>

            <input
              value={client.email}
              onChange={(ev) =>
                _setClient({ ...client, email: ev.target.value })
              }
              placeholder="Email"
              className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
            />
            <input
              value={client.phone}
              onChange={(ev) =>
                _setClient({ ...client, phone: ev.target.value })
              }
              placeholder="Phone"
              className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
            />

            <input
              type="password"
              onChange={(ev) =>
                _setClient({ ...client, password: ev.target.value })
              }
              placeholder="Password"
              className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
            />
            <input
              type="password"
              onChange={(ev) =>
                _setClient({ ...client, confirm_password: ev.target.value })
              }
              placeholder="Password Confirmation"
              className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
            />
          </div>
          <div className="grid grid-cols-1 w-2/12">
            <button
              className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClientForm;
