import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
import { ICommentReply, IImageChapter, IComment, IChapterReadDetail } from "interfaces/read";
import { getCommentItem, getCommentReplyItem, getImagesReading } from "utils/crawl";
const BASE_URL = process.env.URL_NETTRUYEN + "/truyen-tranh";

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
    const data = await crawlDataReadChapterPage(`${BASE_URL}/${slug}/${chapter}/${id}`);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching featureComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function crawlDataReadChapterPage(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const imageUrls: IImageChapter[] = [];
    let detailChapter: IChapterReadDetail = {} as IChapterReadDetail;
    const comments: IComment[] = [];
    // get the basic information of the chapter
    $(".reading .container .top")
      .first()
      .each(function (index, item) {
        const urlOriginal = "http://www.nettruyenco.com/truyen-tranh/";
        const blockH1 = $(item).find("h1.txt-primary");
        const urlComic = blockH1.find("a").attr("href")?.replace(urlOriginal, "") || "";
        const title = blockH1.find("a").text();
        const chapter = blockH1.find("span").text();
        const updatedAt = $(item).find("i").text();
        detailChapter = { title, updatedAt, chapter, urlComic };
      });
    // get urls reading image of this chapter
    $(".reading-detail .page-chapter").each(function (index, element) {
      const imageUrl = getImagesReading($(element));
      imageUrls.push(imageUrl);
    });
    // get list comment about this chapter
    $(".comment-list .item.clearfix").each(function (index, element) {
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
    return { detailChapter, imageUrls, comments };
  } catch (error) {
    console.log(error);
  }
}
