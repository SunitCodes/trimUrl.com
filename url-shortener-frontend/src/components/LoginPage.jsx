import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Lock,
  Eye,
  ArrowRight,
} from "lucide-react";

import api from "../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../contextApi/ContextApi";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);

    try {
      const { data: response } = await api.post(
        "/api/auth/public/login",
        data
      );

      console.log(response.token);

      setToken(response.token);

      localStorage.setItem(
        "JWT_TOKEN",
        JSON.stringify(response.token)
      );

      toast.success("Login Successful!");

      reset();

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#020B1F] flex items-center justify-center px-5 py-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />

      {/* Blur Effects */}
      <div className="absolute left-20 top-40 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute right-20 bottom-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[520px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] shadow-2xl p-8 sm:p-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-4 text-lg">
            Log in to manage your precision URLs.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="mt-10 space-y-6"
        >
          {/* Username */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-slate-300 text-sm font-medium">
                Username
              </label>
            </div>

            <div className="bg-[#081225] border border-white/10 rounded-2xl px-5 flex items-center">
              <User size={20} className="text-slate-500" />

              <input
                type="text"
                placeholder="Enter your username"
                {...register("username", {
                  required: "*Username is required",
                })}
                className="w-full bg-transparent py-5 px-4 outline-none text-white placeholder:text-slate-600"
              />
            </div>

            {errors.username && (
              <p className="text-red-400 text-sm mt-2">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-slate-300 text-sm font-medium">
                Password
              </label>

              <button
                type="button"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Forgot Password?
              </button>
            </div>

            <div className="bg-[#081225] border border-white/10 rounded-2xl px-5 flex items-center">
              <Lock size={20} className="text-slate-500" />

              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "*Password is required",
                  minLength: {
                    value: 6,
                    message: "*Minimum 6 characters required",
                  },
                })}
                className="w-full bg-transparent py-5 px-4 outline-none text-white placeholder:text-slate-600"
              />

              <Eye size={20} className="text-slate-500 cursor-pointer" />
            </div>

            {errors.password && (
              <p className="text-red-400 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            disabled={loader}
            type="submit"
            className="w-full mt-2 bg-blue-500 hover:bg-blue-600 transition rounded-full py-5 text-lg font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
          >
            {loader ? "Loading..." : "Login"}

            {!loader && <ArrowRight size={20} />}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-10">
          <div className="border-t border-white/10"></div>

         
        </div>

        {/* Signup */}
        <p className="text-center text-slate-400 text-lg mt-12">
          Don&apos;t have an account?
          <Link
            className="text-blue-400 hover:text-blue-300 transition ml-2 font-medium"
            to="/register"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;