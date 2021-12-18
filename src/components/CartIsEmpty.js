import React from 'react'
import { Link } from 'react-router-dom'
import './CartIsEmpty.css'

const CartIsEmpty = () => {
    return (
        <Link to='/shop' style={{color: 'black'}}> 
           <div className='cartIsempty'>
      
          <span>  Click here to go to shop :</span>  Cart is Empty
        
        </div>
        </Link>
     
    )
}

export default CartIsEmpty
