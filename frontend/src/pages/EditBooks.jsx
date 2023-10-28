import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";

export const EditBooks = () => {
  const [title, setTtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTtitle(response.data.title);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("error happened check console");
        console.log(error);
      });
  }, []);
  const handleEditBook = () => {
    try {
      const data = {
        title,
        author,
        publishYear,
      };
      setLoading(true);
      axios
        .put(`http://localhost:5555/books/${id}`, data)

        .then(() => {
          setLoading(false);
          navigate("/");
        });
    } catch (error) {
      setLoading(false);
      alert("an error occured ,please check the console");
      console.log(error);
    }
  };
  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className="my-4 text-3xl">Edit Book</h1>
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
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          {" "}
          Edit Book{" "}
        </button>
      </div>
    </div>
  );
};
