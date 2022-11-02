import React, { useState } from "react";
import { deleteCommentByID } from "../api";

export default function DeleteComment({ comment_id, setCommentExists }) {
  const [loading, setloading] = useState(false);
  const [err, setErr] = useState(null);
  const handleDelete = () => {
    setloading(true);
    deleteCommentByID(comment_id).then((res) => {
      if (res.status !== 204) {
        setErr("Something Went Wrong Cant Delete Comment:(");
      }
      setCommentExists(false);
      setloading(false);
    });
  };
  if (err) return <h4>{err}</h4>;
  else if (loading) return <h4>Deleting Comment</h4>;
  return (
    <div>
      <button onClick={handleDelete}>DELETE COMMENT{comment_id}</button>
    </div>
  );
}
