import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { IFilterOptions } from "interfaces/filter";
import { IComicItem } from "interfaces/home";
import { getComicItem } from "utils/crawl";
const URL = "http://www.nettruyenco.com/tim-truyen-nang-cao";

interface FilterData {
  data: any;
}
interface FilterError {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FilterData | FilterError>
) {
  const { method } = req;
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const data = await crawlDataFilterPage();
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching featureComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function crawlDataFilterPage() {
  try {
    const response = await axios.get(URL);
    const html = response.data;
    const $ = cheerio.load(html);
    let filterResults: IComicItem[] = [];
    let filterOptions: IFilterOptions = { size: [], genres: [], status: [], gender: [], sort: [] };
    console.log("filterOptions: ", filterOptions);
    $(".ModuleContent .item", html).each(function (index, element) {
      const comic = getComicItem($(element));
      filterResults.push(comic);
    });
    $(".genre-item", html).each(function (index, element) {
      const id = $(element).find("span").attr("data-id") || "";
      const content = $(element).text().trim();
      const genre = { id, content };
      filterOptions.genres.push(genre);
    });
    $(".select-minchapter option", html).each(function (index, element) {
      const size = crawlDataFilterOption($(element));
      filterOptions.size.push(size);
    });
    $(".select-status option", html).each(function (index, element) {
      const status = crawlDataFilterOption($(element));
      filterOptions.status.push(status);
    });
    $(".select-gender option", html).each(function (index, element) {
      const gender = crawlDataFilterOption($(element));
      filterOptions.gender.push(gender);
    });
    $(".select-sort option", html).each(function (index, element) {
      const sort = crawlDataFilterOption($(element));
      filterOptions.sort.push(sort);
    });
    return { filterOptions, filterResults };
  } catch (error) {
    console.log(error);
  }
}

function crawlDataFilterOption(node: any) {
  const value = node.attr("value") || "";
  const content = node.text();
  return { value, content };
}
