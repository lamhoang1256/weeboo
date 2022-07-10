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
