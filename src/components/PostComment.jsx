import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { postCommentByArticleID } from "../api";

export default function PostComment({ setPost }) {
  const [ispending, setIsPending] = useState(false);
  const [err, setErr] = useState(null);
  const [successful, setSuccessful] = useState(false);
  const [comment, setComment] = useState({
    username: "",
    body: "",
  });
  const { article_id } = useParams();

  const handleChange = (e) => {
    const newComment = { ...comment };
    newComment[e.target.id] = e.target.value;
    setComment(newComment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    postCommentByArticleID(article_id, comment)
      .then((res) => {
        if (res.status === 201) {
          setSuccessful(true);
        }
        return res.comment;
      })
      .then(() => {
        setPost((curr) => !curr);
        setIsPending(false);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
      })
      .then(() => {
        setComment({
          username: "",
          body: "",
        });
      });
  };
  const tryAgain = () => {
    setErr(null);
    setIsPending(false);
    setSuccessful(false);
  };
  if (err)
    return (
      <div>
        <h2>{err}</h2>
        <Link to={`/single_article/${article_id}`}>
          <button onClick={tryAgain}>try again</button>
        </Link>
      </div>
    );
  else if (ispending) return <h3>pending...</h3>;
  else if (successful)
    return (
      <div>
        <h2>Comment Added successfully</h2>
        <Link to={`/single_article/${article_id}`}>
          <button onClick={tryAgain}>add another comment</button>
        </Link>
      </div>
    );
  return (
    <div>
      <fieldset>
        <legend> add a new comment</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username: </label>
          <input
            id="username"
            type="text"
            value={comment.username}
            onChange={handleChange}
            required={true}
          />
          <br />
          <label htmlFor="comment">comment: </label>
          <input
            id="body"
            type="text"
            value={comment.body}
            onChange={handleChange}
            required={true}
          />
          <br />
          <button type="submit">post comment</button>
        </form>
      </fieldset>
    </div>
  );
}
