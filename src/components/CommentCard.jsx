import React, { useState } from "react";
import DeleteComment from "./DeleteComment";
// eslint-disable-next-line
import Comments from "./style/Comments.css";

export default function CommentCard({ comment, i, user }) {
  const { author, votes, body, created_at, comment_id } = comment;
  const [commentExists, setCommentExists] = useState(true);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!commentExists)
    return (
      <div className="single_comment">
        <h3>comment deleted</h3>
      </div>
    );
  return (
    <div className="single_comment">
      <h4>
        Comment no: {i + 1} By {author}:
      </h4>
      <h5>Date: {formatDate(created_at)}</h5>
      <p className="text">{body}</p>
      <h5>Votes: {votes}</h5>
      <DeleteComment
        user={user}
        comment_id={comment_id}
        author={author}
        setCommentExists={setCommentExists}
      />
    </div>
  );
}
