import React from 'react';

const FilterSelect = ({ children = "countryside" }) => {
    return (
        <div className={`relative font-semibold transition-all duration-300 text-text3 hover:text-text1 after:transition-all group after:duration-300 after:ease-in-out after:w-0  after:bg-black after:block after:h-[2px] py-3 px-4  cursor-pointer rounded-lg border-b-2 flex items-center justify-center `}>
            {children}
        </div>
    );
};

export default FilterSelect;