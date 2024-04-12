import React, { useContext } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { DataContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const auth = useContext(DataContext);
  console.log(auth);
  return (
    <div>
      <div className="mx-auto w-fit text-center mt-5">
        <img src={logo} alt="" className="w-96 ml-6" />
        <h2>
          <small className="text-sm">
            Journalism Without Fear or Favour {auth}
          </small>
        </h2>
        <h2>
          <small className="text-center text-lg">
            {moment().format("dddd, MMMM D ,YYYY")}
          </small>
        </h2>
      </div>

      {/* marqueee */}
      <div className="flex mt-5 bg-slate-400 items-center justify-center p-2 rounded-2xl">
        <button className="btn btn-warning mr-2 ml-3">Latest</button>
        <span>
          {" "}
          <Marquee className="p-3">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </span>
      </div>
      {/* end */}
      {/* header */}
      <div className="navbar bg-base-100 justify-between">
        <div className=""></div>
        <div className="gap-4 ml-40">
          <Link className="no-underline" to="/category/0">
            Home
          </Link>
          <Link className="no-underline">About</Link>
          <Link className="no-underline"> Career</Link>
        </div>

        <div className="gap-4">
          <img src={user} alt="" className="w-12" />
          <Link to="/login" className="btn btn-primary px-6 text-white text-xs">
            Login
          </Link>
        </div>
      </div>

      {/* header */}
    </div>
  );
};

export default Header;
