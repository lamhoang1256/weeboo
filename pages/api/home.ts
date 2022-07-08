import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as cheerio from "cheerio";
import { INewestComic, INewestComics, ITopComic, ITopComics } from "interfaces/home";

const URL = process.env.URL_CRAWL || "";
interface HomeResponse {
  data: any;
}
interface HomeError {
  error: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeResponse | HomeError>
) {
  const { method } = req;
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const data = await getHome();
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching topComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getHome() {
  try {
    const response = await axios.get(URL);
    const html = response.data;
    const $ = cheerio.load(html);
    let topComics: ITopComics = { headline: "", comics: [] };
    let newestComics: INewestComics = { headline: "", comics: [] };

    // get all top comics
    $(".top-comics", html).each(function () {
      let comics: ITopComic[] = [];
      const headline = $(this).find("h2.page-title").text();
      $(this)
        .find(".item")
        .each(function (index, element) {
          const comic = getTopComic($(element));
          comics.push(comic);
        });
      topComics = { headline, comics };
    });
    // get all newest comics
    $("#ctl00_divCenter .ModuleContent", html).each(function () {
      let comics: INewestComic[] = [];
      const headline: string = $(this).find(".page-title").text();
      $(this)
        .find(".item")
        .each(function (index, element) {
          const comic = getNewestComic($(element));
          comics.push(comic);
        });
      newestComics = { headline, comics };
    });

    return { topComics, newestComics };
  } catch (error) {
    console.log(error);
  }
}

function getTopComic(node: any) {
  const slug = node.find("a").attr("href")?.split("/truyen-tranh/")?.[1] || "";
  const title = node.find(".slide-caption h3 a").text();
  const posterUrl = node.find(".lazyOwl").attr("data-src") || "";
  const newestChapter = node.find(".slide-caption > a").text();
  const updatedAgo = node.find(".slide-caption > .time").text().trim();
  return { slug, title, posterUrl, newestChapter, updatedAgo };
}

function getNewestComic(node: any) {
  const slug = node.find(".image > a").attr("href")?.split("/truyen-tranh/")?.[1] || "";
  const title = node.find(".jtip").text();
  const posterUrl = node.find(".image > a > img").attr("data-original") || "";
  const updatedAgo = node.find(".comic-item .chapter .time").first().text();
  const newestEle = node.find(".comic-item .chapter a").first();
  const newestChapter = newestEle.text();
  const newestUrl = newestEle.attr("href")?.split("/truyen-tranh/")?.[1] || "";
  return { slug, title, posterUrl, newestChapter, updatedAgo, newestUrl };
}
