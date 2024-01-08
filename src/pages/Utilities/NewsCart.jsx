import React from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import ReadMoreReact from "read-more-react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const NewsCart = ({ news }) => {
  const {
    _id,
    others_info,
    category_id,
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;
  const date = author?.published_date?.split(" ");
  console.log(news);
  return (
    <div className="p-3">
      <div className="card w-full bg-base-100 shadow-xl ">
        <div className="card-body">
          <div className="flex justify-between bg-slate-200 p-4 rounded-md items-center">
            <div className="flex gap-2 items-center">
              <img src={author.img} className="w-12 rounded-full" alt="" />
              <div className="">
                <h2>{author.name ? author.name : "System"}</h2>
                <h2>{date && date[0]}</h2>
              </div>
            </div>
            <CiBookmarkPlus />
          </div>

          <div className="">
            <h2>{title}</h2>
            <img src={image_url} className="mb-3" alt="" />
            {details.length < 250 ? (
              <p>{details}</p>
            ) : (
              <p>
                {details.slice(0, 250)} ....{" "}
                <Link to={`/news/${_id}`} className="text-blue-600">
                  Read more
                </Link>
              </p>
            )}
            <hr className="mt-5 mb-5" />
            <div className="flex justify-between items-center">
              <span className="">
                <Rating
                  initialRating={rating.number}
                  emptySymbol={<IoIosStarHalf />}
                  fullSymbol={<IoIosStar />}
                  fractions={1}
                  readonly
                />{" "}
                {rating.number}
              </span>
              <span className="flex gap-x-2 items-center"><MdOutlineRemoveRedEye /> {total_view}</span>
            </div>
          </div>
        </div>
        <figure></figure>
      </div>
    </div>
  );
};

export default NewsCart;
