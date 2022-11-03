import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api";
import AllArticles from "../components/AllArticles";

export default function ArticlesPage() {
  const [existingArticles, setArticles] = useState([]);
  const [order, setOrder] = useState("DESC");
  const [sort, setSort] = useState("created_at");
  const [loading, isLoading] = useState(true);
  const { topic } = useParams();
  const [err, setErr] = useState(null);

  useEffect(() => {
    isLoading(true);
    getArticles(topic, sort, order)
      .then(({ articles }) => {
        setArticles(articles);
        isLoading(false);
      })
      .catch((err) => setErr(err));
  }, [topic, sort, order]);

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  if (err) return <h2>Topic Doesnt Exist</h2>;
  if (loading) return <h2>loading...</h2>;
  return (
    <div>
      <h2>click on article to read more</h2>
      <form>
        <label htmlFor="sort_by">Sort By </label>
        <select value={sort} id="sort_by" onChange={handleSort}>
          <option value="created_at">Date</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="topic">Topic</option>
          <option value="body">Body</option>
          <option value="comment_count">Comment Count</option>
        </select>
        <label htmlFor="order">Order </label>
        <select value={order} id="order" onChange={handleOrder}>
          <option value="DESC">descending</option>
          <option value="ASC">Ascending</option>
        </select>
        {/* <button type="submit">submit</button> */}
      </form>
      <AllArticles existingArticles={existingArticles} />
    </div>
  );
}
