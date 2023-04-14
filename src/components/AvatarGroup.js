import React from 'react';

const AvatarGroup = ({ maxLength = 3, size = 'md', names }) => {
    const getInitials = (name) => {
        const words = name.split(' ');
        return words.map((word) => word.charAt(0).toUpperCase()).join('').substring(0, 2);
    };

    const renderAvatars = () => {
        const remainingCount = names.length - maxLength;
        const avatarsToRender = names.slice(0, maxLength);
        const avatars = avatarsToRender.map((name, index) => {
            const initials = getInitials(name);
            return (
                <div key={`avatar-${index}`} style={{ display: 'inline-block' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: size === 'xs' ? '24px' : size === 'sm' ? '32px' : size === 'md' ? '40px' : '48px',
                            height: size === 'xs' ? '24px' : size === 'sm' ? '32px' : size === 'md' ? '40px' : '48px',
                            borderRadius: '50%',
                            backgroundColor: '#ccc',
                            color: '#fff',
                            fontSize: size === 'xs' ? '12px' : size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px',
                        }}
                    >
                        {initials}
                    </div>
                </div>
            );
        });

        if (remainingCount > 0) {
            avatars.push(
                <div key="avatar-remaining" style={{ display: 'inline-block' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: size === 'xs' ? '24px' : size === 'sm' ? '32px' : size === 'md' ? '40px' : '48px',
                            height: size === 'xs' ? '24px' : size === 'sm' ? '32px' : size === 'md' ? '40px' : '48px',
                            borderRadius: '50%',
                            backgroundColor: '#ccc',
                            color: '#fff',
                            fontSize: size === 'xs' ? '12px' : size === 'sm' ? '16px' : size === 'md' ? '20px' : '24px',
                        }}
                    >
                        +{remainingCount}
                    </div>
                </div>
            );
        }

        return avatars;
    };

    return <div>{renderAvatars()}</div>;
};

export default AvatarGroup;