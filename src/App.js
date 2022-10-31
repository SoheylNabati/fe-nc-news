import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/articles_page" element={<ArticlesPage />} />
      </Routes>
    </div>
  );
}

export default App;
