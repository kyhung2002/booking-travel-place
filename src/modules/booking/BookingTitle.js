import React from 'react';

const BookingTitle = ({ children, className = "mb-1 text-base font-semibold" }) => {
    return (
        <h3 className={`text-text1 ${className}`}>{children}</h3>
    );
};

export default BookingTitle;