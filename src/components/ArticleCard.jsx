import React from "react";

export default function ArticleCard({ article }) {
  return (
    <div>
      <h3>Title: {article.title}</h3>
      <h4>Topic: {article.topic}</h4>
      <h4>Author: {article.author}</h4>
      <p>Votes: {article.votes}</p>
      <br />
    </div>
  );
}
