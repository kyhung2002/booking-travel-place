import React from 'react';
const QuantityInput = ({ value, onIncrease, onDecrease }) => {
    let valueValid;
    if (value > 4) {
        valueValid = 4;
    }
    else if (value < 0) {
        valueValid = 0
    }
    else {
        valueValid = value
    }
    return (
        <div className="flex items-center w-full gap-x-2">
            <div
                className="px-2 py-1 font-bold text-gray-700 bg-gray-200 rounded cursor-pointer select-none hover:bg-gray-300"
                onClick={onDecrease}
            >
                -
            </div>
            <input
                type="number"
                className="w-16 text-center border-gray-400 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                value={valueValid}
                readOnly
            />
            <div
                className="px-2 py-1 font-bold text-gray-700 bg-gray-200 rounded cursor-pointer select-none hover:bg-gray-300"
                onClick={onIncrease}
            >
                +
            </div>
        </div>
    );
};

export default QuantityInput;