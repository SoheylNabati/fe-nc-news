import React, { useState } from "react";
import Comments from "./Comments";
import "./style/SingleArticle.css";
import Votes from "./Votes";

export default function SingleArticle({ singleArticle }) {
  const [user, setUser] = useState("grumpy19");
  let loggedIn;
  if (user) loggedIn = <h3>you are logged in as {user}</h3>;
  const { title, topic, author, body, created_at, votes, article_id } =
    singleArticle;

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
      <p className="text">{body}</p>
      {loggedIn}
      <Comments user={user} />
    </div>
  );
}
