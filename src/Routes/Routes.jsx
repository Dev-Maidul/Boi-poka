import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Bookdetails from '../Pages/Bookdetails/Bookdetails';
import Readlist from '../Pages/Readlist/Readlist';
  
export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
            path: '/about',
            Component: About
        },
        {
            path: '/bookDetails/:id',
            Component: Bookdetails,
        },
        {
          path:'readList',
          Component: Readlist,
        }
      ]
    },
  ]);