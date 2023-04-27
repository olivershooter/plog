// src/App.js
import React from "react";
import "./App.css";
import Litrature from "./litrature";

const dummyData = [
  {
    id: 1,
    username: "User1",
    postDate: "2023-04-27",
    author: "Author1",
    content: [
      "This is the first paragraph of the story.",
      "This is the second paragraph of the story.",
      // Add more paragraphs as needed
    ],
    comments: ["Comment1", "Comment2"],
    title: ["Story Time"],
  },
  {
    id: 2,
    username: "User2",
    postDate: "2023-04-26",
    author: "Author2",
    content: [
      "This is the first paragraph of the poem.",
      "This is the second paragraph of the poem.",
      // Add more paragraphs as needed
    ],
    comments: ["Comment3", "Comment4"],
    title: ["A poem to remember"],
  },
  // Add more dummy data as needed
];

function App() {
  return (
    <div className="App">
      <h1>Litrature</h1>
      {dummyData.map((litrature) => (
        <Litrature
          key={litrature.id}
          username={litrature.username}
          postDate={litrature.postDate}
          author={litrature.author}
          title={litrature.title}
          content={litrature.content}
          comments={litrature.comments}
        />
      ))}
    </div>
  );
}

export default App;
