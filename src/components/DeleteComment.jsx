import React, { useState } from "react";
import { deleteCommentByID } from "../api";

export default function DeleteComment({
  comment_id,
  setCommentExists,
  author,
  user,
}) {
  const [loading, setloading] = useState(false);
  const [err, setErr] = useState(null);
  const [allow, setAllow] = useState(true);

  const handleDelete = () => {
    setloading(true);
    setAllow(true);
    if (user === author) {
      deleteCommentByID(comment_id).then((res) => {
        if (res.status !== 204) {
          setErr("Something Went Wrong Cant Delete Comment:(");
        }
        setCommentExists(false);
        setloading(false);
      });
    }
    setAllow(false);
  };
  if (err) return <h4>{err}</h4>;
  else if (!allow) return <h4>You can only delete your comments</h4>;
  else if (loading) return <h4>Deleting Comment</h4>;
  return (
    <div>
      <button onClick={handleDelete}>DELETE COMMENT</button>
    </div>
  );
}
