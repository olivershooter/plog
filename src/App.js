/*==========
  SRC/APP.JS
  ==========*/
import React from "react";
import "./App.css";
import Postcontent from "./components/Postcontent";

import dummyData from "./utils/dummyData.json"; // Data import

function App() {
  return (
    <div className="App">
      <h1>Literature</h1>
      {dummyData.map((literature) => (
        <Postcontent
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
    </div>
  );
}

export default App;
