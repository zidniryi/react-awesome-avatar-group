import React from "react";
import AvatarGroup from "./components/AvatarGroup";


const App = () => {
  const names = ["Tomi Budi", "John Doe", "Jane Smith", "Bob Johnson"];

  return (
    <div>
      <h1 id="Text">Example Component</h1>
      <AvatarGroup maxLength={3} size="sm" names={names} />
    </div>
  );
};

export default App;