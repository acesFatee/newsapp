"use client";

import React, { useState } from "react";
import { Context } from "./Context";

const Provider = ({ children }) => {
  const [news, setnews] = useState([]);
  const [activecountry, setactivecountry] = useState("in");
  const [activecategory, setactivecategory] = useState("general")
  const [category, setcategory] = useState("general");
  const [country, setcountry] = useState("in");
  
  const [length, setlength] = useState(0)
  const [headingcountry, setheadingcountry] = useState("https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/in.svg");
  const [headingcategory, setheadingcategory] = useState("")
  const [theme, settheme] = useState('dark');

  const [page, setpage] = useState(1)
  const [pages, setpages] = useState(Math.floor(length / 6))
  const [pagesize, setpagesize] = useState("")
  const [url, seturl] = useState(
    `${process.env.NEXT_PUBLIC_URL}&pageSize=6&page=${page}&category=${category}&country=${country}`
  );

  return (
    <Context.Provider
      value={{
        length, setlength,
        pages, setpages,
        pagesize, setpagesize,
        page, setpage,
        activecategory, setactivecategory,
        url,
        seturl,
        news,
        setnews,
        activecountry, 
        setactivecountry,
        country,
        setcountry,
        headingcountry,
        setheadingcountry,
        category,
        setcategory,
        headingcategory, setheadingcategory,
        theme, settheme
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
