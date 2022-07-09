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
    const { data } = await axios.get(`${URL_PUBLIC}/api/comic/${slug}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
