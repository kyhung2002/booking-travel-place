import { Button } from 'components/button';
import ModalDropdown from 'components/modal-dropdown/ModalDropdown';
import useClickOutside from 'hooks/useClickOutside';
import HeaderSearch from 'modules/header/HeaderSearch';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalOn } from 'store/modal/modal-slice';

const Header = () => {
    const { isOpen } = useSelector((state) => state.modal)
    const dispatch = useDispatch()
    const { showComponent, setShowComponent, componentRef } = useClickOutside()
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isFixed]);
    return (
        <header className={`h-[78px] container flex justify-between items-center relative transition-all duration-300 ease-in-out ${isFixed ? "!fixed right-0 left-0 bg-whiteSoft  h-[60px] z-50 shadow-lg rounded-lg" : ""}`}>
            <Link className="w-[40px] h-[40px] lg:w-[52px] lg:h-[52px] flex-shrink-0">
                <img src="./logo.png" alt="booking-trip" className='w-full h-full' />
            </Link>
            <div className="w-full sm:max-w-[450px] sm:block hidden">
                <HeaderSearch></HeaderSearch>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <div className="items-center hidden lg:flex lg:gap-x-1">
                        <Link to="/" className='flex items-center transition-all duration-500 gap-x-1 text-text2 xl:p-2 rounded-3xl hover:bg-slate-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            <span className='font-semibold '>Review</span>
                        </Link>
                        <Link to="/" className='flex items-center p-2 transition-all duration-500 gap-x-1 text-text2 rounded-3xl hover:bg-slate-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span className='font-semibold '>Trips</span>
                        </Link>
                        <Link to="/" className='flex items-center p-2 transition-all duration-500 gap-x-1 text-text2 rounded-3xl hover:bg-slate-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                            <span className='font-semibold '>Alert</span>
                        </Link>
                        <Link to="/" className='flex items-center p-2 text-sm transition-all duration-500 gap-x-1 text-text2 rounded-3xl hover:bg-slate-200 md:text-base'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span className='font-semibold'>Cart</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <Button type="button" href="/sign-up" kind="primary" >Sign up</Button>
                        <div className="block lg:hidden" onClick={() => dispatch(setModalOn(!isOpen))}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </div>
                        <div className=" w-[50px] h-[50px] xl:w-[60px] xl:h-[60px]  border-4  cursor-pointer rounded-full relative" ref={componentRef} onClick={() => { setShowComponent(!showComponent) }}>
                            <img src="https://source.unsplash.com/random" alt="" className='object-cover w-full h-full rounded-full' />
                            {showComponent && <ModalDropdown ></ModalDropdown>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;