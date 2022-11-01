import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import TopicsPage from "./pages/TopicsPage";
import SingleArticlePage from "./pages/SingleArticlePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/articles/:topic" element={<ArticlesPage />} />
        <Route
          path="/single_article/:article_id"
          element={<SingleArticlePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
