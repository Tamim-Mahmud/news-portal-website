import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const NewsDetails = () => {
  const data = useLoaderData();
  return (
    <div>
      <h2>Dragon News</h2>

      <div className="border border-slate-200 p-2 rounded-md mt-2">
        <div className="card p-1 mb-20">
          <img className="p-3" src={data.image_url} alt="" />
          <h2 className="card-title mt-2 mb-3">{data.title}</h2>
          <h3>{data.details}</h3>
        </div>

        <Link className="btn btn-accent" to={`/category/${data.category_id}`}>
          {" "}
          <IoArrowBackOutline />
          All news in this category
        </Link>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};

export default NewsDetails;
