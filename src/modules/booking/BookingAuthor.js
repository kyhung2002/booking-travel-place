import React from 'react';

const BookingAuthor = ({ src = "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", authorName = "Mahfuzul Nabil" }) => {
    return (
        <div className="flex items-center gap-x-3">
            <div className="object-cover w-8 h-8">
                <img src={src} alt="author-avatar" className='w-full h-full rounded-full' />
            </div>
            <p className="text-xs text-text3">
                by <span className="font-semibold text-text2">{authorName}</span>
            </p>
        </div>
    );
};

export default BookingAuthor;