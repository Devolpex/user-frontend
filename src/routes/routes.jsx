
import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/auth/Login";
import CodeValidation from "../views/auth/CodeValidation";
import NewPassword from "../views/auth/NewPassword";
import Register from "../views/auth/Register";
import ClientLayout from "../layouts/ClientLayout";
import ClientEdit from "../views/client/ClientEdit";
import Profile from "../views/client/Profile";
import ClientList from "../views/client/ClientList";
import RestPassword from "../views/auth/RestPassword";
import UserLayout from "../layouts/UserLayout";
import AdminsLayout from "../layouts/AdminsLayout";
import AdminsList from "../views/admins/AdminsList";
import AdminManupilation from "../views/admins/AdminManupilation";
import CategoryLayout from "../layouts/CategoryLayout";

import CategoriesPage from "../views/category/CategoriesPage";
import CategoriesManipulation from "../views/category/CategoriesManipulation";
import OneCategoryPage from "../views/category/OneCategoryPage";
import ProductLyout from "../layouts/ProductLyout";
import ProductsPage from "../views/product/ProductsPage";
import ProductsManipulation from "../views/product/ProductsManipulation";
import OneProductPage from "../views/product/OneProductPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../views/home/Home";
import Products from "../views/home/Products";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />
        ,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Navigate to="/" />
            },
            {
                path:"/products-page",
                element: <Products/>
            }
        ]
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
                path: "/rest-password",
                element: <RestPassword />
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
                path: "/clients/update/:id",
                element: <ClientEdit key={"Update user"}/>
            },
        ]
    },
    {
        path: "/",
        element: <UserLayout/>,
        children: [
            {
                path: "/profile",
                element: <Profile/>
            }
        ]
    },
    {
        path:"/",
        element:<AdminsLayout/>,
        children: [
            {
                path:"/admins",
                element: <AdminsList/>
            },
            {
                path: "/admins/new",
                element: <AdminManupilation key={"new"}/>
            },
            {
                path: "/admins/update/:id",
                element: <AdminManupilation key={"update"}/>
            }
        ]
    },
    {
        path: "/",
        element: <CategoryLayout/>,
        children: [
            {
                path: "/categories",
                element: <CategoriesPage/>
            },
            {
                path: "/categories/new",
                element: <CategoriesManipulation key={"New Category"}/>
            
            },
            {
                path: "/categories/:id",
                element: <OneCategoryPage/>
            },
            {
                path: "/categories/update/:id",
                element: <CategoriesManipulation key={"Update Category"}/>
            },
        ]
    },
    {
        path: "/",
        element: <ProductLyout/>,
        children: [
            {
                path: "/products",
                element: <ProductsPage/>
            },
            {
                path: "/products/new",
                element: <ProductsManipulation key={"New Product"}/>
            
            },
            {
                path: "/products/:id",
                element: <OneProductPage/>
            },
            {
                path: "/products/update/:id",
                element: <ProductsManipulation key={"Update Product"}/>
            },
        ]
    },

])

export default routes;
