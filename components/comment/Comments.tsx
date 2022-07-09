import React from "react";
import CommentItem from "./CommentItem";

const Comments = () => {
  const values = {
    id: "1",
    username: "Băng Nguyễn",
    avatar: "https://cdn.funtoon.vn/avatar/avatar_5ff48662a5673c514415634b.jpg",
    content: "Mới vô thấy ưng rồi",
    time: "8 phút trước",
  };
  return (
    <div className="my-6">
      <h2 className="mb-4">Comments</h2>
      <CommentItem comment={values} />
      <CommentItem comment={values} />
    </div>
  );
};

export default Comments;
