import React, { useEffect, useState } from "react";
import { getArticles } from "../api";
import AllArticles from "../components/AllArticles";

export default function ArticlesPage() {
  const [existingArticles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
      isLoading(false);
    });
  }, []);

  if (loading) return <h2>loading...</h2>;
  return <AllArticles existingArticles={existingArticles} />;
}
