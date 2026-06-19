import React from "react";
import {
  ShieldCheck,
  BarChart3,
  Server,
  Globe,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#020B1F] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-24 pb-4 relative z-10">
          <div className="text-center">
            {/* <p className="text-blue-400 text-sm tracking-[4px] uppercase mb-5">
              About Linklytics
            </p> */}

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
              Redefining the short link.
            </h1>
          </div>


          {/* MISSION SECTION */}
          <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-5 lg:px-4 grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <p className="text-blue-400 text-sm tracking-[4px] uppercase mb-5">
                  Our Mission
                </p>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Empowering developers with precision link architecture.
                </h2>

                <p className="text-slate-400 leading-8 mt-8 text-lg">
                  At trimUrl, we believe every click matters. Our mission is to
                  provide creators and businesses with fast, secure, and scalable
                  link management tools built for the modern web.
                </p>

                <p className="text-slate-400 leading-8 mt-5 text-lg">
                  From branded URLs to real-time analytics, our infrastructure is
                  designed to eliminate friction and maximize reliability.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-5 mt-10">
                  <div className=" border border-white/10 rounded-2xl p-6">
                    <h3 className="text-4xl font-bold text-blue-400">99.9%</h3>

                    <p className="text-slate-400 mt-2">
                      Guaranteed platform uptime
                    </p>
                  </div>

                  <div className="border border-white/10 rounded-2xl p-6 ">
                    <h3 className="text-4xl font-bold text-blue-400">&lt;1ms</h3>

                    <p className="text-slate-400 mt-2">
                      Average redirect latency
                    </p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop"
                  alt="coding"
                  className="rounded-[32px] border border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </section>
        </div>
      </section>



      {/* FEATURES SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Built for the Modern Web
            </h2>

            <p className="text-slate-400 mt-5 text-lg">
              Precision tools for modern teams and scalable systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <BarChart3 className="text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Real-time Analytics
              </h3>

              <p className="text-slate-400 leading-7">
                Track clicks, geographic data, devices, and referrals with
                enterprise-grade analytics infrastructure.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Enterprise Security
              </h3>

              <p className="text-slate-400 leading-7">
                Bank-grade SSL encryption, phishing prevention, and GDPR-ready
                compliance for every shortened link.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Server className="text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Performance Infrastructure
              </h3>

              <p className="text-slate-400 leading-7">
                Optimized edge delivery systems ensure ultra-fast redirects and
                high availability worldwide.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <BadgeCheck className="text-blue-400" />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                Branded Links
              </h3>

              <p className="text-slate-400 leading-7">
                Create memorable branded URLs that build trust and strengthen
                your online identity.
              </p>
            </div>

            {/* Large Card */}
            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Globe className="text-blue-400" />
                </div>

                <h3 className="text-3xl font-semibold mb-4">
                  Global Scale Infrastructure
                </h3>

                <p className="text-slate-400 leading-8 text-lg">
                  trimUrl powers millions of redirects daily using
                  distributed systems, CDN acceleration, and globally optimized
                  infrastructure.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-2 text-green-400">
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                All systems operational
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28 px-5 lg:px-10">
        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-12 lg:p-20 text-center backdrop-blur-xl">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Ready to scale?
          </h2>

          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Join thousands of developers and businesses using trimUrl to
            power secure and scalable link infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10">
            <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-full text-lg font-semibold">
              Get Started
            </button>

            <button className="flex items-center gap-2 text-slate-300 hover:text-white transition">
              Read Documentation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;