import axios from "axios";
import * as cheerio from "cheerio";
import { IComicItem } from "interfaces/home";
import type { NextApiRequest, NextApiResponse } from "next";
import { getComicItem } from "utils/crawl";
const URL_NETTRUYEN = `${process.env.URL_NETTRUYEN}/tim-truyen` || "";

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
  const { method } = req;
  const query = req.query;
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const data = await crawlDataSearchPage(query);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching search page failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function crawlDataSearchPage(query: any) {
  try {
    const response = await axios.get(URL_NETTRUYEN, { params: query });
    const html = response.data;
    const $ = cheerio.load(html);
    let searchResults: IComicItem[] = [];
    $("#ctl00_divCenter .Module .items .item").each(function (index, item) {
      const result = getComicItem($(item));
      searchResults.push(result);
    });
    return searchResults;
  } catch (error) {
    console.log(error);
  }
}
