import React from 'react';
import AvatarGroup from '../components/AvatarGroup';

export default {
    title: 'Component/Avatar Group',
    component: AvatarGroup,
    argTypes: {
        size: {
            control: { type: 'select', options: ['xs', 'sm', 'md', 'lg'] }
        },
        maxLength: {
            control: { type: 'number', min: 1 }
        },
        names: {
            control: { type: 'object' }
        },
    },
};

const Template = (args) => <AvatarGroup {...args} />;

export const DefaultMedium = Template.bind({});
DefaultMedium.args = {
    maxLength: 3,
    size: 'md',
    names: [
        { name: 'John Doe', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', image: "https://64.media.tumblr.com/8cfaa4489602dd7eea5c7f9b82b444e1/d4c665ae64812e87-cd/s250x400/6ebec970fb11a33e2597a4ee0fe8698026fc3a24.png" },
        { name: 'Bob Johnson', image: null },
        { name: 'Alice Williams', image: null },
    ]
};

export const Large = Template.bind({});
Large.args = {
    maxLength: 4,
    size: 'lg',
    names: [
        { name: 'John Doe', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', image: "https://64.media.tumblr.com/8cfaa4489602dd7eea5c7f9b82b444e1/d4c665ae64812e87-cd/s250x400/6ebec970fb11a33e2597a4ee0fe8698026fc3a24.png" },
        { name: 'Bob Johnson', image: null },
        { name: 'Alice Williams', image: null },
        { name: 'Emily Brown', image: null },
    ]
};

export const Small = Template.bind({});
Small.args = {
    maxLength: 2,
    size: 'sm',
    names: [
        { name: 'John Doe', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', image: "https://64.media.tumblr.com/8cfaa4489602dd7eea5c7f9b82b444e1/d4c665ae64812e87-cd/s250x400/6ebec970fb11a33e2597a4ee0fe8698026fc3a24.png" },
        { name: 'Bob Johnson', image: null },
        { name: 'Alice Williams', image: null },
    ]
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
    maxLength: 2,
    size: 'xs',
    names: [
        { name: 'John Doe', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', image: "https://64.media.tumblr.com/8cfaa4489602dd7eea5c7f9b82b444e1/d4c665ae64812e87-cd/s250x400/6ebec970fb11a33e2597a4ee0fe8698026fc3a24.png" },
        { name: 'Bob Johnson', image: null },
        { name: 'Alice Williams', image: null },
    ]
};