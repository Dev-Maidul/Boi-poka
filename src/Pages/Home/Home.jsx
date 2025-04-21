import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Banner from '../../Components/Header/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    // const data= useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;