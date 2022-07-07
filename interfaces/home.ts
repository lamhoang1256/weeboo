export interface ITopComic {
  slug: string;
  title: string;
  posterUrl: string;
  newestChapter: string;
  updatedAgo: string;
}
export interface ITopComics {
  headline: string;
  comics: ITopComic[];
}

export interface INewestComic {
  slug: string;
  title: string;
  posterUrl: string;
  newestChapter: string;
  updatedAgo: string;
  newestUrl: string;
}

export interface INewestComics {
  headline: string;
  comics: INewestComic[];
}
