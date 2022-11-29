import DashBoardLayout from "../../layouts/DashBoardLayout";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import Allsellers from "../../Pages/DashBoard/AllSellers/Allsellers";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import Payments from "../../Pages/DashBoard/Payments/Payments";
import ReportedProduct from "../../Pages/DashBoard/ReportedProduct/ReportedProduct";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SpecificCategory from "../../Pages/Products/SpecificCatagory/SpecificCategory";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../PrivateRoutes/AdminRoute";
import BuyerRoute from "../PrivateRoutes/BuyerRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layouts/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
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
            },
            {
                path: '/dashboard/reported',
                element: <AdminRoute><ReportedProduct></ReportedProduct></AdminRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payments></Payments></BuyerRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])
export default router;