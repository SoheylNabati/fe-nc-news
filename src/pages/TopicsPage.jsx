import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

export default function TopicsPage() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);
  return (
    <div>
      <h2>select a topic to view relevant articles</h2>
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link to={`/articles/${topic.slug}`}>
                <h2>{topic.slug}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
