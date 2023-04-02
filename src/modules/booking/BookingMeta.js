import React from 'react';

const BookingMeta = ({ amount = '$2,000', text = '', size = 'small' }) => {
    return (
        <div className="flex flex-col gap-y-1">
            <h4 className={` font-semibold text-text2 ${size === 'small' ? `text-sm` : `text-xl`}`}>{amount}</h4>
            <span className={`${size === "small" ? "text-xs" : "text-base"} text-text4`}>{text}</span>
        </div>
    );
};

export default BookingMeta;