import React from "react";
import ArticleCard from "./ArticleCard";

export default function AllArticles({ existingArticles }) {
  return (
    <div>
      <h2>click on article to read more</h2>
      {existingArticles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
