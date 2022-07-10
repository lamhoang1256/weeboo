import { IComment } from "interfaces/read";
import CommentItem from "./CommentItem";

interface CommentsProps {
  comments: IComment[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="my-6">
      <h2 className="mb-4 font-bold">Bình luận ({comments?.length})</h2>
      {comments?.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
