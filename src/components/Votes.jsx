import React, { useState } from "react";
import { patchArticleVoteByID } from "../api";

export default function Votes({ votes, article_id }) {
  const [likes, setLikes] = useState(votes);

  const handleLike = (e) => {
    e.preventDefault();
    setLikes((currentLikes) => {
      return currentLikes + 1;
    });
    patchArticleVoteByID(article_id, +1).then((res) => res.data);
  };
  const handleDislike = (e) => {
    e.preventDefault();
    setLikes((currentLikes) => {
      return currentLikes - 1;
    });
    patchArticleVoteByID(article_id, -1).then((res) => res.data);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <h3>Likes: {likes}</h3>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  );
}
