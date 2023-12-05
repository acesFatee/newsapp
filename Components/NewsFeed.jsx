"use client";

import React, { useContext, useEffect } from "react";
import News from "./News";
import { Context } from "@/Context/Context";
import { getNews } from "@/utils/api";

export default function NewsFeed() {
  const { url, news, setnews } = useContext(Context);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews(url);
      setnews(data || []);
    };

    fetchNews();
  }, [url, setnews]);

  console.log(news);

  return (
    <div className="container-fluid grid gap-4 my-4 md:grid-cols-2 xl:grid-cols-4">
      {news.map((n, index) => (
        <News key={index} news={n} />
      ))}
    </div>
  );
}
