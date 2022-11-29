import DashBoardLayout from "../../layouts/DashBoardLayout";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import Allsellers from "../../Pages/DashBoard/AllSellers/Allsellers";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Login from "../../Pages/Login/Login";
import SpecificCategory from "../../Pages/Products/SpecificCatagory/SpecificCategory";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../PrivateRoutes/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layouts/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/category/:id',
                element: <PrivateRoutes><SpecificCategory></SpecificCategory></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute> <Allsellers></Allsellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute> <AllBuyers></AllBuyers></AdminRoute>
            }
        ]
    }
])
export default router;