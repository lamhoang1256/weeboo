import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { ICommentReply, IChapterReadDetail, IDataReadPage } from "interfaces/read";
import { getCommentItem, getCommentReplyItem, getImagesReading } from "utils/crawl";
const URL_NETTRUYEN = process.env.URL_NETTRUYEN + "/truyen-tranh";

interface WatchResponse {
  data: any;
}
interface WatchError {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WatchResponse | WatchError>
) {
  const { method } = req;
  const { slug, chapter, id } = req.query;
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const data = await crawlDataReadChapterPage(`${URL_NETTRUYEN}/${slug}/${chapter}/${id}`);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching read comic page failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function crawlDataReadChapterPage(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    let dataReadChapter: IDataReadPage = {
      imageUrls: [],
      detailChapter: {} as IChapterReadDetail,
      comments: [],
    };
    $(".reading .container .top")
      .first()
      .each(function (index, item) {
        const urlOriginal = URL_NETTRUYEN + "/";
        const blockH1 = $(item).find("h1.txt-primary");
        const urlComic = blockH1.find("a").attr("href")?.replace(urlOriginal, "") || "";
        const title = blockH1.find("a").text();
        const chapter = blockH1.find("span").text();
        const updatedAt = $(item).find("i").text();
        dataReadChapter.detailChapter = { title, updatedAt, chapter, urlComic };
      });
    $(".reading-detail .page-chapter").each(function (index, element) {
      const imageUrl = getImagesReading($(element));
      dataReadChapter.imageUrls.push(imageUrl);
    });
    $(".comment-list .item.clearfix").each(function (index, element) {
      let replyComments: ICommentReply[] = [];
      const comment = getCommentItem($(element).first());
      $(element)
        .find(".item.child")
        .each(function (index, element) {
          const replyComment = getCommentReplyItem($(element));
          replyComments.push(replyComment);
        });
      dataReadChapter.comments.push({ ...comment, replyComments });
    });
    return dataReadChapter;
  } catch (error) {
    console.log(error);
  }
}
