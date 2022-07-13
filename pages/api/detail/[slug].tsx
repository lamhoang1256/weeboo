import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { ICommentReply } from "interfaces/read";
import { IComicDetail, IComicDetailPage } from "interfaces/detail";
import { getComicDetail, getCommentItem, getCommentReplyItem, getEpisodeList } from "utils/crawl";
const URL_NETTRUYEN = process.env.URL_NETTRUYEN + "/truyen-tranh";

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
    const data = await fetchComicDetail(`${URL_NETTRUYEN}/${slug}`);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching comic detail page failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function fetchComicDetail(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    let dataDetailPage: IComicDetailPage = {
      detail: {} as IComicDetail,
      listChapter: [],
      comments: [],
    };
    $("#ctl00_divCenter").each(function (index, element) {
      dataDetailPage.detail = getComicDetail($(element));
    });
    $("#ctl00_divCenter .list-chapter li.row").each(function (index, option) {
      const chapter = getEpisodeList($(option));
      dataDetailPage.listChapter.push(chapter);
    });
    $("#ctl00_divCenter .comment-list .item.clearfix").each(function (index, element) {
      let replyComments: ICommentReply[] = [];
      const comment = getCommentItem($(element).first());
      $(element)
        .find(".item.child")
        .each(function (index, element) {
          const replyComment = getCommentReplyItem($(element));
          replyComments.push(replyComment);
        });
      dataDetailPage.comments.push({ ...comment, replyComments });
    });
    return dataDetailPage;
  } catch (error) {
    console.log(error);
  }
}
