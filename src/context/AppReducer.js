export default (state,action) => { console.log(action)
    console.log(state.cart)
    switch(action.type) {
        case 'DELETE_FROM_CART':
            return {
                ...state ,
                cart : state.cart.filter(item => item.id !== action.payload)
            }
       
        case 'ADD_PRODUCT_TO_CART' :
            return {
                ...state ,
                cart : [action.payload , ...state.cart]
            }


        default:

            return state;
    }
}