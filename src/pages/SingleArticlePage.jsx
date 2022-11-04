import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByID } from "../api";
import SingleArticle from "../components/SingleArticle";

export default function ArticleByTopicPage() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getArticleByID(article_id)
      .then((res) => {
        setSingleArticle(res);
        setLoading(false);
      })
      .catch((err) => setErr(err));
  }, [article_id]);
  if (err) return <h2>article not found</h2>;
  if (loading) return <h2>loading...</h2>;
  return (
    <div>
      <SingleArticle singleArticle={singleArticle} />
    </div>
  );
}
