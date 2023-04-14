import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const names = [
    { name: 'John Doe', image: 'https://www.w3schools.com/html/pic_trulli.jpg' },
    { name: 'Jane Smith', image: '' },
    { name: 'Mike Johnson', image: 'https://www.w3schools.com/html/img_chania.jpg' },
    { name: 'Sarah Lee', image: 'https://www.w3schools.com/html/img_girl.jpg' },
    { name: 'Tom Davis', image: '' },
    { name: 'Emily White', image: 'https://www.w3schools.com/html/img_lights.jpg' },
  ];


  it('matches AvatarGroup snapshot', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});