import React , {useState, useEffect} from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';



const Cart = ({cartItem , deleteItem}) => {
    const [value , setValue] = useState(1)
    const price = cartItem.map((item) => parseInt(item.price * value))
    const total = price.reduce((acc ,item) => (acc += item), 0)
        //    const totalPrice = useSelector((state) => state.total)
  


    // const onChange = (e) => {
    //     setValue(e.target.value)

    // }

    console.log(cartItem.length)

    return (

        <>
        <div className='cart__container'>
          <Link to='/shop'>     <p className={`cart__empty ${cartItem.length == 0 ? 'show' : 'hide' }`}>
       Cart is empty!! , Click here to go to Shop
            </p></Link>  
                <section className={`cart ${cartItem.length > 0 ? 'show' : 'hide'}`}>
               <table>
                   <tr>
                   <th>Product</th>  
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Subtotal</th>
                   </tr>

                 {
                     cartItem.map(item => (
                       <CartItem
                       img={item.img}
                        productName={item.productName}
                        price={item.price}
                        key={item.id}
                        id={item.id}
                        onDelete= {deleteItem}
                        
                    
                       
                       />
                     )
                        
                        )
                   }


                
               </table>
           </section>


           <section className={`cart__checkout ${cartItem.length > 0 ? 'show' : 'hide'}`}>
             <p>
             Total :    {
                       total
                   }
             </p>

                   <button className='cart__checkoutbutton'>
                      Checkout
                   </button>
           </section>
   
        </div>
   
        </>
    )
}

export default Cart
