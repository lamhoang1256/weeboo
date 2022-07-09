import { Image } from "components/image";
import { ICommentReplyItem } from "interfaces/watch";
import CommentContent from "./CommentContent";

interface CommentReplyProps {
  comments: ICommentReplyItem[];
}

const CommentReply = ({ comments }: CommentReplyProps) => {
  return (
    <ul>
      {comments?.map((comment) => {
        const { id, username, avatar, content, time, mentionUser } = comment;
        return (
          <li className="flex gap-x-4 mt-3" key={id}>
            <Image url={avatar} alt="avatar" className="h-11 w-11 rounded-full flex-shrink-0" />
            <CommentContent
              username={username}
              content={content}
              time={time}
              mentionUser={mentionUser}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentReply;
