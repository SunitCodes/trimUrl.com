import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import {
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  IoCopy,
} from "react-icons/io5";

import {
  LiaCheckSolid,
} from "react-icons/lia";

import {
  MdAnalytics,
} from "react-icons/md";

import api from "../../api/api";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useStoreContext } from "../../contextApi/ContextApi";

import { Hourglass } from "react-loader-spinner";

import Graph from "./Graph";

const ShortenItem = ({
  originalUrl,
  shortUrl,
  clickCount,
  createdDate,
}) => {
  const { token } = useStoreContext();

  const navigate = useNavigate();

  const [isCopied, setIsCopied] = useState(false);

  const [analyticToggle, setAnalyticToggle] = useState(false);

  const [loader, setLoader] = useState(false);

  const [selectedUrl, setSelectedUrl] = useState("");

  const [analyticsData, setAnalyticsData] = useState([]);

  const subDomain =
    import.meta.env.VITE_REACT_FRONT_END_URL.replace(
      /^https?:\/\//,
      ""
    );

  const analyticsHandler = (shortUrl) => {
    if (!analyticToggle) {
      setSelectedUrl(shortUrl);
    }

    setAnalyticToggle(!analyticToggle);
  };

  const fetchMyShortUrl = async () => {
    setLoader(true);

    try {
      const endDate = new Date();

      const startDate = new Date();
      startDate.setDate(endDate.getDate() - 30);

      const formatDate = (date) => {
        const pad = (num) => String(num).padStart(2, "0");

        return `${date.getFullYear()}-${pad(
          date.getMonth() + 1
        )}-${pad(date.getDate())}T${pad(
          date.getHours()
        )}:${pad(date.getMinutes())}:${pad(
          date.getSeconds()
        )}`;
      };

      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=${formatDate(startDate)}&endDate=${formatDate(endDate)}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      setAnalyticsData(data);

      setSelectedUrl("");

      console.log(data);
    } catch (error) {
      navigate("/error");
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (selectedUrl) {
      fetchMyShortUrl();
    }
  }, [selectedUrl]);

  return (
    <div className="border-b border-white/5 last:border-none">
      {/* Table Row */}
      <div className="grid grid-cols-12 px-6 py-6 items-center hover:bg-white/[0.02] transition">
        {/* Original URL */}
        <div className="col-span-5 pr-6">
          <p className="text-slate-400 text-sm truncate">
            {originalUrl}
          </p>
        </div>

        {/* Short URL */}
        <div className="col-span-3">
          <Link
            target="_blank"
            to={
              import.meta.env.VITE_REACT_FRONT_END_URL +
              "/s/" +
              `${shortUrl}`
            }
            className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 transition"
          >
            {subDomain + "/s/" + `${shortUrl}`}

            <FaExternalLinkAlt className="text-xs" />
          </Link>
        </div>

        {/* Created */}
        <div className="col-span-2">
          <p className="text-slate-400 text-sm">
            {dayjs(createdDate).format("MMM DD, YYYY")}
          </p>
        </div>

        {/* Clicks */}
        <div className="col-span-1">
          <div className="bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold px-3 py-1 rounded-full w-fit">
            {clickCount}
          </div>
        </div>

        {/* Actions */}
        <div className="col-span-1 flex items-center justify-center gap-4">
          <CopyToClipboard
            onCopy={() => setIsCopied(true)}
            text={`${import.meta.env.VITE_REACT_FRONT_END_URL +
              "/s/" +
              `${shortUrl}`
              }`}
          >
            <button className="text-slate-400 hover:text-white transition">
              {isCopied ? (
                <LiaCheckSolid className="text-lg" />
              ) : (
                <IoCopy className="text-lg" />
              )}
            </button>
          </CopyToClipboard>

          <button
            onClick={() => analyticsHandler(shortUrl)}
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <MdAnalytics className="text-lg" />
          </button>
        </div>
      </div>

      {/* Analytics Graph */}
      <div
        className={`transition-all duration-300 overflow-hidden ${analyticToggle ? "max-h-[700px] p-6 pt-0" : "max-h-0"
          }`}
      >
        {loader ? (
          <div className="h-[300px] flex justify-center items-center">
            <Hourglass
              visible={true}
              height="50"
              width="50"
              ariaLabel="hourglass-loading"
              colors={["#306cce", "#72a1ed"]}
            />
          </div>
        ) : (
          <>
            {analyticsData.length === 0 ? (
              <div className="h-[300px] flex flex-col justify-center items-center text-center">
                <h1 className="text-white text-2xl font-semibold mb-2">
                  No Data For This Time Period
                </h1>

                <h3 className="text-slate-400 max-w-md">
                  Share your short link to view where your
                  engagements are coming from
                </h3>
              </div>
            ) : (
              <Graph graphData={analyticsData} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShortenItem;