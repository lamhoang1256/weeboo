export interface IWatchDetail {
  title: string;
  chapter: string;
  updated: string;
  urlComic: string;
}

export interface ICommentItem {
  id: string;
  username: string;
  avatar: string;
  content: string;
  time: string;
}
export interface ICommentReplyItem {
  id: string;
  username: string;
  avatar: string;
  content: string;
  time: string;
  mentionUser: string;
}

export interface IWatchComment {
  id: string;
  username: string;
  avatar: string;
  content: string;
  time: string;
  replyComments: ICommentReplyItem[];
}
