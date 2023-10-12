import { createSlice } from '@reduxjs/toolkit'

const initialState : {value : boolean}= {
    value : false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers : {
        open: (state)=>{
            state.value = true
        },
        close:(state)=>{
            state.value = false
        }
    }
})

export default modalSlice.reducer
export const {open,close} = modalSlice.actions 