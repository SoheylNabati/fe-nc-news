import React from "react";
import { Link } from "react-router-dom";
import "./style/ArticleCard.css";

export default function ArticleCard({ article }) {
  return (
    <div className="articleCard">
      <br />
      <Link to={`/single_article/${article.article_id}`} className="Link">
        <h3>{article.title}</h3>
        <h4>Topic: {article.topic}</h4>
        <h4>Author: {article.author}</h4>
        <h4>{article.comment_count}</h4>

        <br />
      </Link>
    </div>
  );
}
