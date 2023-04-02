import React from 'react';

const Description = ({ children = "description", className = "" }) => {
    return (
        <span className={`text-base text-text3 ${className}`}>
            {children}
        </span>
    );
};

export default Description;