import React from "react";
import Comments from "./Comments";
import "./style/SingleArticle.css";
import Votes from "./Votes";

export default function SingleArticle({ singleArticle }) {
  const {
    title,
    topic,
    author,
    body,
    created_at,
    votes,
    article_id,
    comment_count,
  } = singleArticle;

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
      <Votes votes={votes} article_id={article_id} />
      <h4>number of comments: {comment_count}</h4>
      <p className="text">{body}</p>
      <Comments />
    </div>
  );
}
