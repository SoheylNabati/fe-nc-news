import React from "react";
import ArticleCard from "./ArticleCard";

export default function AllArticles({ existingArticles }) {
  return (
    <div>
      {existingArticles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
