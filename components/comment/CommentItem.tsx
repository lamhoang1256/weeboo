import { Image } from "components/image";
import { IWatchComment } from "interfaces/watch";

interface CommentItemProps {
  comment: IWatchComment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { username, avatar, content, time } = comment;
  return (
    <div className="flex gap-x-4 mt-3">
      <Image url={avatar} alt="avatar" className="h-11 w-11 rounded-full" />
      <div>
        <h3 className="font-semibold">{username}</h3>
        <span>{content}</span>
        <div className="text-[#999] text-sm">{time}</div>
      </div>
    </div>
  );
};

export default CommentItem;
