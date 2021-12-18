import React , {useState, useEffect} from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import CartIsEmpty from './CartIsEmpty';



const Cart = ({cartItem , deleteItem}) => {
    const [value , setValue] = useState(1)
    // const price = cartItem.map((item) => parseInt(item.price * value))
    // const total = price.reduce((acc ,item) => (acc += item), 0)

    // console.log(price)
  
  

    // const onChange = (e) => {
    //     setValue(e.target.value)

    // }


    const Clicked = () => {
        alert('You have reached the end of this application')
    }

  
    console.log(cartItem.length)

    return (

        <>
        {
            cartItem.length === 0 ? <CartIsEmpty/> : (
                <div className='cart__container'>
       
                <section className={`cart`}>
               <table>
                   <tr>
                   <th>Product</th>  
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Subtotal</th>
                   </tr>

                 {
                     cartItem.map(cart => (
                       <CartItem
                        onDelete= {deleteItem}
                    item={cart}
                    key={cart.id}
                    id={cart.id}
                    price={cart.price}
                        
                    
                       
                       />
                     )
                        
                        )
                   }


                
               </table>
           </section>


           <section className={`cart__checkout ${cartItem.length > 0 ? 'show' : 'hide'}`}>
            
                   <button className='cart__checkoutbutton' onClick={Clicked}>
                      Checkout
                   </button>
           </section>
   
        </div>
   
            )
        }
        </>
    )
}

export default Cart
