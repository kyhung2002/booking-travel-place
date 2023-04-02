import { Dropdown } from 'components/dropdown';
import Toggle from 'components/toggle/Toggle';
import useClickOutside from 'hooks/useClickOutside';
import ClientLayout from 'modules/client/ClientLayout';
import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Gap from 'components/Gap';
import { Button } from 'components/button';
import Heading from 'modules/common/Heading';
import Description from 'modules/common/Description';
import CampaignItem from 'modules/booking/BookingItem';
import FAQ from 'components/FAQ';
import BlogItem from 'modules/blog/BlogItem';
import BookingItem from 'modules/booking/BookingItem';
const Homepage = () => {
    return (
        <ClientLayout>
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                grabCursor
                breakpoints={{
                    // when window width is >= 640px
                    350: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 32,
                    },
                    1336: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                }}
            >
                <SwiperSlide> <Link className="flex justify-between w-full h-full p-5 transition-all duration-300 border-2 rounded-lg border-text2 hover:bg-primary hover:border-primary hover:text-white text-text1">
                    <span className="font-bold">Hotel</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </Link></SwiperSlide>
                <SwiperSlide> <Link className="flex justify-between w-full h-full p-5 transition-all duration-300 border-2 rounded-lg border-text2 hover:bg-primary hover:border-primary hover:text-white text-text1">
                    <span className="font-bold">Hotel</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </Link></SwiperSlide>
                <SwiperSlide> <Link className="flex justify-between w-full h-full p-5 transition-all duration-300 border-2 rounded-lg border-text2 hover:bg-primary hover:border-primary hover:text-white text-text1">
                    <span className="font-bold">Hotel</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </Link></SwiperSlide>
                <SwiperSlide> <Link className="flex justify-between w-full h-full p-5 transition-all duration-300 border-2 rounded-lg border-text2 hover:bg-primary hover:border-primary hover:text-white text-text1">
                    <span className="font-bold">Hotel</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </Link></SwiperSlide>
                <SwiperSlide> <Link className="flex justify-between w-full h-full p-5 transition-all duration-300 border-2 rounded-lg border-text2 hover:bg-primary hover:border-primary hover:text-white text-text1">
                    <span className="font-bold">Hotel</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </Link></SwiperSlide>
            </Swiper>
            <Gap></Gap>
            <div className="flex flex-col items-center justify-center bg-hero w-full h-[250px] sm:h-[300px] lg:h-[400px] bg-cover bg-center bg-no-repeat relative text-white">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="z-40">
                    <h1 className="mb-5 text-4xl font-semibold lg:text-6xl">Booking Trip.</h1>
                    <div className="text-center group">
                        <Link to="/sign-up" className="inline-flex items-center p-4 font-semibold transition-all duration-300 bg-white rounded-lg group hover:bg-secondary hover:text-white text-text1 gap-x-2"><span>Start your trip now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 transition-all duration-300 group-hover:rotate-180">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <Gap></Gap>
            <Heading className="mb-3">Where to go, right now</Heading>
            <Description>Spots at the top of travelers must-go lists</Description>
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                pagination={{ clickable: true }}
                grabCursor
                breakpoints={{
                    // when window width is >= 640px
                    350: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                    1336: {
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                }}
            >
                <SwiperSlide
                >
                    <BookingItem></BookingItem>
                </SwiperSlide>
                <SwiperSlide
                >
                    <BookingItem></BookingItem>
                </SwiperSlide>
                <SwiperSlide
                >
                    <BookingItem></BookingItem>
                </SwiperSlide>

                <SwiperSlide
                >
                    <BookingItem></BookingItem>
                </SwiperSlide>
                <SwiperSlide
                >
                    <BookingItem></BookingItem>
                </SwiperSlide>
                <SwiperSlide
                >
                    <BookingItem></BookingItem>
                </SwiperSlide>
            </Swiper>
            <Gap></Gap>
            <div className="flex flex-col items-center justify-center p-10 bg-blog bg-fixed w-full h-[300px] sm:h-[350px] lg:h-[500px] bg-cover bg-center bg-no-repeat relative text-white">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="z-40">
                    <Link to="/sign-up" className="inline-flex items-center p-6 text-sm font-bold transition-all duration-300 bg-white rounded-lg sm:text-lg font-blog group hover:bg-primary hover:text-white text-text1 gap-x-2"><span>Save your memories? Write your blog now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 w-6 h-6 transition-all duration-300 group-hover:rotate-180">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            <Gap></Gap>
            <Heading className="mb-3">More blogs to explore</Heading>
            <Description >
                Book these experiences for a close-up look at Ho Chi Minh City.
            </Description>
            <div className="grid max-w-full mt-5 md:grid-cols-1 gap-y-5 lg:grid-cols-4 lg:gap-x-5">
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
            </div>
            <Gap></Gap>
        </ClientLayout>
    );
};

export default Homepage;