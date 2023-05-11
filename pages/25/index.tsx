import React, { useState, useRef } from "react";

function App() {
  const [currentName, setCurrentName] = useState("");
  const inputRef = useRef("");

  console.log("render");

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => setCurrentName(inputRef.current.value)}>
        제출
      </button>
      <div>나의 이름은 {currentName} 입니다.</div>
    </>
  );
}

export default App;
