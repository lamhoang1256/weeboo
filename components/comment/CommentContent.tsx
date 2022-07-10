interface CommentContentProps {
  username: string;
  content: string;
  createdAt: string;
  mentionUser?: string;
}

const CommentContent = ({ username, content, createdAt, mentionUser }: CommentContentProps) => {
  return (
    <div>
      <div className="bg-[#f5f5f5] px-[14px] py-[12px] rounded-md">
        <h3 className="font-semibold">{username}</h3>
        <p>
          {mentionUser && <span className="text-[#065fd4]">@{mentionUser} </span>}
          {content === "" ? "Truyện hay" : content}
        </p>
      </div>
      <span className="text-[#8a8a8f] text-sm">{createdAt}</span>
    </div>
  );
};

export default CommentContent;
