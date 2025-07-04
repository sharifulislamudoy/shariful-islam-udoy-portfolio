import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import RentizoDetails from "../Components/Projects-Component/RentizoDetails";
import SecurePayDetails from "../Components/Projects-Component/SecurePayDetails";
import RoomivioDetails from "../Components/Projects-Component/RoomivioDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: '/projects/rentizo',
          Component: RentizoDetails,
        },
        {
          path: '/projects/securepay',
          Component: SecurePayDetails,
        },
        {
          path: '/projects/roomivio',
          Component: RoomivioDetails,
        }
    ]
  },
]);