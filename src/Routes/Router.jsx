import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import ContactUs from "../Pages/ContactUs/ContactUs";
import LogIn from "../Pages/LogIn/LogIn ";
import Register from "../Pages/Register/Register";
import RoomsDetails from "../Pages/Rooms/RoomsDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement : <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
             
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/about-us',
                element: <About></About>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/rooms`)

            },
            {
                path: '/room-details/:id',
                element: <RoomsDetails></RoomsDetails>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/room-details/${params.id}`)

            },
            {
                path: '/my-bookings',
                element: <PrivateRoute> <MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
        ]
    },
]);

export default router;