import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { NavLink } from 'react-router';

const Book = ({singleBook}) => {
    // console.log(singleBook);
 
    return (
      <NavLink to={`/bookDetails/${singleBook.bookId}`}>
          <div className="card bg-base-100 w-96 shadow-sm border m-3">
        <figure className='bg-gray-200 p-4'>
          <img className='w-[330px] h-[230px] p[24px] rounded-lg mt-5 '
        src={singleBook.image}
            alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {singleBook.bookName}
            <div className="badge badge-secondary">{singleBook.yearOfPublishing}</div>
          </h2>
          <p>{singleBook.author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{singleBook.category}</div>
            <div className="badge badge-outline">{singleBook.rating}<FaStarHalfAlt /></div>
          </div>
        </div>
      </div>
      </NavLink>
    );
};

export default Book;