import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className=""><Header></Header></div>
      <div className="">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">The Dragon News</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="mx-auto mb-5 font-light">
                <h2>Not have an account ?</h2>
                <Link to="/register">
                  <p className="text-center hover:text-blue-700 hover:underline">
                    SignUp
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=""><Footer></Footer></div>
    </div>
  );
};

export default Login;
