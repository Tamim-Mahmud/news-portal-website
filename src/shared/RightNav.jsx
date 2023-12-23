import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import qzone1 from "../assets/qZone1.png"
import qzone2 from "../assets/qZone2.png"
import qzone3 from "../assets/qZone3.png"

const RightNav = () => {
  return (
    <div>
      <h2 className="text-xl mb-3 font-semibold">Login With</h2>

      <div className="">
        <button className="btn btn-outline btn-primary text-white w-full">
          <FcGoogle className="inline w-10" /> Login with Google
        </button>
        <button className="btn btn-outline btn-primary text-white w-full mt-2">
          <FcGoogle className="inline w-10" /> Login with Github
        </button>
      </div>
      <div className="mt-3">
        <h2 className="text-xl mb-3 font-semibold">Find us on</h2>
        <div className="flex flex-col gap-y-2">
          <button className="btn btn-outline btn-primary text-white">
            <ImFacebook2 />
            Facebook
          </button>
          <button className="btn btn-outline btn-primary text-white">
            {" "}
            <FaTwitterSquare />
            Twitter
          </button>
          <button className="btn btn-outline btn-primary text-white">
            <FaInstagram />
            Instagram
          </button>
        </div>
        <div className=" mt-5">
          <h2 className="text-xl mb-3 font-semibold">Q-Zone</h2>
          <div className="">
            <img src={qzone1} alt="" />
            <img src= {qzone2} alt="" />
            <img src={qzone3} alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
