import React from 'react';

const Field = ({ children, className = "" }) => {
    return (
        <div className={`flex flex-col items-start mb-4 gap-y-2 lg:mb-5 lg:gap-y-3 ${className}`}>
            {children}
        </div>
    );
};

export default Field;