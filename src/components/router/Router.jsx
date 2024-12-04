// import Layout from "../layout/layout"
import SignUp from "../../components/auth/Login"
import Login from "../../components/auth/SignUp"
import { createBrowserRouter } from "react-router-dom";
import NavBar from "../../components/homepage/NavBar";
import Layout from "../layout/Layout"

const ROUTES = [
    {
        path: "/",
        element: <Layout/>
    },
    {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      }
]

export default ROUTES;