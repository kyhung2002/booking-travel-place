import React from 'react';

const BookingImage = ({ className = "h-[158px]", src = "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", subImage = "https://a0.muscache.com/im/pictures/0adc1aec-bd6f-4f10-8536-a3bb6faecd20.jpg?im_w=720" }) => {
    return (
        <div className={`relative transition-all duration-3000 ease-in-out group ${className} cursor-pointer`}>
            <img src={src} alt="crow-item" className="object-cover w-full h-full rounded-2xl" />
            {subImage && <img src={subImage} alt="" className='absolute inset-0 z-30 object-cover w-full h-full ease-in-out opacity-0 group-hover:transition-all group-hover:opacity-100 rounded-2xl group-hover:duration-3000' />}
        </div>
    );
};

export default BookingImage;