import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/spinner";

export const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`).then(() => {
      setLoading(false);
      navigate("/").catch((error) => {
        setLoading(false);
        alert("error occured ,please check console");
        console.log(error);
      });
    });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col text-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          {" "}
          Are you sure you want to delete this book?{" "}
        </h3>
        <button
          className="p-4 text-white mt-5 rounded-lg w-full bg-red-500"
          onClick={handleDeleteBook}
        >
          Delete It{" "}
        </button>
      </div>
    </div>
  );
};
