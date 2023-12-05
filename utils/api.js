export const getNews = async (url) => {
  try {
    const response = await fetch(url, {cache: 'no-store'});
    const data = await response.json();
    return data.articles;
  } catch (error) {
    return [];
  }
};
