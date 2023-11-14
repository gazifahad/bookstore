import React from "react";

import SingleBooksCard from "./SingleBooksCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-col-3 xl:grid-col-4">
      {books.map((item) => (
        <SingleBooksCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default BooksCard;
