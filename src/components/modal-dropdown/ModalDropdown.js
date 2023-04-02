import React from 'react';
import { Link } from 'react-router-dom';

const ModalDropdown = ({ children, ...props }) => {
    return (
        <div className="absolute top-11 lg:top-14  left:0 md:left-3/4 -translate-x-3/4 min-w-[200px]  flex flex-col bg-white  min-h-[100px] border rounded-xl gap-y-5 z-30 before:content-[''] before:block before:w-[10px] py-7 px-5 before:h-[10px] before:absolute before:bg-white before:top-[-5px] before:z-50 md:before:right-1/4 before:right-3 before:rotate-45 text-base" {...props}>
            <Link className="w-full font-semibold transition-all duration-300 rounded-lg hover:underline">Viem Profile</Link>
            <Link className="w-full font-semibold transition-all duration-300 rounded-lg hover:underline">Bookings</Link>
            <Link className="w-full font-semibold transition-all duration-300 rounded-lg hover:underline">Account info</Link>
            <Link className="w-full font-semibold transition-all duration-300 rounded-lg hover:underline">Sign out</Link>
        </div>
    );
};

export default ModalDropdown;