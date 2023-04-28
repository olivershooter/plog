/*==========


  APP.JS


  ==========*/

import React, { useState } from "react";
import "./App.css";
import PostContent from "./components/PostContent";
import SubmissionForm from "./components/SubmissionForm";

import dummyData from "./utils/dummyData.json"; // Data import

function App() {
  const [literatureList, setLiteratureList] = useState(dummyData);

  const handleFormSubmit = (newPost) => {
    const newId = Math.max(...literatureList.map((l) => l.id)) + 1;
    setLiteratureList([
      ...literatureList,
      { id: newId, comments: [], ...newPost },
    ]);
  };

  return (
    <div className="App">
      <h1>Literature</h1>
      {dummyData.map((literature) => (
        <PostContent
          key={literature.id}
          username={literature.username}
          postDate={literature.postDate}
          author={literature.author}
          title={literature.title}
          content={literature.content}
          comments={literature.comments}
          postType={literature.postType}
        />
      ))}
      <SubmissionForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
