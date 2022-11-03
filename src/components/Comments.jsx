import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByArticleID } from "../api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

export default function Comments({ user }) {
  const [post, setPost] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    setLoading(true);
    getCommentByArticleID(article_id)
      .then(({ comments }) => {
        setComments(comments);
      })
      .then(() => {
        setLoading(false);
      });
  }, [article_id, post]);
  if (loading)
    return (
      <div>
        <PostComment setPost={setPost} />
        <h2>loading comments...</h2>
      </div>
    );
  return (
    <div>
      <PostComment setPost={setPost} />
      {comments.map((comment, i) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            i={i}
            user={user}
          />
        );
      })}
    </div>
  );
}
