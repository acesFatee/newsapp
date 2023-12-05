"use client";

import React, { useState, useEffect } from "react";
import { Context } from "./Context";

const Provider = ({ children }) => {
  const [url, seturl] = useState('https://newsapi.org/v2/top-headlines?country=us&apiKey=73f4d741d892490bb317445bedc266d5');
  const [news, setnews] = useState([]);

  return (
    <Context.Provider value={{
      url, seturl, 
      news, setnews
    }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
