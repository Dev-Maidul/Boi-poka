import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  // console.log(data);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);
  return (
    <div>
      <h1 className="font-bold text-center text-4xl py-4">Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((singleBook) => (
          <Book singleBook={singleBook} key={singleBook.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
