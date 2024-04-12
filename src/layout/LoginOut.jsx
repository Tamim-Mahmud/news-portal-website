import React from "react";
import Header from "../shared/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../shared/RightNav";
import Footer from "../shared/Footer";

const LoginOut = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default LoginOut;
