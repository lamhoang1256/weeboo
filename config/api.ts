import axios from "axios";
const URL_PUBLIC = process.env.URL_PUBLIC;

export const getHomeData = async (query: any) => {
  try {
    const { data } = await axios.get(`${URL_PUBLIC}/api/home`, { params: query });
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

export const getDataFilterPage = async (params: any) => {
  try {
    const { data } = await axios.get(`${URL_PUBLIC}/api/filter`, { params: params });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataTopComicPage = async (params: any) => {
  try {
    const { data } = await axios.get(`${URL_PUBLIC}/api/top-comic`, { params: params });
    console.log("params: ", params);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataGirlComicPage = async (query: any) => {
  try {
    const { data } = await axios.get(`${URL_PUBLIC}/api/girl-comic`, { params: query });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataBoyComicPage = async (query: any) => {
  try {
    const { data } = await axios.get(`${URL_PUBLIC}/api/boy-comic`, { params: query });
    return data;
  } catch (error) {
    console.log(error);
  }
};
