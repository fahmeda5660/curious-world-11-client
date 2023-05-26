import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error" 
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Main from "./Main";
import AllToys from "../pages/Home/AllToys/AllToys";
import MyToys from "../pages/Home/MyToys/MyToys";
import AddAToy from "../pages/Home/AddAToy/AddAToy";
import PrivateRoutes from "./PrivateRoutes"
import SingleToyDeatils from "../pages/Home/SingleToyDeatils/SingleToyDeatils";
import UpdateToy from "../pages/Home/UpdateToy/UpdateToy";


const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path:'/blog',
          element: <Blog></Blog>,
        },
        {
          path:'/login',
          element: <Login></Login>,
        },
        {
          path:'/register',
          element: <Register></Register>,
        },
        {
          path:'/allToys',
          element: <AllToys></AllToys>,
        },
        {
          path:'/addAToy',
          element:<PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>,
        },
        {
          path:'/myToys',
          element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
        },
        {
          path:'/AllToys/:id',
          element:<PrivateRoutes><SingleToyDeatils></SingleToyDeatils></PrivateRoutes>,
          loader:({params})=>fetch(`https://curious-world.vercel.app/allToys/${params.id}`),

        },
        {
          path:'/categoryArchitect/:id',
          element:<PrivateRoutes><SingleToyDeatils></SingleToyDeatils></PrivateRoutes>,
          loader:({params})=>fetch(`https://curious-world.vercel.app/categoryArchitect/${params.id}`),

        },
        {
          path:'/categoryRelaxing/:id',
          element:<PrivateRoutes><SingleToyDeatils></SingleToyDeatils></PrivateRoutes>,
          loader:({params})=>fetch(`https://curious-world.vercel.app/categoryRelaxing/${params.id}`),

        },
        {
          path:'/categoryScience/:id',
          element:<PrivateRoutes><SingleToyDeatils></SingleToyDeatils></PrivateRoutes>,
          loader:({params})=>fetch(`https://curious-world.vercel.app/categoryScience/${params.id}`),

        },
        {
          path:'/MyToys/:id',
          element:<PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
          loader:({params})=>fetch(`https://curious-world.vercel.app/myToys/${params.id}`),

        },
    ]
    },
    
  ]);
  export default router;