import axios from "axios";
const URL_PUBLIC = process.env.URL_PUBLIC;

export const getHomeData = async () => {
  try {
    const { data } = await axios.get(`${URL_PUBLIC}/api/home`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getComicDetail = async (slug: string) => {
  try {
    const { data } = await axios.get(`${URL_PUBLIC}/api/detail/${slug}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getComicChapter = async (slug: string, chapter: string, id: string) => {
  try {
    const { data } = await axios.get(`${URL_PUBLIC}/api/read/${slug}/${chapter}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchData = async (searchValue: string) => {
  try {
    const { data } = await axios.get(`${URL_PUBLIC}/api/search?keyword=${encodeURI(searchValue)}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
