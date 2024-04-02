
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/auth/Login";
import ForgetPassword from "../views/auth/ForgetPassword";
import CodeValidation from "../views/auth/CodeValidation";
import NewPassword from "../views/auth/NewPassword";
import Register from "../views/auth/Register";
import ClientLayout from "../layouts/ClientLayout";
import ClientEdit from "../views/client/ClientEdit";
import Profile from "../views/client/Profile";
import ClientList from "../views/client/ClientList";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Navigate to="/" />
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/forget-password",
                element: <ForgetPassword />
            },
            {
                path: "/code-validation",
                element: <CodeValidation />
            },
            {
                path: "/new-password",
                element: <NewPassword />
            }
        ]
    },
    {
        path: "/",
        element: <ClientLayout/>,
        children: [
            {
                path: "/clients",
                element: <ClientList/>
            },
            {
                path: "/clients/new",
                element: <ClientEdit key={"New user"}/>
            
            },
            {
                path: "/clients/:id",
                element: <ClientEdit key={"Update user"}/>
            },
            {
                path: "/profile",
                element: <Profile/>
            }
        ]
    }
])

export default routes;
