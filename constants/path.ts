export const path = {
  home: "/",
  detail: "/detail",
  read: "/read",
  filter: "/filter",
  resizeImage: (url = "", width = "", height = "") =>
    `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&h=${height}&fit=outside`,
};
