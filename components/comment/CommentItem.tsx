import { Image } from "components/image";
import { IWatchComment } from "interfaces/watch";
import CommentContent from "./CommentContent";
import CommentReply from "./CommentReply";

interface CommentItemProps {
  comment: IWatchComment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { username, avatar, content, time, replyComments } = comment;
  return (
    <div className="flex gap-x-4 mt-3">
      <Image url={avatar} alt="avatar" className="h-11 w-11 rounded-full flex-shrink-0" />
      <div className="flex-1">
        <CommentContent username={username} content={content} time={time} />
        {replyComments?.length > 0 && <CommentReply comments={replyComments} />}
      </div>
    </div>
  );
};

export default CommentItem;
