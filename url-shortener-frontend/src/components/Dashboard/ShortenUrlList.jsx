import React from "react";
import ShortenItem from "./ShortenItem";

const ShortenUrlList = ({ data = [] }) => {
  return (
    <div className="mt-8 bg-[#111C33] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="grid grid-cols-12 px-6 py-5 border-b border-white/10 text-slate-400 text-sm font-semibold">
        <div className="col-span-5">Original URL</div>
        <div className="col-span-3">Shortened URL</div>
        <div className="col-span-2">Created</div>
        <div className="col-span-1">Clicks</div>
        <div className="col-span-1 text-center">Actions</div>
      </div>

      {/* Rows */}
      <div>
        {data.map((item) => (
          <ShortenItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ShortenUrlList;