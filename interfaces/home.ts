import { IPaginationItem } from "./common";

export interface IDataHomePage {
  featureComics: IComicItem[];
  newestComics: IComicItem[];
  pagination: IPaginationItem[];
}

export interface IHomeBannerItem {
  id: number;
  imageUrl: string;
}

export interface IComicItem {
  slug: string;
  title: string;
  posterUrl: string;
  newestChapter: string;
  updatedAgo: string;
  newestHref: string;
}
