import axios from "axios";
import { NextApiHandler } from "next";
const URL = process.env.URL_CRAWL || "";

const handler: NextApiHandler = (req, res) => {
  if (!req.query.url) return res.status(400).send("URL must not be empty");
  const url = (req.query.url as string).startsWith("//")
    ? (req.query.url as string).replace("//", "http://")
    : (req.query.url as string);
  axios
    .get(url, {
      responseType: "arraybuffer",
      headers: {
        referer: URL,
      },
    })
    .then(({ data, headers: { "content-type": contentType } }) => {
      res
        .setHeader("cache-control", "max-age=99999")
        .setHeader("content-type", contentType)
        .send(data);
    });
};

export default handler;
