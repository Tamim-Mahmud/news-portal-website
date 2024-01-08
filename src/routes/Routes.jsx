import React from "react";

import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import News from "../layout/News";
import Home from "../pages/Home";

import Category from "../pages/Utilities/Category";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <News />,
    children: [
      {
         path: "/news/:id",
        element: <NewsDetails /> ,
        loader :({ params }) =>
        fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
