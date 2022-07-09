import { IWatchComment } from "interfaces/watch";
import CommentItem from "./CommentItem";

interface CommentsProps {
  comments: IWatchComment[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="my-6">
      <h2 className="mb-4">Comments</h2>
      {comments?.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
