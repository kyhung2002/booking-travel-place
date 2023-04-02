import React from 'react';

const HeaderSearch = () => {
    return (
        <div className="bg-white rounded-full shadow-lg p-2 w-full flex items-center ">
            <div className="flex-1 px-5">
                <input type="text" placeholder="Search your booking trip..." className="w-full text-sm bg-transparent placeholder:text-text5 font-semibold text-text1" />
            </div>
            <button className='w-[60px] h-8 md:w-[72px] rounded-full bg-primary text-white md:h-10 flex items-center justify-center flex-shrink-0'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    );
};

export default HeaderSearch;