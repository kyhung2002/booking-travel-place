import modalSlice from "./modal/modal-slice";


const { combineReducers } = require("@reduxjs/toolkit");

export const reducer = combineReducers({
    modal: modalSlice
});
