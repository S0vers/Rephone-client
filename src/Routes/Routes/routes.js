import Blog from "../../Pages/Blog/Blog";
import SpecificCategory from "../../Pages/Products/SpecificCatagory/SpecificCategory";

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
                path: '/category/:id',
                element: <SpecificCategory></SpecificCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
])
export default router;