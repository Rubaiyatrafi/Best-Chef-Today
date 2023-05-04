/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    // if (email !== email) {
    //   setError("email does not exist");
    //   return;
    // }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleGithubSignin = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="mt-10">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold"> Please Login</h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="text-right">
                  <a href="#" className="text-right link link-hover ">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <p className="text-red-500">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <div className="form-control mt-10">
                <div className="text-center text-xs mb-2 text-red-600">
                  <h1>or Signup with</h1>
                </div>
                <button
                  onClick={handleGoogleSignin}
                  className="btn btn-outline btn-secondary"
                >
                  Login with Google{" "}
                  <span className="text-xl ml-2 text-rose-400">
                    <FaGoogle></FaGoogle>
                  </span>
                </button>
              </div>
              <div className="form-control mt-1">
                <button
                  onClick={handleGithubSignin}
                  className="btn btn-outline btn-secondary"
                >
                  Login with github{" "}
                  <span className="text-xl ml-2 text-rose-400">
                    <FaGithub></FaGithub>
                  </span>
                </button>
              </div>
            </form>
            <p className="text-center mb-5">
              <span className="text-indigo-600">New to this site ?</span>{" "}
              <Link to="/register" className="font-bold">
                {" "}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
