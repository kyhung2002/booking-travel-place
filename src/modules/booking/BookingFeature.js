import React from 'react';
import BookingImage from './BookingImage';
import BookingTitle from './BookingTitle';
import BookingDesc from './BookingDesc';
import BookingCategory from './BookingCategory';
import BookingMeta from './BookingMeta';
import { Button } from 'components/button';
import Gap from 'components/Gap';
import BookingAuthor from './BookingAuthor';

const BookingFeature = () => {
    return (
        <div className="flex flex-col items-center w-full p-4 shadow-basic rounded-xl sm:gap-x-8 gap-y-3">
            <BookingImage className="h-[300px] w-full"></BookingImage>
            <div className="flex-1">
                <BookingCategory className="mb-4">Architecture</BookingCategory>
                <BookingTitle className='mb-4 text-xl font-bold'>Remake - We Make architecture exhibition</BookingTitle>
                <BookingDesc></BookingDesc>
                <div className="w-full rounded-full bg-[#EFEFEFE] h-1 mb-6">
                    <div className="w-2/4 h-full rounded-full bg-primary">
                    </div>
                </div>
                <div className="flex items-start justify-between mb-4 gap-x-5">
                    <BookingMeta size="big" text='title'></BookingMeta>
                    <BookingMeta size="big" text='title'></BookingMeta>
                    <BookingMeta size="big" text='title'></BookingMeta>
                </div>
                <BookingAuthor></BookingAuthor>
                <Gap></Gap>
                <Button kind="primary" className="w-full p-2">View detail</Button>
            </div>
        </div>
    );
};

export default BookingFeature;