import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByArticleID } from "../api";
import CommentCard from "./CommentCard";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    setLoading(true);
    getCommentByArticleID(article_id).then(({ comments }) => {
      setComments(comments);
      setLoading(false);
    });
  }, [article_id]);
  if (loading) return <h2>loading...</h2>;
  return (
    <div>
      {comments.map((comment, i) => {
        return <CommentCard key={comment.comment_id} comment={comment} i={i} />;
      })}
    </div>
  );
}
