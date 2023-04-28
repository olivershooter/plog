/*===============


  SUBMISSIONFORM


  ===============*/
import React, { useState } from "react";

const SubmissionForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [postDate, setPostDate] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit({ username, postDate, author, title, content, postType });
    // Send data to the backend server (when we get one)
    try {
      const response = await fetch(
        "https://your-backend-server.com/api/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            postDate,
            author,
            title,
            content,
            postType,
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("Post submitted successfully!");
      } else {
        setSubmitStatus("Error: Failed to submit the post.");
      }
    } catch (error) {
      setSubmitStatus(`${error.message}`);
    }
  };

  return (
    <form class="SubmitPost literature" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Post Date:
        <input
          type="date"
          value={postDate}
          onChange={(e) => setPostDate(e.target.value)}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <label>
        Post Type:
        <select value={postType} onChange={(e) => setPostType(e.target.value)}>
          <option value="">--Select Post Type--</option>
          <option value="story">Story</option>
          <option value="poem">Poem</option>
        </select>
      </label>
      <button type="submit">Submit</button>
      <p>{submitStatus}</p>
    </form>
  );
};

export default SubmissionForm;
