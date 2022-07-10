import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { getNewestComic } from "./home";
const URL = "http://www.nettruyenco.com/tim-truyen";

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
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const query = req.query;
  try {
    const data = await getSearch(query);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching topComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getSearch(query: any) {
  try {
    const response = await axios.get(URL, { params: query });
    const html = response.data;
    const $ = cheerio.load(html);
    let searchResults: any = [];
    $("#ctl00_divCenter .Module .items .item").each(function (index, element) {
      const result = getNewestComic($(element));
      searchResults.push(result);
    });
    return searchResults;
  } catch (error) {
    console.log(error);
  }
}
