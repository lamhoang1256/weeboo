import axios from "axios";
import * as cheerio from "cheerio";
import { ICommentReply, IImageChapter, IComment, IWatchDetail } from "interfaces/read";
import type { NextApiRequest, NextApiResponse } from "next";
const BASE_URL = process.env.URL_CRAWL + "/truyen-tranh";

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
    const data = await fetchWatch(`${BASE_URL}/${slug}/${chapter}/${id}`);
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching topComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function fetchWatch(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const imageUrls: IImageChapter[] = [];
    let comicDetail: IWatchDetail = {} as IWatchDetail;
    const comments: IComment[] = [];
    // get comic detail information
    $(".reading .container .top")
      .first()
      .each(function (index, element) {
        const urlComic =
          $(element)
            .find(".txt-primary > a")
            .attr("href")
            ?.replace("http://www.nettruyenco.com/truyen-tranh/", "") || "";
        const title = $(element).find(".txt-primary > a").text();
        const chapter = $(element).find(".txt-primary > span").text();
        const updated = $(element).find("i").text();
        comicDetail = { title, updated, chapter, urlComic };
      });
    // get urls reading image chapter
    $(".reading-detail .page-chapter").each(function (index, element) {
      const imageUrl = getImageChapter($(element));
      imageUrls.push(imageUrl);
    });
    // get comments about chapter
    $(".comment-list").each(function (index, element) {
      $(element)
        .find(".item.clearfix")
        .each(function (index, element) {
          let replyComments: ICommentReply[] = [];
          const comment = getComment($(element).first());
          $(element)
            .find(".item.child")
            .each(function (index, element) {
              const replyComment = getCommentReply($(element));
              replyComments.push(replyComment);
            });
          comments.push({ ...comment, replyComments });
        });
    });
    return { comicDetail, imageUrls, comments };
  } catch (error) {
    console.log(error);
  }
}

function getImageChapter(node: any) {
  const imageUrl = node.find("img").attr("data-original");
  const alt = node.find("img").attr("alt");
  return { alt, imageUrl };
}

export function getComment(node: any) {
  const id = node.attr("id")?.replace("comment_", "");
  const username = node.find(".authorname").first().text();
  const avatar = node
    .find("img")
    .first()
    .attr("data-original")
    ?.replace("//st.nettruyenco.com", "http://st.nettruyenco.com/");
  const content = node.find(".comment-content").first().text();
  const createdAt = node.find("abbr").first().text().trim();
  return { id, username, avatar, content, createdAt };
}

export function getCommentReply(node: any) {
  const id = node.attr("id")?.replace("comment_", "");
  const username = node.find(".authorname").text();
  const avatar = node
    .find("img")
    .attr("data-original")
    ?.replace("//st.nettruyenco.com", "http://st.nettruyenco.com/");
  const mentionUser = node.find(".comment-content .mention-user").text().trim();
  const content = node.find(".comment-content").text().trim().replace(mentionUser, "");
  const createdAt = node.find("abbr").text().trim();
  return { id, username, avatar, content, createdAt, mentionUser };
}
