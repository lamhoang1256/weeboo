import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { IFilterOptions } from "interfaces/filter";
import { IComicItem } from "interfaces/home";
import { getComicItem } from "utils/crawl";
const URL_NETTRUYEN = `${process.env.URL_NETTRUYEN}/tim-truyen-nang-cao` || "";

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
  const params = req.query;
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const data = await crawlDataFilterPage(params);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching filter page failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function crawlDataFilterPage(params: any) {
  try {
    const response = await axios.get(URL_NETTRUYEN, { params });
    const html = response.data;
    const $ = cheerio.load(html);
    let filterResults: IComicItem[] = [];
    let filterOptions: IFilterOptions = {
      minchapter: [],
      genres: [],
      status: [],
      gender: [],
      sort: [],
    };
    $(".ModuleContent .item", html).each(function (index, element) {
      const comic = getComicItem($(element));
      filterResults.push(comic);
    });
    $(".genre-item", html).each(function (index, element) {
      const value = $(element).find("span").attr("data-id") || "";
      const content = $(element).text().trim();
      const isSelected = false;
      const genre = { value, content, isSelected };
      filterOptions.genres.push(genre);
    });
    $(".select-minchapter option", html).each(function (index, element) {
      const minchapter = crawlDataFilterOption($(element));
      filterOptions.minchapter.push(minchapter);
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
  const isSelected = node.attr("selected") === "selected" ? true : false;
  return { value, content, isSelected };
}
