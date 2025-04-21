import React from 'react';
import bookImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex  items-center justify-around p-4 bg-[rgba(19,19,19,0.05)] rounded-2xl m-2'>
            <div className="left">
                <h1 className='font-bold text-4xl'>Books to freshen  up <br />your bookshelf</h1>
                <button className='btn btn-primary mt-2'>View The List</button>
            </div>
            <div className="right">
                <img className='w-[318px] h-[394px] rounded-md' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;