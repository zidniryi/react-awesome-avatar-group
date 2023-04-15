
# react-awesome-avatar-group
react-awesome-avatar-group is a library for text that is small and easy to customize

## Run this project
- npm i
- npm run start

## Run this test
- npm run test

## Run this coverage
- npm run test:coverage

## Run this storybook (use node 16+)
- npm run storybook 

## Features
- small size
- easy to use


## Installation
You can use npm

```
npm i react-awesome-avatargroup
```

or via Yarn

```js
yarn add react-awesome-avatargroup
```

or directly import from component
import AvatarGroup from "./components/AvatarGroup";


## Usage
    
Here's a sample implementation 


```javascript
import React from "react";
import AvatarGroup from "./components/AvatarGroup";
// or via npm cause I alredy publish it
// import AvatarGroup from "react-awesome-avatargroup";

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
 ```

## Result
![enter image description here](https://i.ibb.co/ygdjgTh/Screen-Shot-2023-04-15-at-17-04-33.png)

## Options

Option | Type | Default | Description
--- | --- | --- | ---
|[`names`](#names) | `Array Object` | `[]` | An array of names contain name and image.|
|[`size`](#size) | `string` | `md` | Size of avattar
|[`maxLength`](#maxLength) | `number` | `3` | Max length of the avatar displayed



