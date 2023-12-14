"use client";

import React, { useContext, useEffect } from "react";
import News from "./News";
import { Context } from "@/Context/Context";
import { getNews } from "@/utils/api";
import Pagination from "./Pagination";
export const dynamic = "force-dynamic"

export default function NewsFeed() {
  const { url, news, setnews, country, category } = useContext(Context);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews(url);
      setnews(data || []);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews(url);
      setnews(data || []);
    };
    fetchNews();
  }, [url, setnews, country, category]);

  return (
    <>
      <div className="container-fluid grid gap-6 my-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {news.map((n, index) => {
          return <News key={index} news={n} />;
        })}
      </div>
      <div className="container">
        <Pagination />
      </div>
    </>
  );
}
