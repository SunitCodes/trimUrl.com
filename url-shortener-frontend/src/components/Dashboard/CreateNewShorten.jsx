import React, { useState } from "react";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { Tooltip } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FiLink } from "react-icons/fi";
import api from "../../api/api";
import toast from "react-hot-toast";

const CreateNewShorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);

    try {
      const { data: res } = await api.post(
        "/api/urls/shorten",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL +
        "/s/" +
        `${res.shortUrl}`
        }`;

      navigator.clipboard.writeText(shortenUrl).then(() => {
        toast.success("Short URL Copied to Clipboard", {
          position: "bottom-center",
          className: "mb-5",
          duration: 3000,
        });
      });

      // await refetch();
      reset();
      setOpen(false);
    } catch (error) {
      toast.error("Create ShortURL Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[500px] w-[360px] relative bg-[#162338] border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.35)] pt-10 pb-8 sm:px-8 px-5"
      >
        {!loading && (
          <Tooltip title="Close">
            <button
              type="button"
              disabled={loading}
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white transition"
            >
              <RxCross2 className="text-2xl" />
            </button>
          </Tooltip>
        )}

        <div className="flex justify-center mb-5">
          <div className="bg-[#4f8cff]/20 p-4 rounded-2xl border border-[#4f8cff]/30">
            <FiLink className="text-[#6da0ff] text-3xl" />
          </div>
        </div>

        <h1 className="text-center text-white font-bold text-3xl">
          Create Short Link
        </h1>

        <p className="text-center text-slate-400 text-sm mt-2 mb-8">
          Generate clean and trackable short URLs instantly.
        </p>

        <div>
          <TextField
            label="Enter URL"
            required
            id="originalUrl"
            placeholder="https://example.com"
            type="url"
            message="Url is required"
            register={register}
            errors={errors}
          />
        </div>

        <button
          className="w-full mt-6 bg-[#4f8cff] hover:bg-[#6da0ff] transition-all duration-200 text-white py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Short URL"}
        </button>

        <p className="text-center text-slate-500 text-xs mt-5">
          Your shortened link will be copied automatically.
        </p>
      </form>
    </div>
  );
};

export default CreateNewShorten;