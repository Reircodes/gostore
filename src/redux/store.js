import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import productReducer from './productSlice'
import blogReducer from './BlogSlice'
import priceTotalReducer from './PriceTotalSlice'

export default configureStore({
    reducer: {
        cart : cartReducer ,
        products : productReducer ,
        blogs : blogReducer ,
        total : priceTotalReducer
        

    }
})