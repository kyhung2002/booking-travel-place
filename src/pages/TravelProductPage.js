import FilterSelect from 'components/filter/FilterSelect';
import BookingFeature from 'modules/booking/BookingFeature';
import BookingItem from 'modules/booking/BookingItem';
import ClientLayout from 'modules/client/ClientLayout';
import Heading from 'modules/common/Heading';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Gap from 'components/Gap';
import { Button } from 'components/button';
const TravelProductPage = () => {
    return (
        <ClientLayout>
            <h1 className={`relative text-2xl font-semibold block  before:absolute before:w-[60px] before:h-[4px] before:rounded-lg before:bg-primary before:content-[''] before:block before:top-[-6px] my-3`}>Our featured tours</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={8}
                draggable
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    // when window width is >= 640px
                    350: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 32,
                    },
                    1336: {
                        slidesPerView: 8,
                        spaceBetween: 32,
                    },
                }}
            >
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
                <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide> <SwiperSlide><FilterSelect></FilterSelect></SwiperSlide>
            </Swiper>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 ">
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
                <BookingItem imageClass="h-[200px]"></BookingItem>
            </div>
            <Gap></Gap>
            <Button kind="primary" className='w-full mx-auto md:w-auto'>Load more</Button>
        </ClientLayout>
    );
};

export default TravelProductPage;