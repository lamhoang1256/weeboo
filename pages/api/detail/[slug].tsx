import axios from "axios";
import * as cheerio from "cheerio";
import { IComicDetail, IOptionChapter } from "interfaces/detail";
import { ICommentReply, IComment } from "interfaces/read";
import type { NextApiRequest, NextApiResponse } from "next";
import { getCommentItem, getCommentReplyItem } from "utils/crawl";
const BASE_URL = process.env.URL_NETTRUYEN + "/truyen-tranh";

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
    const data = await fetchComicDetail(`${BASE_URL}/${slug}`);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching featureComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function fetchComicDetail(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    let detail: IComicDetail = {} as IComicDetail;
    let listChapter: IOptionChapter[] = [];
    const comments: IComment[] = [];
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
      $(".comment-list").each(function (index, element) {
        $(element)
          .find(".item.clearfix")
          .each(function (index, element) {
            let replyComments: ICommentReply[] = [];
            const comment = getCommentItem($(element).first());
            $(element)
              .find(".item.child")
              .each(function (index, element) {
                const replyComment = getCommentReplyItem($(element));
                replyComments.push(replyComment);
              });
            comments.push({ ...comment, replyComments });
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
  const href = node.find(".chapter a").attr("href").split("/truyen-tranh/")[1] || "";
  const title = node.find(".chapter a").text();
  const updatedAt = node.find(".col-xs-4").text();
  const viewCount = node.find(".col-xs-3").text();
  return { id, href, title, updatedAt, viewCount };
}
