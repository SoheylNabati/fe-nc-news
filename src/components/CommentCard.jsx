import React from "react";
// eslint-disable-next-line
import Comments from "./style/Comments.css";

export default function CommentCard({ comment, i }) {
  const { author, votes, body, created_at } = comment;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="single_comment">
      <h4>
        Comment no: {i + 1} By {author}:
      </h4>
      <h5>Date: {formatDate(created_at)}</h5>
      <p className="text">{body}</p>
      <h5>Votes: {votes}</h5>
    </div>
  );
}
