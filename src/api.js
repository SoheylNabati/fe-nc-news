import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-project-ncnews.herokuapp.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  return api
    .get("/articles", { params: { topic, sort_by, order } })
    .then((res) => {
      return res.data;
    });
};

export const getTopics = () => {
  return api.get("/topics").then((res) => {
    return res.data;
  });
};

export const getArticleByID = (id) => {
  return api.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const patchArticleVoteByID = (id, votes) => {
  return api.patch(`/articles/${id}`, { votes }).then((res) => {
    return res.data.article;
  });
};

export const getCommentByArticleID = (id) => {
  return api.get(`/articles/${id}/comments`).then((res) => {
    return res.data;
  });
};

export const postCommentByArticleID = (id, comment) => {
  return api.post(`/articles/${id}/comments`, comment);
};

export const deleteCommentByID = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
};
