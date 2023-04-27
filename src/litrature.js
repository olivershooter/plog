// src/Litrature.js
import React from "react";

const Litrature = ({
  username,
  postDate,
  author,
  title,
  content,
  comments,
}) => {
  return (
    <div className="litrature">
      <h3>{username}</h3>
      <div className="title">{title}</div>
      <div className="content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <p>Posted on: {postDate}</p>
      <p>Author: {author}</p>
      <button onClick={() => console.log("Comments:", comments)}>
        Show Comments
      </button>
    </div>
  );
};

export default Litrature;
