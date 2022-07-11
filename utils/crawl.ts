export function getComicFeatureItem(node: any) {
  const slug = node.find("a").attr("href")?.split("/truyen-tranh/")?.[1] || "";
  const title = node.find(".slide-caption h3 a").text();
  const posterUrl = node.find(".lazyOwl").attr("data-src") || "";
  const newestChapter = node.find(".slide-caption > a").text();
  const updatedAgo = node.find(".slide-caption > .time").text().trim();
  const newestUrl = node.attr("href")?.split("/truyen-tranh/")?.[1] || "";
  return { slug, title, posterUrl, newestChapter, updatedAgo, newestUrl };
}

export function getComicItem(node: any) {
  const slug = node.find(".image > a").attr("href")?.split("/truyen-tranh/")?.[1] || "";
  const title = node.find(".jtip").text();
  const posterUrl = node.find(".image > a > img").attr("data-original") || "";
  const updatedAgo = node.find(".comic-item .chapter .time").first().text();
  const newestEle = node.find(".comic-item .chapter a").first();
  const newestChapter = newestEle.text();
  const newestUrl = newestEle.attr("href")?.split("/truyen-tranh/")?.[1] || "";
  return { slug, title, posterUrl, newestChapter, updatedAgo, newestUrl };
}

export function getCommentItem(node: any) {
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

export function getCommentReplyItem(node: any) {
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

// getListChapter
export function getEpisodeList(node: any) {
  const id = node.find(".chapter a").attr("data-id");
  const href = node.find(".chapter a").attr("href").split("/truyen-tranh/")[1] || "";
  const title = node.find(".chapter a").text();
  const updatedAt = node.find(".col-xs-4").text();
  const viewCount = node.find(".col-xs-3").text();
  return { id, href, title, updatedAt, viewCount };
}

// getImageChapter
export function getImagesReading(node: any) {
  const imageUrl = node.find("img").attr("data-original");
  const alt = node.find("img").attr("alt");
  return { alt, imageUrl };
}
