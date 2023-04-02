import BookingAuthor from 'modules/booking/BookingAuthor';
import BookingDesc from 'modules/booking/BookingDesc';
import BookingImage from 'modules/booking/BookingImage';
import BookingMeta from 'modules/booking/BookingMeta';
import BookingTitle from 'modules/booking/BookingTitle';
import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ to = "" }) => {
    return (
        <Link to={to} className="w-full p-4 bg-white rounded-lg shadow-lg">
            <BookingImage></BookingImage>
            <div className="py-4">
                <BookingTitle>Powered Kits Learning Boxes</BookingTitle>
                <BookingDesc>Fun, durable and reusable boxes with eco-friendly options.</BookingDesc>
                <div className="flex items-start justify-between mb-5 gap-x-5">
                    <BookingMeta amount="19/1/2002" text="Date"></BookingMeta>
                </div>
                <BookingAuthor></BookingAuthor>
            </div>
        </Link>
    );
};

export default BlogItem;