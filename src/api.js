import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-project-ncnews.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return api.get("/articles", { params: { topic: topic } }).then((res) => {
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
