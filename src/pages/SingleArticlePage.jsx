import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../api";
import SingleArticle from "../components/SingleArticle";

export default function ArticleByTopicPage() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleByID(article_id).then((res) => {
      setSingleArticle(res);
      setLoading(false);
    });
  }, [article_id]);
  if (loading) return <h2>loading...</h2>;
  return (
    <div>
      <SingleArticle singleArticle={singleArticle} />
    </div>
  );
}
