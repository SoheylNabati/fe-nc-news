import React from "react";
import { Link } from "react-router-dom";
import "./style/NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="site-logo">
        Home
      </Link>
      <ul>
        <li>
          <Link to="/articles_page" className="nav">
            All Articles
          </Link>
        </li>
        <li>
          <Link to="/topics_page" className="nav">
            Topics
          </Link>
        </li>
        <li>
          <Link to="/single_article_page" className="nav">
            Single Article
          </Link>
        </li>
      </ul>
    </nav>
  );
}
