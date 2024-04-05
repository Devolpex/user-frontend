// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Error from "../../components/alert/Error";
import Spinner from "../../components/Spinner";
import axiosClient from "../../api/axios";
import { useStateContext } from "../../context/ContextProvider.jsx";

// Test json
// eslint-disable-next-line no-unused-vars
import registerErrors from "../../../test/json/errors/register.json";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [client, setClient] = useState({
    last_name: "",
    first_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState();
  // import the function _setSuccess from the context
  const { _setSuccess } = useStateContext();
  /**
   * useNavigate is a function from react-router-dom
   * used to redirect to another page
   */
  const navigate = useNavigate();

  // When the button submit this function sent request into the api and get the response
  const onSubmit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    // set the client object into the payload {body of request} for sent to the api
    const payload = { ...client };
    console.log("Payload:", payload);

    /**
     * axios function create by defautl into axios.js file
     * this function sent the request to the api
     * and get the response
     *
     * the url of api EX: http://localhost:50000 is configure by defautl into axios.js file
     * you just need to put the endpoint of the api EX: /register,/clients?page=3
     * ?page=3 is a query parameter
     * always check the response object by console,log(response) for see the response format
     */
    axiosClient
      .post("/register", payload)
      // {data } is shortcut of response.data
      .then(({ data }) => {
        // console.log("Response", response);
        setLoading(false);
        /**
         * _setSuccess is a function from the context
         * used to store data at a high level and share it between components.
         *
         * Example: If a user is created, the application redirects you to a new page (component) to display the success message.
         * You can retrieve this message from the context.
         */
        _setSuccess(data.success);
        // /client is the routes of client list page in frontend check /src/routes/routes.jsx file
        navigate("/clients");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        // console.log("Error",err.response.data.errors);
      });
  };

  const onGoogle = (ev) => {
    ev.preventDefault();
    console.log("Google button clicked");
  };

  const onFacebook = (ev) => {
    ev.preventDefault();
    console.log("Facebook button clicked");
    // Handle Facebook API here
  };

  /**
   *   Response format:
   *   Check the file /test/json/
   *   for all the response formats
   */

  /**
   * Tests Functions
   * test only one at time
   */

  // useEffect(() => {
  //   setErrors(registerErrors.errors);
  // }, [registerErrors]);

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  return (
    <>
      {errors && (
        <div className="fixed w-1/2 right-4 bottom-4 z-50 flex flex-col-reverse justify-end items-end space-y-4">
          {errors.map((e) => (
            <Error message={e} key={e} />
          ))}
        </div>
      )}
      {loading && <Spinner />}
      <div className="w-full flex justify-center items-center">
        <div className="w-2/6 h-auto p-6 bg-white rounded-lg shadow flex-col justify-center items-center inline-flex gap-4">
          {/* Title & Description form */}
          <div className="flex-col justify-start items-start gap-3 flex w-full">
            <div className="text-neutral-800 text-2xl font-bold font-['Roboto'] leading-9">
              Sign Up
            </div>
            <div className="w-full text-start text-slate-500 text-base font-bold font-['Roboto'] leading-7">
              Nice to meet you! Enter your details to register.
            </div>
            {/* Form inputs */}
            <form className="" onSubmit={onSubmit}>
              <div id="inputs">
                <div className="grid grid-cols-2 justify-items-center content-center gap-2">
                  <input
                    value={client.first_name}
                    onChange={(ev) =>
                      setClient({ ...client, first_name: ev.target.value })
                    }
                    placeholder="First name"
                    className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
                  />
                  <input
                    value={client.last_name}
                    onChange={(ev) =>
                      setClient({ ...client, last_name: ev.target.value })
                    }
                    placeholder="Last name"
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
                  value={client.password}
                  onChange={(ev) =>
                    setClient({ ...client, password: ev.target.value })
                  }
                  placeholder="Password"
                  className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
                />
                <input
                  value={client.confirm_password}
                  onChange={(ev) =>
                    setClient({ ...client, confirm_password: ev.target.value })
                  }
                  placeholder="Confirm your password"
                  className="mb-4 outline-none bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-base transition duration-300 focus:border-gray-600"
                />
              </div>
              <div
                id="button"
                className="flex flex-col justify-center items-center gap-2"
              >
                <button
                  type="submit"
                  className="self-stretch w-full px-5 py-2.5 bg-gray-800 rounded-lg shadow justify-center items-center gap-2 inline-flex hover:bg-gray-700 active:bg-gray-900"
                >
                  <div className="text-white text-sm font-bold font-['Roboto'] uppercase leading-[21px]">
                    Register
                  </div>
                </button>
                <button
                  className=" w-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex justify-center items-center gap-3"
                  type="submit"
                  onClick={onGoogle}
                >
                  <FcGoogle className="w-6 h-6" />
                  Connect with Google
                </button>
                <button
                  className=" w-full align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex justify-center items-center gap-3"
                  type="click"
                  onClick={onFacebook}
                >
                  <FaFacebook className="w-6 h-6" />
                  Connect with Facebook
                </button>
              </div>
              <div className="w-full flex justify-center items-center p-4 ">
                <p className="mr-2 text-slate-500 text-base font-bold font-['Roboto'] leading-7">Already have an account? {" "}</p>
                <Link to={"/login"} className="text-base font-bold font-['Roboto'] leading-7 text-gray-900">
                   Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
