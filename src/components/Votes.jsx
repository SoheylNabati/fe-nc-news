import React, { useState } from "react";
import { patchArticleVoteByID } from "../api";

export default function Votes({ votes, article_id }) {
  const [likes, setLikes] = useState(votes);

  const [likeOnce, setLikeOnce] = useState(0);

  const handleLike = (e) => {
    e.preventDefault();
    setLikes((curr) => curr + 1);
    setLikeOnce((curr) => curr + 1);
    patchArticleVoteByID(article_id, +1).then((res) => res.data);
  };
  const handleDislike = (e) => {
    e.preventDefault();
    setLikes((curr) => curr - 1);
    setLikeOnce((curr) => curr - 1);
    patchArticleVoteByID(article_id, -1).then((res) => res.data);
  };

  return (
    <div>
      <button disabled={likeOnce === 1} onClick={handleLike}>
        Like
      </button>
      <h3>Likes: {likes}</h3>
      <button disabled={likeOnce === -1} onClick={handleDislike}>
        Dislike
      </button>
    </div>
  );
}
