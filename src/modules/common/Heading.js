import React from 'react';

const Heading = ({ children = "Where to go, right now", className = "" }) => {
    return (
        <h3 className={`relative text-2xl font-semibold block  before:absolute before:w-[60px] before:h-[4px] before:rounded-lg before:bg-primary before:content-[''] before:block before:top-[-6px] ${className}`}>{children}</h3>
    );
};

export default Heading;