import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as cheerio from "cheerio";
import { ITopComic } from "interfaces/home";

const url = process.env.URL_CRAWL || "";
interface HomeResponse {
  topComics: any;
}
interface HomeError {
  error: string;
}

const getTopComics = async () => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    let headline: string = "";
    let comics: ITopComic[] = [];

    $(".top-comics", html).each(function () {
      headline = $(this).find("h2.page-title").text();
      $(this)
        .find(".item")
        .each(function () {
          const slug = $(this).find("a").attr("href")?.split("/truyen-tranh/")?.[1] || "";
          const title = $(this).find(".slide-caption h3 a").text();
          const posterUrl = $(this).find(".lazyOwl").attr("data-src") || "";
          const newChapter = $(this).find(".slide-caption > a").text();
          const updatedAgo = $(this).find(".slide-caption > .time").text().trim();
          const comic = { slug, title, posterUrl, newChapter, updatedAgo };
          comics.push(comic);
        });
    });
    return { headline, comics };
  } catch (error) {
    console.log(error);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeResponse | HomeError>
) {
  const { method } = req;
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const topComics = await getTopComics();
    return res.status(200).json({ topComics });
  } catch (error: any) {
    console.log("Fetching topComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
