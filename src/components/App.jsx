import React, { useState } from "react";

function App() {
  function handler() {
    setClr("black");
  }
  const [clr, setClr] = useState("white");
  function handler2() {
    setClr("white");
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: clr }}
        onMouseOver={handler}
        onMouseOut={handler2}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
