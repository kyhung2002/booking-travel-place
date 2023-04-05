import React from 'react';

const DropdownIcon = ({ className = "", onClick = () => { } }) => {
    return (
        <div>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#A2A2A8" strokeWidth="2" className={`${className} cursor-pointer`} onClick={onClick} />
            </svg>
        </div>
    );
};

export default DropdownIcon;