import React from "react";
import AvatarGroup from "../components/AvatarGroup";

export default {
    title: "AvatarGroup",
    component: AvatarGroup,
};

const Template = (args) => <AvatarGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    maxLength: 3,
    size: "md",
    names: ["Tomi Budi", "John Doe", "Jane Smith", "Bob Johnson"],
};

export const Large = Template.bind({});
Large.args = {
    maxLength: 5,
    size: "lg",
    names: ["Tomi Budi", "John Doe", "Jane Smith", "Bob Johnson", "Lucas Gomez", "Alice Smith"],
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
    maxLength: 6,
    size: "xl",
    names: [
        "Tomi Budi",
        "John Doe",
        "Jane Smith",
        "Bob Johnson",
        "Lucas Gomez",
        "Alice Smith",
        "Sarah Adams",
    ],
};





