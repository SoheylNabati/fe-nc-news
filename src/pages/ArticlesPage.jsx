import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import AllArticles from "../components/AllArticles";

export default function ArticlesPage() {
  const sortInputs = [
    "created_at",
    "votes",
    "article_id",
    "title",
    "topic",
    "author",
    "body",
  ];
  const [existingArticles, setArticles] = useState([]);
  const [order, setOrder] = useState("DESC");
  const [sort, setSort] = useState("created_at");
  const [loading, isLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    isLoading(true);
    getArticles(topic, sort, order).then(({ articles }) => {
      setArticles(articles);
      isLoading(false);
    });
  }, [topic, sort, order]);

  const handleOrder = () => {
    if (order === "DESC") {
      setOrder("ASC");
    } else if (order === "ASC") {
      setOrder("DESC");
    }
    // textContent = "descending";
  };

  if (loading) return <h2>loading...</h2>;
  return (
    <div>
      <ul>
        <h3>sort by: </h3>
        {sortInputs.map((e, i) => (
          <button
            key={i}
            onClick={() => {
              setSort(e);
            }}
          >
            {e}
          </button>
        ))}
      </ul>
      <h3>order</h3>
      <input
        value="ascending/descending"
        id="btn"
        type="button"
        onClick={handleOrder}
      ></input>
      <AllArticles existingArticles={existingArticles} />
    </div>
  );
}
