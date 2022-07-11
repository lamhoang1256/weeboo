import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import * as cheerio from "cheerio";
import {
  IComicItem,
  IComicItems,
  IFeatureComic,
  IFeatureComics,
  IHomeBannerItem,
} from "interfaces/home";
import { getComicFeatureItem, getComicItem } from "utils/crawl";

const URL = process.env.URL_CRAWL || "";
const URL2 = "https://weeboo.vn";
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
    const banners = await crawlDataHomeBanner();
    const dataHome = await crawlDataHomePage();
    return res.status(200).json({ data: { banners, ...dataHome } });
  } catch (error: any) {
    console.log("Fetching featureComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function crawlDataHomePage() {
  try {
    const response = await axios.get(URL);
    const html = response.data;
    const $ = cheerio.load(html);
    let featureComics: IFeatureComics = {} as IFeatureComics;
    let newestComics: IComicItems = {} as IComicItems;
    // get a list of featured comics
    $(".top-comics", html).each(function () {
      let comics: IFeatureComic[] = [];
      const headline = $(this).find("h2.page-title").text();
      $(this)
        .find(".item")
        .each(function (index, element) {
          const comic = getComicFeatureItem($(element));
          comics.push(comic);
        });
      featureComics = { headline, comics };
    });
    // get the list of newly updated comics
    $("#ctl00_divCenter .ModuleContent", html).each(function () {
      let comics: IComicItem[] = [];
      const headline = $(this).find(".page-title").text();
      $(this)
        .find(".item")
        .each(function (index, element) {
          const comic = getComicItem($(element));
          comics.push(comic);
        });
      newestComics = { headline, comics };
    });
    return { featureComics, newestComics };
  } catch (error) {
    console.log(error);
  }
}

async function crawlDataHomeBanner() {
  try {
    const response = await axios.get(URL2);
    const html = response.data;
    const $ = cheerio.load(html);
    let images: IHomeBannerItem[] = [];
    $(".swiper-wrapper", html)
      .first()
      .each(function (index, element) {
        $(element)
          .find(".swiper-slide")
          .each(function (index, element) {
            let imageUrls: any = [];
            $(element)
              .find("img")
              .each(function (index, element) {
                const id = index;
                const imageUrl = $(element).attr("data-src") || "";
                imageUrls.push({ id, imageUrl });
              });
            images.push(imageUrls);
          });
      });
    return images;
  } catch (error) {
    console.log(error);
  }
}
