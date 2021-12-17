import { createSlice } from '@reduxjs/toolkit'

const priceTotalSlice = createSlice({


    name : 'total',
    initialState : [] ,
    reducers : {
        addPrice : (state , action) => {
            const totalPrice = {
                total : action.payload.total
            }
            state.push(totalPrice)

        }}
        

        })



export const { addPrice} = priceTotalSlice.actions;

export default priceTotalSlice.reducer ;
