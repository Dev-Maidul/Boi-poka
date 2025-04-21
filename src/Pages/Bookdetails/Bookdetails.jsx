import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { addToStoreDb } from "../../Utilities/AddtoDB";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const Bookdetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);
  const handleMarkasRead=(id)=>{
    addToStoreDb(id);
    MySwal.fire("Added to Read list!");
  }
  return (
    <div>
      <h1 className="font-bold text-4xl text-center py-5">Book details</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-4 m-5">
        <div className="left bg-gray-300 p-5 rounded-2xl">
          <img
            className="w-[500px] h-[500px] p-4 rounded-2xl mx-auto shadow"
            src={singleBook?.image}
            alt=""
          />
        </div>

        <div className="right">
          <h1 className="font-bold text-2xl">{singleBook?.bookName}</h1>
          <p>By:{singleBook?.publisher}</p>
          <div className="divider"></div>
          <strong>{singleBook?.category}</strong>
          <div className="divider"></div>
          <p>
            <strong>Review: </strong>
            {singleBook?.review}
          </p>
          <div className="flex gap-4 items-center">
            <h1>Tags</h1>
            <div>
              {singleBook?.tags.map((tag, index) => (
                <button key={index} className="btn btn-outline btn-accent m-2">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <small>
            Number of Pages: <strong>{singleBook?.totalPages}</strong>
          </small>
          <br />
          <small>
            Publisher: <strong>{singleBook?.publisher}</strong>
          </small>
          <br />
          <small>
            Year of Publishing: <strong>{singleBook?.yearOfPublishing}</strong>
          </small>
          <br />
          <small>
            Rating: <strong>{singleBook?.rating}</strong>
          </small>
          <div className="button flex gap-4 items-center mt-4">
          <button onClick={()=>handleMarkasRead(singleBook?.bookId)} className="btn btn-neutral btn-outline">Mark as Read</button>
          <button className="btn btn-active btn-info">Wishlist</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
