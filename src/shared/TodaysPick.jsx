import React from "react";
import moment from "moment";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const TodaysPick = ({ data }) => {
    const {_id,image_url, title,category_id,author } = data
    let pickDate= moment(author.published_date);
  console.log(data);
  return (
    <div className="mt-5">
       
      <div className="card  bg-base-100 shadow-xl mt-10">
        <figure>
          <img
          className="h-40"
            src ={image_url}
            alt="img"
          />
        </figure>
        <div className="card-body">
          <h2 className="">{title}... <Link className="hover:text-blue-700" to={`news/${_id}`}>Read More</Link></h2>
          
          <div className="card-actions justify-end">
            <h2 className="flex items-center gap-x-3 bg-slate-400 p-1 rounded-md text-white text-left"><SlCalender />  {pickDate.format("MMMM D ,YYYY")}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysPick;
