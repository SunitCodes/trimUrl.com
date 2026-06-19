import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#020B1F] text-white relative z-40">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight">
              trim<span className="text-blue-500">Url.com</span>
            </h2>

            <p className="text-slate-400 mt-3 max-w-sm leading-7">
              Simplifying URL shortening with modern analytics, branded
              links, and secure infrastructure for developers and creators.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <a href="/" className="hover:text-white transition">
              Home
            </a>

            <a href="/about" className="hover:text-white transition">
              About
            </a>

            <a href="/dashboard" className="hover:text-white transition">
              Dashboard
            </a>

            <a href="/" className="hover:text-white transition">
              Privacy
            </a>

            <a href="/" className="hover:text-white transition">
              Terms
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition"
            >
              <FaFacebook className="text-lg" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition"
            >
              <FaTwitter className="text-lg" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition"
            >
              <FaInstagram className="text-lg" />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © 2026 trimUrl.com All rights reserved.
          </p>

          <p className="text-slate-600 text-sm">
            Built for modern web experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;