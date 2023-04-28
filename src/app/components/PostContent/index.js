/*==========


  POSTCONTENT.JS


  ==========*/

import React from "react";
import "./index.css";

const PostContent = ({
  username,
  postDate,
  author,
  title,
  content,
  comments,
  postType,
}) => {
  return (
    <div className={`literature ${postType}`}>
      <h3>{username}</h3>
      <div className="title">{title}</div>
      <div className="content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <p>Posted on: {postDate}</p>
      <p>Author: {author}</p>
      <span>Type: {postType}</span>
      <button onClick={() => console.log("Comments:", comments)}>
        Show Comments
      </button>
    </div>
  );
};

export default PostContent;
