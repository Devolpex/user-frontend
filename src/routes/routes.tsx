import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/auth/Login";
import Registration from "../views/auth/Registration";
import ForgetPassword from "../views/auth/ForgetPassword";
import CodeValidation from "../views/auth/CodeValidation";
import NewPassword from "../views/auth/NewPassword";
import UserLayout from "../layouts/UserLayout";
import UserList from "../views/user/UserList";


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
                element: <Registration />
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
        element: <UserLayout/>,
        children: [
            {
                path: "/user",
                element: <UserList/>
            },
            {
                path: "/user/new",
                element: <UserList key={"New user"}/>
            
            },
            {
                path: "/user/:id",
                element: <UserList key={"Update user"}/>
            }
        ]
    }
])

export default routes;