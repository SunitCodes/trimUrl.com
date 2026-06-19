import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Link2,
  Copy,
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const dashBoardNavigateHandler = () => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#020B1F] text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_40%)]" />

        <div className="max-w-6xl mx-auto px-5 lg:px-10 pt-20 pb-28 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="bg-white/5 border border-white/10 text-slate-300 px-4 py-2 rounded-full text-xs tracking-wide">
                ✨ NEW V2.0 IS LIVE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl"
            >
              Shorten your links,
              <br />
              broaden your reach.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg max-w-2xl mt-6 leading-8"
            >
              trimUrl.com provides lightning-fast URL shortening with analytics,
              branded links, and secure sharing infrastructure for developers
              and creators.
            </motion.p>

            {/* URL Box */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-14 w-full max-w-3xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-[#0A132B] rounded-2xl px-5 flex items-center">
                  <Link2 size={18} className="text-slate-500 mr-3" />

                  <input
                    type="text"
                    placeholder="Paste your long URL here..."
                    className="bg-transparent w-full py-5 outline-none text-slate-200 placeholder:text-slate-500"
                  />
                </div>

                <button
                  onClick={dashBoardNavigateHandler}
                  className="bg-blue-500 hover:bg-blue-600 transition rounded-2xl px-8 py-5 text-lg font-semibold flex items-center justify-center gap-2"
                >
                  Shorten Now
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="mt-5 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between">
                <p className="text-slate-300 text-sm truncate">
                  trimUrl.com/x7B2k9
                </p>

                <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition">
                  <Copy size={16} />
                  Copy
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-10 mt-16">
              <div className="text-center">
                <h2 className="text-5xl font-bold">50M+</h2>

                <p className="text-slate-400 tracking-[3px] mt-2 text-sm uppercase">
                  Links Shortened
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-5xl font-bold">200K+</h2>

                <p className="text-slate-400 tracking-[3px] mt-2 text-sm uppercase">
                  Active Users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-5 lg:px-10 pb-28"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Built for scale and speed.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
              <BarChart3 className="text-blue-400" />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Real-time Analytics
            </h3>

            <p className="text-slate-400 leading-7">
              Monitor clicks, geographic data, devices, and referrers with
              precision analytics designed for performance tracking.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
              <Link2 className="text-blue-400" />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Branded Links
            </h3>

            <p className="text-slate-400 leading-7">
              Create custom branded domains and memorable short URLs that boost
              user trust and click-through rates.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
              <ShieldCheck className="text-blue-400" />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Safe & Secure
            </h3>

            <p className="text-slate-400 leading-7">
              Enterprise-grade encryption and anti-phishing protection ensure
              every shortened URL stays secure and trusted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-20 text-center backdrop-blur-xl">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Ready to amplify your links?
          </h2>

          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Join thousands of developers and creators scaling their digital
            presence using trimUrl
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10">
            <button
              onClick={dashBoardNavigateHandler}
              className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-full text-lg font-semibold"
            >
              Start for free
            </button>

            <button className="flex items-center gap-2 text-slate-300 hover:text-white transition">
              View Developer API
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;