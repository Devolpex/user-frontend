import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../api/axios";
import { useStateContext } from "../../context/ContextProvider.jsx";
import Error from "../alert/Error.jsx";

function ClientForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [client, setClient] = useState({
    last_name: "",
    first_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState([]);
  const { _setSuccess } = useStateContext();
  const [loading, setLoading] = useState(false);

  // if (id) {
  //   useEffect(() => {
  //     setLoading(true);
  //     axiosClient
  //       .get(`/admin/${id}`)
  //       .then(({ data }) => {
  //         setLoading(false);
  //         setAdmin(data.user);
  //         // console.log("Admin Data Update",data.user)
  //       })
  //       .catch(() => {
  //         setLoading(false);
  //       });
  //   }, []);
  // }

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = { ...client };
    console.log("Payload:", payload);
    if (id) {
      axiosClient
        .put(`/users/${id}`, payload)
        .then(({ data }) => {
          // console.log("Succes",data.success);
          // _setSuccess(data.success);
        })
        .catch((err) => {
          const response = err.response;
          console.log("Error Users", err);
          console.log("Error Users", response);
        });
    } else {
      console.log("Payload:", payload);
      axiosClient
        .post("/users", payload)
        .then(({ data }) => {
          // console.log("Response", response);
          _setSuccess(data.success);
          navigate("/clients");
        })
        .catch((err) => {
          setErrors(err.response.data.errors);
          // console.log("Error",err.response.data.errors);
        });
    }
  };

  setTimeout(() => {
    setErrors(null);
  }, 10000);

  return (
    <>
      {errors && (
        <div className="fixed right-4 bottom-4 z-50 flex flex-col-reverse justify-end items-end space-y-4">
          {errors.map((e) => (
            <Error message={e} key={e} />
          ))}
        </div>
      )}
      <div className="w-full h-20  justify-between items-center inline-flex">
        <div className="text-black text-5xl font-bold font-['Roboto'] leading-[62.40px]">
          {id && (
            <h1>
              Update Client: {client.first_name} {client.last_name}{" "}
            </h1>
          )}
          {!id && <h1>New Client</h1>}
        </div>
      </div>
      <div className="card animated fadeInDown w-1/2">
        {loading && <div className="text-center">Loading...</div>}

        {!loading && (
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 ">
            <div className="grid grid-colms-1 gab-8 ">
              <div className="flex flex-col justify-center items-center gap-2">
                <input
                  value={client.first_name}
                  onChange={(ev) =>
                    setClient({ ...client, first_name: ev.target.value })
                  }
                  placeholder="Enter the client first name"
                  className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
                />
                <input
                  value={client.last_name}
                  onChange={(ev) =>
                    setClient({ ...client, last_name: ev.target.value })
                  }
                  placeholder="Enter the client last name"
                  className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
                />
              </div>

              <input
                value={client.email}
                onChange={(ev) =>
                  setClient({ ...client, email: ev.target.value })
                }
                placeholder="Email"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />
              <input
                value={client.phone}
                onChange={(ev) =>
                  setClient({ ...client, phone: ev.target.value })
                }
                placeholder="Phone"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />

              <input
                type="password"
                onChange={(ev) =>
                  setClient({ ...client, password: ev.target.value })
                }
                placeholder="Password"
                className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
              />
              <input
                type="password"
                onChange={(ev) =>
                  setClient({ ...client, confirm_password: ev.target.value })
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
        )}
      </div>
    </>
  );
}

export default ClientForm;
