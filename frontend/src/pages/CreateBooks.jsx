import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";
import { useSnackbar } from "notistack";

export const CreateBooks = () => {
  const [title, setTtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    try {
      const data = {
        title,
        author,
        publishYear,
      };
      setLoading(true);
      axios
        .post(`http://localhost:5555/books`, data)

        .then(() => {
          setLoading(false);
          enqueueSnackbar("Book Created Successfully", { variant: "success" });
          navigate("/");
        });
    } catch (error) {
      setLoading(false);
      // alert("an error occured ,please check the console");
      enqueueSnackbar("error", { variant: "error" });
      console.log(error);
    }
  };
  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className="my-4 text-3xl">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4 ">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">
            title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTtitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4 ">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">
            author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4 ">
          <label htmlFor="publishYear" className="text-xl mr-4 text-gray-500">
            Publish Year
          </label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          {" "}
          Create Book{" "}
        </button>
      </div>
    </div>
  );
};
