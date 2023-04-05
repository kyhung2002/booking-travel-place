import React from 'react';

const ButtonGoogle = ({ children, onClick = () => { } }) => {
    return (
        <button className="flex items-center justify-center w-full py-4 mb-5 text-sm font-semibold border sm:text-base gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke" onClick={onClick}>
            <img src="./icon-google.png" alt="icon-google" />
            <span>{children}</span>
        </button>
    );
};


export default ButtonGoogle
