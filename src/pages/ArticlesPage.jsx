import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import AllArticles from "../components/AllArticles";

export default function ArticlesPage() {
  const [existingArticles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    isLoading(true);
    getArticles(topic).then(({ articles }) => {
      setArticles(articles);
      isLoading(false);
    });
  }, [topic]);

  if (loading) return <h2>loading...</h2>;
  return <AllArticles existingArticles={existingArticles} />;
}
