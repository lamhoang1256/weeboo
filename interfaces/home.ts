export interface ITopComic {
  slug: string;
  title: string;
  posterUrl: string;
  lastestChapter: string;
  updatedAgo: string;
}
export interface ITopComics {
  headline: string;
  comics: ITopComic[];
}

export interface ILastestComic {
  slug: string;
  title: string;
  posterUrl: string;
  lastestChapter: string;
  updatedAgo: string;
  lastestChapterUrl: string;
}

export interface ILastestComics {
  headline: string;
  comics: ILastestComic[];
}
