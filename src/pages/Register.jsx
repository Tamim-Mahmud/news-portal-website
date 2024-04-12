import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement your registration logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <Header></Header>
      </div>
      <div className="">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up Now!</h1>
              <p className="py-6">Create an account to access all features</p>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" onClick={handleRegister}>
                    Register
                  </button>
                </div>
              </form>
              <div className="mx-auto mb-5 font-light">
                <h2>Already have an account ?</h2>
                <Link to="/login">
                  <p className="text-center hover:text-blue-700 hover:underline">
                    Login
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Register;
