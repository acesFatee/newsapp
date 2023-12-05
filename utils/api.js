export const getNews = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    return JSON.stringify({ error: error });
  }
};
