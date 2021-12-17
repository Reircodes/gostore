import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({


    name : 'cart',
    initialState : [

        {   id : 28 ,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-75.jpg',
            productName:'DualShock Wireless Controller for PlayStation',
            price:'39.00',
            oldPrice: '50.00' ,
            category:'Game & Accessories'
            
            
        }
      
    
    ] ,
    reducers : {
        addProductToCart : (state , action) => {
            const newProduct = {
                id : Date.now(),
                productName: action.payload.productName,
                price : action.payload.price ,
                img : action.payload.img
            }
            state.push(newProduct)
        } , 
        deleteProductFromCart : (state , action) => {
          return state.filter((item) => item.id !== action.payload.id)
        }
    }

  
})


export const { addProductToCart , deleteProductFromCart} = cartSlice.actions;

export default cartSlice.reducer ;
