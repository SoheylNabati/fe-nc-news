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
          <Link to="/articles" className="nav">
            Articles
          </Link>
        </li>
        <li>
          <Link to="/topics" className="nav">
            Topics
          </Link>
        </li>
      </ul>
    </nav>
  );
}
