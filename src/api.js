import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-project-ncnews.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return api.get("/articles").then((res) => {
    return res.data;
  });
};
