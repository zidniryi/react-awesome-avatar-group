import React from "react";
import AvatarGroup from "./components/AvatarGroup";


const App = () => {
  const names = [
    { name: 'John Doe', image: '' },
    { name: 'Jane Smith', image: 'https://64.media.tumblr.com/8cfaa4489602dd7eea5c7f9b82b444e1/d4c665ae64812e87-cd/s250x400/6ebec970fb11a33e2597a4ee0fe8698026fc3a24.png' },
    { name: 'Mike Johnson', image: 'https://www.w3schools.com/html/img_chania.jpg' },
    { name: 'Sarah Lee', image: 'https://www.w3schools.com/html/img_girl.jpg' },
    { name: 'Tom Davis', image: '' },
    { name: 'Emily White', image: 'https://www.w3schools.com/html/img_lights.jpg' },
  ];

  return (
    <div>
      <AvatarGroup size="lg" maxLength={3} names={names} />
    </div>
  );
};

export default App;