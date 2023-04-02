const { createSlice } = require("@reduxjs/toolkit");

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isOpen: false,
    },
    reducers: {
        setModalOn: (state, action) => ({
            ...state, isOpen: action.payload
        })
    }
})

export const {setModalOn} = modalSlice.actions
export default modalSlice.reducer