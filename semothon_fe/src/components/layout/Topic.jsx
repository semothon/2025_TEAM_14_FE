import React from "react";
import "../../styles/layout/Topic.css";


const Topic = ({ label = "# Topic", onClick }) => {
  return (
    <div className="topic-tag" onClick={onClick}>
      {label}
    </div>
  );
};

export default Topic;