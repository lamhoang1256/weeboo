import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { getComicItem } from "utils/crawl";
const URL_NETTRUYEN = `${process.env.URL_NETTRUYEN}/tim-truyen` || "";
const URL_NETTRUYEN_FULL = `${process.env.URL_NETTRUYEN}/truyen-full` || "";

interface TopComicData {
  data: any;
}
interface TopComicError {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TopComicData | TopComicError>
) {
  const { method } = req;
  const query = req.query;
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const data = await crawlDataTopComicPage(query);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching TopComic page failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function crawlDataTopComicPage(query: any) {
  try {
    const response = await axios.get(URL_NETTRUYEN, { params: query });
    const html = response.data;
    const $ = cheerio.load(html);
    let topComicResults: any = { status: [], sort: [], results: [] };
    $("#ctl00_mainContent_ctl00_ulStatus li").each(function (index, element) {
      const active = $(element).hasClass("active");
      const option = getTopComicOption($(element).find("a"));
      topComicResults.status.push({ active, ...option });
    });
    $("#ctl00_mainContent_ctl00_divSort .ajaxlink").each(function (index, element) {
      const active = $(element).hasClass("active");
      const option = getTopComicOption($(element));
      topComicResults.status.push({ active, ...option });
    });
    $(".ModuleContent .item").each(function (index, element) {
      const comic = getComicItem($(element));
      topComicResults.results.push(comic);
    });
    return topComicResults;
  } catch (error) {
    console.log(error);
  }
}

function getTopComicOption(node: any) {
  const title = node.text();
  const href =
    node.attr("href")?.replace(URL_NETTRUYEN, "")?.replace(URL_NETTRUYEN_FULL, "comic-full") || "";
  return { title, href };
}
