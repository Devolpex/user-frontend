
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/auth/Login";
import ForgetPassword from "../views/auth/ForgetPassword";
import CodeValidation from "../views/auth/CodeValidation";
import NewPassword from "../views/auth/NewPassword";
import UserLayout from "../layouts/UserLayout";
import UserList from "../views/user/UserList";
import Register from "../views/auth/Register";
import Profile from "../views/user/Profile";


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
        element: <UserLayout/>,
        children: [
            {
                path: "/users",
                element: <UserList/>
            },
            {
                path: "/users/new",
                element: <UserList key={"New user"}/>
            
            },
            {
                path: "/users/:id",
                element: <UserList key={"Update user"}/>
            },
            {
                path: "/profile",
                element: <Profile/>
            }
        ]
    }
])

export default routes;
