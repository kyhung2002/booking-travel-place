import React from 'react';
import { Link } from 'react-router-dom';

const BookingCategory = ({ children = "Education", className = "mb-4 text-sm", icon = "" }) => {
    return (
        <Link to="/" className={`flex items-start font-medium gap-x-3 text-text3 ${className}`}>
            {icon}
            <span>{children}</span>
        </Link>
    );
};

export default BookingCategory;