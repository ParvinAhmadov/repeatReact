import { createBrowserRouter } from "react-router-dom";
import Layout from "./features/Layout";
import HomePage from "./pages/home";
import BlogsCardsDetail from "./components/HomeCards/CardDetail";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog/:id", 
        element: <BlogsCardsDetail />, 
      },
    ],
  },
]);
