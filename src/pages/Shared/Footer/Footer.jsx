import React from "react";
import "./Footer.css";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-600 text-white">
      <div>
        <span className="footer-title text-lg">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title text-lg">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title text-lg">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title text-lg">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
              required
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-5">
          <h1>Find Us</h1>
          <div className="icons-footer">
            <FaTwitter></FaTwitter>
            <FaGoogle></FaGoogle>
            <FaYoutube></FaYoutube>
            <FaFacebook></FaFacebook>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
