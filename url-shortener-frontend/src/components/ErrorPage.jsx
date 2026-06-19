import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#020B1F] text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />

      {/* Error Card */}
      <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl">
        <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
          <FaExclamationTriangle className="text-5xl text-red-400" />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Oops! Something went wrong.
        </h1>

        <p className="text-slate-400 leading-7 mb-8">
          {message
            ? message
            : "An unexpected error has occurred."}
        </p>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-full text-white font-semibold shadow-lg shadow-blue-500/20"
        >
          Go back to home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;