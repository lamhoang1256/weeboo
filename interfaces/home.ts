export interface IHomeBannerItem {
  id: number;
  imageUrl: string;
}

export interface IFeatureComic {
  slug: string;
  title: string;
  posterUrl: string;
  newestChapter: string;
  updatedAgo: string;
}
export interface IFeatureComics {
  headline: string;
  comics: IFeatureComic[];
}
export interface IComicItem {
  slug: string;
  title: string;
  posterUrl: string;
  newestChapter: string;
  updatedAgo: string;
  newestUrl: string;
}
export interface IComicItems {
  headline: string;
  comics: IComicItem[];
}
