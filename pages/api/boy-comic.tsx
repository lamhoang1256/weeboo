import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { getComicItem, getPagination } from "utils/crawl";
const URL_NETTRUYEN = `${process.env.URL_NETTRUYEN}/truyen-con-trai` || "";

interface SearchData {
  data: any;
}
interface SearchError {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchData | SearchError>
) {
  const { method, query } = req;
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const data = await crawlDataBoyComicPage(query);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching boy comic page failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function crawlDataBoyComicPage(query: any) {
  try {
    const response = await axios.get(URL_NETTRUYEN, { params: query });
    const html = response.data;
    const $ = cheerio.load(html);
    let dataBoyComic: any = { comics: [], pagination: [] };
    $("#ctl00_divCenter .ModuleContent .item", html).each(function (index, element) {
      const comic = getComicItem($(element));
      dataBoyComic.comics.push(comic);
    });
    $("#ctl00_divCenter .pagination li", html).each(function (index, element) {
      const paginationItem = getPagination($(element), `${URL}`);
      dataBoyComic.pagination.push(paginationItem);
    });
    return dataBoyComic;
  } catch (error) {
    console.log(error);
  }
}
