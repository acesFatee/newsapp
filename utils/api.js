"use server";

export const getNews = async (url) => {
  try {
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    return data.articles;
  } catch (error) {
    return [];
  }
};

export const getLength = async (url) => {
  try {
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    return data.totalResults;
  } catch (error) {
    return 0;
  }
};
