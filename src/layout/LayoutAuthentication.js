import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
const LayoutAuthentication = (props) => {
    const { children, heading = '' } = props
    return (
        <div className="relative w-full min-h-screen p-4 border sm:p-10 bg-lite isolate dark:bg-darkbg">
            <img src="./elipse.png" alt="" className="w-full absolute bottom-0 left-0 right-0 pointer-events-none z-[-1]" />
            <Link to="/" className="inline-block mb-5 lg:mb-16">
                <img src="./logo.png" alt="crowfunding-app" className="" />
            </Link>
            <div className="w-full  sm:max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-50 mx-auto border border-black border-opacity-10 dark:bg-darkSecondary">
                <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">{heading}</h1>
                {children}
            </div>
        </div>
    );
};
LayoutAuthentication.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node
}
export default LayoutAuthentication;