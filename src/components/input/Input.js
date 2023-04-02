import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from "prop-types"
const Input = ({ type = "text", control, name = "", error = "", children = "", detail, ...rest }) => {
    const { field } = useController({ control, name, defaultValue: "" })
    return (
        <React.Fragment>
            <div className="relative w-full mr-5">
                <input type={type} name={name} id={name} className={`w-full px-6 py-4 font-medium border rounded-lg text-sm  text-text1 border-strock placeholder:text-text4 dark:bg-transparent dark:outline-none dark:border-text2 dark:text-white dark:placeholder:text-text2 ${children ? 'pr-16' : ""}`} {...field} {...rest} />
                {children && <div className="absolute cursor-pointer select-none top-2/4 -translate-y-2/4 right-5">{children}</div>}
            </div>
            {detail && <span className="text-text3">{detail}</span>}
        </React.Fragment>
    );
};
Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    control: PropTypes.any.isRequired,

}
export default Input