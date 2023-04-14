import React from 'react';
import { render } from '@testing-library/react';
import AvatarGroup from './AvatarGroup';

describe('AvatarGroup component', () => {
    it('should render properly with default props', () => {
        const { container } = render(<AvatarGroup names={['Alice', 'Bob', 'Charlie']} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render the correct number of avatars with the maxLength prop', () => {
        const { container } = render(<AvatarGroup maxLength={2} names={['Alice', 'Bob', 'Charlie']} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render avatars with the correct size with the size prop', () => {
        const { container } = render(<AvatarGroup size="sm" names={['Alice', 'Bob', 'Charlie']} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('should render avatars with the correct initials', () => {
        const { getByText } = render(<AvatarGroup names={['Alice', 'Bob', 'Charlie']} />);
        expect(getByText('AB')).toBeInTheDocument();
        expect(getByText('CH')).toBeInTheDocument();
    });
});