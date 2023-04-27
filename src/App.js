import React from "react";
import AvatarGroup from "./components/AvatarGroup";


const App = () => {
  const names = [
    { name: 'John Ahmad Doe', image: '' },
    { name: 'Jane Smith Rebeca Hanna', image: '' },
    { name: 'Diana', image: '' },

  ];

  return (
    <div>
      <AvatarGroup size="lg" maxLength={3} names={names} />
    </div>
  );
};

export default App;