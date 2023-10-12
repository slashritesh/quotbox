import { createSlice } from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type { Rootstate } from '../store'
import data from '../../db/data'

interface quote {
    id?: number ,
    name : string
}

interface initialStateType {
    value : quote[]
}

const initialState : initialStateType = {
    value : data
}

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers:{
        createQuote : (state , action : PayloadAction<quote>)=>{
            state.value.push(action.payload)
        },
        deleteQuote : (state, action : PayloadAction<quote>)=>{
            state.value = state.value.filter((q)=>q.id !== action.payload.id)
        }
    }
})


export const {createQuote,deleteQuote} = quoteSlice.actions
export default quoteSlice.reducer

export const allquote = (state : Rootstate) => state.quote.value 

