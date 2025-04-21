import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utilities/AddtoDB";
import Book from "../Books/Book";

const Readlist = () => {
    const [sort,setSort]=useState("")
    const [data, setData] = useState([]);
    const [readList, setReadList] = useState([]); // Fixed typo in state name (reatList -> readList)
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                // Move the readList logic here
                const storedBookData = getStoredBook();
                const convertedStoredBook = storedBookData.map((book) => parseInt(book));
                const myReadlist = data.filter(book => convertedStoredBook.includes(book.bookId)); // Fixed typo (booId -> bookId)
                setReadList(myReadlist);
            });
    }, []);
    const handleSort=(sortType)=>{
        setSort(sortType);
    }

    // console.log(readList);
    
    return (
        <div className="py-5 m-5">
            <div className="w-10/12 mx-auto text-center">
            <details className="dropdown text-center">
  <summary className="btn m-1">Sort by: {sort? sort: ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort(readList.ratings)}>Ratings</a></li>
    <li><a onClick={()=>handleSort(readList.pages)}>Pages</a></li>
  </ul>
</details>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Your ReadList</Tab>
                    <Tab>WishList</Tab>
                </TabList>
                <TabPanel>
                    <h2 className="font-bold text-2xl py-4">You already {readList.length} books</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        readList.map((b)=> <Book key={b.bookId} singleBook={b}></Book>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Readlist;