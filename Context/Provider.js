"use client";

import React, { useState } from "react";
import { Context } from "./Context";

const Provider = ({ children }) => {
  const [news, setnews] = useState([]);
  const [activecountry, setactivecountry] = useState("us");
  const [language, setlanguage] = useState("en");
  const [category, setcategory] = useState("");
  const [country, setcountry] = useState("us");
  const [url, seturl] = useState(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=73f4d741d892490bb317445bedc266d5`
  );
  const [headingcountry, setheadingcountry] = useState("https://raw.githubusercontent.com/lipis/flag-icons/d88a4d270d343828a6f9585377cd4663cce2b8ad/flags/4x3/us.svg");
  const [headingcategory, setheadingcategory] = useState("")
  return (
    <Context.Provider
      value={{
        url,
        seturl,
        news,
        setnews,
        activecountry, 
        setactivecountry,
        language,
        setlanguage,
        country,
        setcountry,
        headingcountry,
        setheadingcountry,
        category,
        setcategory,
        headingcategory, setheadingcategory
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
