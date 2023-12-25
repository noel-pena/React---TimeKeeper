import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString("IT-it");

  const [currentTime, getTime] = useState(false);

  function handleClick() {
    getTime(!currentTime);
  }

  setInterval(handleClick, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={handleClick}>Get Time</button> */}
    </div>
  );
}

export default App;
