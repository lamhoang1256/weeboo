import { Image } from "components/image";
import { ICommentReply } from "interfaces/read";
import CommentContent from "./CommentContent";

interface CommentReplyProps {
  comments: ICommentReply[];
}

const CommentReply = ({ comments }: CommentReplyProps) => {
  return (
    <ul>
      {comments?.map((comment) => {
        const { id, username, avatar, content, createdAt, mentionUser } = comment;
        return (
          <li className="flex gap-x-4 mt-3" key={id}>
            <Image url={avatar} alt="avatar" className="h-11 w-11 rounded-full flex-shrink-0" />
            <CommentContent
              username={username}
              content={content}
              createdAt={createdAt}
              mentionUser={mentionUser}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentReply;
