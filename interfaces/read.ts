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
  createdAt: string;
}
export interface ICommentReply extends ICommentItem {
  mentionUser: string;
}

export interface IComment extends ICommentItem {
  replyComments: ICommentReply[];
}

export interface IImageChapter {
  alt: string;
  imageUrl: string;
}
