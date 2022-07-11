import axios from "axios";
import * as cheerio from "cheerio";
import { IComicItem, IHomeBannerItem } from "interfaces/home";
import type { NextApiRequest, NextApiResponse } from "next";
import { getComicFeatureItem, getComicItem } from "utils/crawl";

const URL_NETTRUYEN = process.env.URL_NETTRUYEN || "";
const URL_WEEBOO = process.env.URL_WEEBOO || "";
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
    const response = await axios.get(URL_NETTRUYEN);
    const html = response.data;
    const $ = cheerio.load(html);
    let featureComics: IComicItem[] = [];
    let newestComics: IComicItem[] = [];
    // get featured comics
    $(".top-comics .item", html).each(function (index, element) {
      const comic = getComicFeatureItem($(element));
      featureComics.push(comic);
    });
    // get newest updated comics
    $("#ctl00_divCenter .ModuleContent .item", html).each(function (index, element) {
      const comic = getComicItem($(element));
      newestComics.push(comic);
    });
    return { featureComics, newestComics };
  } catch (error) {
    console.log(error);
  }
}

async function crawlDataHomeBanner() {
  try {
    const response = await axios.get(URL_WEEBOO);
    const html = response.data;
    const $ = cheerio.load(html);
    let images: IHomeBannerItem[] = [];
    $(".swiper-wrapper", html)
      .first()
      .find(".swiper-slide")
      .each(function (index, element) {
        let imageUrls: any = [];
        $(element)
          .find("img")
          .each(function (index, image) {
            const id = index;
            const imageUrl = $(image).attr("data-src") || "";
            imageUrls.push({ id, imageUrl });
          });
        images.push(imageUrls);
      });
    return images;
  } catch (error) {
    console.log(error);
  }
}
