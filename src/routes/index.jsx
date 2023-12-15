import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";

const routes = createBrowserRouter([

    {
        path: "/weatherapp",
        element: <HomePage />
    }

])

export default routes