import React from 'react';

const Heading = ({ children = "Where to go, right now", className = "", level = "h3", line = true }) => {
    return (
        <h3 className={`relative text-2xl font-semibold block ${line && `before:absolute before:w-[60px] before:h-[4px] before:rounded-lg before:bg-primary before:content-[''] before:block before:top-[-6px]`} ${className}`}>{children}</h3>
    );
};

export default Heading;