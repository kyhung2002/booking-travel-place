import { Button } from 'components/button';
import useClickOutside from 'hooks/useClickOutside';
import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalOn } from 'store/modal/modal-slice';
import Header from './Header';
import Footer from './Footer';

const ClientLayout = ({ children }) => {
    const { isOpen } = useSelector((state) => state.modal)
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <Header></Header>
            <div className="flex items-center gap-x-3">
            </div>
            <div className="container w-full min-h-screen" >
                {children}
                <ReactModal isOpen={isOpen} overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center" className="w-[80%] h-full bg-white rounded-2xl outline-none p-10 relative  max-h-[70vh] sm:max-h-[80vh] overflow-y-auto scroll-hidden">
                    <img src="./elipse.png" alt="" className="absolute bottom-0 left-0 " />
                    <button className="absolute flex items-center justify-center cursor-pointer z-5 right-3 top-3 text-text1 w-11 h-11" onClick={() => dispatch(setModalOn(false))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                    <div className="flex flex-col items-center justify-center h-full gap-8">
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
                        <Button type="button" href="/sign-up" kind="primary">Sign up</Button>
                    </div>
                </ReactModal>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default ClientLayout;