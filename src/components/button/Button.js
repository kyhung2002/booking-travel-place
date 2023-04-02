import React from 'react';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
const Button = ({ type = "submit", className = "", children, isLoading = false, ...rest }) => {
    const child = !!isLoading ? <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin border-b-transparent"></div> : children
    let defaultBtnStyle = `py-2 px-4 text-base font-semibold rounded-xl flex justify-center items-center text-center  ${className} disabled:opacity-40 min-h-[56px] transition-all duration-500 ${!!isLoading ? "opacity-50 pointer-events-none" : ""}`
    switch (rest.kind) {
        case 'primary':
            defaultBtnStyle += 'bg-primary text-white hover:bg-secondary hover:text-white'
            break;
        case 'secondary':
            defaultBtnStyle += 'bg-secondary text-white hover:bg-primary hover:text-white'
            break;
        case 'ghost':
            defaultBtnStyle += 'bg-secondary bg-opacity-20 text-secondary'
            break;
        default: break;
    }
    if (rest.href) return (<Link to={rest.href} className={defaultBtnStyle}>{children}</Link>)
    return (
        <button type={type} className={defaultBtnStyle} {...rest}>
            {child}
        </button>
    );
};
Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    href: PropTypes.string,
    kind: PropTypes.oneOf(["primary", "secondary", "ghost"])
}

export default Button;