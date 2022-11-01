import React from "react";
import "./style/SingleArticle.css";

export default function SingleArticle({ singleArticle }) {
  const { title, topic, author, body, created_at, votes } = singleArticle;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="single_article">
      <h2>{title}</h2>
      <h3>Topic: {topic}</h3>
      <h3>Author: {author}</h3>
      <h4>Date: {formatDate(created_at)}</h4>
      <h4>Votes: {votes}</h4>
      <p className="text">{body}</p>
    </div>
  );
}
