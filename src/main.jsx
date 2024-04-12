import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Routes from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { DataContext } from "./AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContext.Provider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </DataContext.Provider>
);
