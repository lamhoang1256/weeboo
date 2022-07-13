import { IPaginationItem } from "./common";
import { IComicItem } from "./home";

export interface DataGirlComicPage {
  comics: IComicItem[];
  pagination: IPaginationItem[];
}
