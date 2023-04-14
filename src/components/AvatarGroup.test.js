import React from 'react';
import { render } from '@testing-library/react';
import AvatarGroup from './AvatarGroup';

describe('AvatarGroup', () => {
    const names = [
        { name: 'John Doe', image: 'https://www.w3schools.com/html/pic_trulli.jpg' },
        { name: 'Jane Smith', image: '' },
        { name: 'Mike Johnson', image: 'https://www.w3schools.com/html/img_chania.jpg' },
        { name: 'Sarah Lee', image: 'https://www.w3schools.com/html/img_girl.jpg' },
        { name: 'Tom Davis', image: '' },
        { name: 'Emily White', image: 'https://www.w3schools.com/html/img_lights.jpg' },
    ];

    it('should render properly with default props', () => {
        const { container } = render(<AvatarGroup names={names} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render avatars with correct size', () => {
        const { getAllByTestId } = render(<AvatarGroup names={names} size="sm" />);
        const avatars = getAllByTestId('avatar-initial-text');
        expect(avatars[0]).toHaveStyle({ width: '32px', height: '32px', fontSize: '16px' });
    });

    it('should render avatars with remaining count', () => {
        const { getByTestId } = render(<AvatarGroup names={names} maxLength={2} />);
        const remainingAvatar = getByTestId('avatar-initial-item');
        expect(remainingAvatar).toHaveTextContent('+4');
    });
});