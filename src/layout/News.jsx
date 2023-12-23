import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import LeftNav from "../shared/LeftNav";
import RightNav from "../shared/RightNav";

import { Outlet } from "react-router-dom";

import NewsDetails from "../pages/NewsDetails";

const News = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <Outlet />
        </div>
        <div className="col-span-1">
          <RightNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
