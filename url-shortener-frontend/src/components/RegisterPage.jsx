import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight, Eye } from "lucide-react";

import api from "../api/api";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);

    try {
      const { data: response } = await api.post(
        "/api/auth/public/register",
        data
      );

      reset();
      navigate("/login");

      toast.success("Registeration Successful!");
    } catch (error) {
      console.log(error);
      toast.error("Registeration Failed!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#020B1F] flex items-center justify-center px-5 py-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]" />

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-[520px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] shadow-2xl p-8 sm:p-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Join trimUrl.com
          </h1>

          <p className="text-slate-400 mt-4 text-lg">
            Precision shortening for modern builders.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="mt-10 space-y-6"
        >
          {/* Username */}
          <div>
            <label className="text-slate-300 text-sm font-medium mb-3 block">
              Username
            </label>

            <div className="bg-[#081225] border border-white/5 rounded-2xl px-5 flex items-center">
              <User size={20} className="text-slate-500" />

              <input
                type="text"
                placeholder="cyberpunk_dev"
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

          {/* Email */}
          <div>
            <label className="text-slate-300 text-sm font-medium mb-3 block">
              Email
            </label>

            <div className="bg-[#081225] border border-white/5 rounded-2xl px-5 flex items-center">
              <Mail size={20} className="text-slate-500" />

              <input
                type="email"
                placeholder="dev@trimUrl.com"
                {...register("email", {
                  required: "*Email is required",
                })}
                className="w-full bg-transparent py-5 px-4 outline-none text-white placeholder:text-slate-600"
              />
            </div>

            {errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-slate-300 text-sm font-medium mb-3 block">
              Password
            </label>

            <div className="bg-[#081225] border border-white/5 rounded-2xl px-5 flex items-center">
              <Lock size={20} className="text-slate-500" />

              <input
                type="password"
                placeholder="••••••••••"
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

          {/* Submit */}
          <button
            disabled={loader}
            type="submit"
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 transition rounded-full py-5 text-lg font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
          >
            {loader ? "Loading..." : "Create Account"}

            {!loader && <ArrowRight size={20} />}
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Login */}
        <p className="text-center text-slate-400 text-lg">
          Already have an account?
          <Link
            className="text-blue-400 hover:text-blue-300 transition ml-2 font-medium"
            to="/login"
          >
            Login
          </Link>
        </p>

        {/* Bottom Text */}
        <p className="text-center text-slate-600 text-sm leading-6 mt-10">
          By creating an account, you agree to our Terms of Service
          <br />
          and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;