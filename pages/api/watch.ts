import axios from "axios";
import * as cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";
const URL = "http://www.nettruyenco.com/truyen-tranh/toan-chuc-phap-su/chap-892/874717";

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
  if (method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const data = await fetchWatch();
    return res.status(200).json({ data });
  } catch (error: any) {
    console.log("Fetching topComics failed: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function fetchWatch() {
  try {
    const response = await axios.get(URL);
    const html = response.data;
    const $ = cheerio.load(html);
    const imageUrls: string[] = [];
    const comicDetail: any = [];
    const comments: any = [];

    // get comic detail information
    $(".reading .container .top")
      .first()
      .each(function (index, element) {
        const urlComic = $(element).find(".txt-primary > a").attr("href");
        const title = $(element).find(".txt-primary > a").text();
        const updated = $(element).find("i").text();
        comicDetail.push({ title, updated, urlComic });
      });
    // get urls reading image chapter
    $(".reading-detail .page-chapter").each(function (index, element) {
      const imageUrl = getImageChapter($(element));
      imageUrls.push(imageUrl);
    });
    // get comments about chapter
    $(".comment .comment-list").each(function (index, element) {
      $(element)
        .find(".item")
        .each(function (index, element) {
          const comment = getComment($(element).first());
          comments.push(comment);
        });
    });
    return { comicDetail, imageUrls, comments };
  } catch (error) {
    console.log(error);
  }
}

function getImageChapter(node: any) {
  const imageOriginal = node.find("img").attr("data-original");
  const imageUrl = imageOriginal?.replace("//p.nhattruyenmoi.com", "http://p.nhattruyenmoi.com");
  return imageUrl;
}

function getComment(node: any) {
  const id = node.attr("id")?.replace("comment_", "");
  const username = node.find(".authorname").text();
  const avatar = node
    .find("img")
    .attr("data-original")
    ?.replace("//st.nettruyenco.com", "http://st.nettruyenco.com/");
  console.log("avatar: ", avatar);
  const content = node.find(".comment-content").text();
  const time = node.find("abbr").text().trim();
  return { id, username, avatar, content, time };
}
