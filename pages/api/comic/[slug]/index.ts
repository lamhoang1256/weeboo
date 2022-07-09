import axios from "axios";
import * as cheerio from "cheerio";
import { IDetail, IOptionChapter } from "interfaces/detail";
import { IWatchComment } from "interfaces/watch";
import type { NextApiRequest, NextApiResponse } from "next";
import { getComment } from "./[chapter]/[id]";
const BASE_URL = process.env.URL_CRAWL + "/truyen-tranh";

interface DetailResponse {
  data: any;
}
interface DetailError {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DetailResponse | DetailError>
) {
  const { method } = req;
  const { slug } = req.query;
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const data = await fetchDetailComic(`${BASE_URL}/${slug}`);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching topComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function fetchDetailComic(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    let detail: IDetail = {} as IDetail;
    let listChapter: IOptionChapter[] = [];
    const comments: IWatchComment[] = [];

    $("#ctl00_divCenter").each(function (index, item) {
      const title = $(item).find(".title-detail").text();
      const updatedAt = $(item).find("time.small").text().trim();
      const posterUrl =
        $(item)
          .find(".col-image img")
          .attr("src")
          ?.replace("//st.nettruyenco.com", "http://st.nettruyenco.com") || "";
      const author = $(item).find(".author .col-xs-8").text();
      const status = $(item).find(".status .col-xs-8").text();
      const categories = $(item).find(".kind .col-xs-8").text();
      const viewCount = $(item).find(".list-info .col-xs-8").last().text();
      const ratingValue = $(item).find(".mrt5.mrb10 > span > span").first().text();
      const ratingCount = $(item).find(".mrt5.mrb10 > span > span").last().text();
      const followCount = $(item).find(".follow span b").text();
      const description = $(item).find(".detail-content p").text().trim();
      detail = {
        title,
        updatedAt,
        posterUrl,
        author,
        status,
        categories,
        viewCount,
        ratingCount,
        ratingValue,
        followCount,
        description,
      };
      $(item)
        .find(".list-chapter li.row")
        .each(function (index, option) {
          const chapter = getListChapter($(option));
          listChapter.push(chapter);
        });

      $(item)
        .find(".comment-list")
        .each(function (index, element) {
          $(element)
            .find(".item")
            .each(function (index, element) {
              const comment = getComment($(element).first());
              comments.push(comment);
            });
        });
    });
    return { detail, listChapter, comments };
  } catch (error) {
    console.log(error);
  }
}

function getListChapter(node: any) {
  const id = node.find(".chapter a").attr("data-id");
  const url = node.find(".chapter a").attr("href").split("/truyen-tranh/")[1] || "";
  const title = node.find(".chapter a").text();
  const updatedAt = node.find(".col-xs-4").text();
  const viewCount = node.find(".col-xs-3").text();
  return { id, url, title, updatedAt, viewCount };
}
