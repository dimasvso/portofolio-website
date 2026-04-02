import { createBrowserRouter } from "react-router-dom";
import Template from "../Template.jsx";
import Home from "../page/Home.jsx";
import Portofolio from "../page/Portofolio.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/portofolio",
            element: <Portofolio />
        },
    ],
  },
]);
