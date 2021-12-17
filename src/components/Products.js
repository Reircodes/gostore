import React , { useState } from 'react'
import './Products.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../redux/cartSlice';
import { useSelector } from 'react-redux';



const Products = ({discount , img , price , productName, key}) => {
   const [disable , setDisable] = useState('false')
   const cart = useSelector((state) => state.cart)
  

   console.log(cart)


   const onDoubleClick = () => {
       alert('item has been added already!!')
   }

    const dispatch = useDispatch();

    const addProduct = async () => {


        const item = {
                img : img ,
                productName : productName ,
                price : price ,
                discount : discount ,
            
            }


        const res = await fetch('http://localhost:5000/cartItem' , 
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(item)
        })


        console.log(res)


        setDisable('true')

        // console.log(disable)
    
    

     


        dispatch(addProductToCart({
            img : img ,
            productName : productName ,
            price : price ,
            discount : discount ,

        }))
        // const res = await fetch('http://localhost:5000/cartItem'
        // , {
        //     method: 'POST' ,
        //     headers : {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify(item)
        // })

        // const data = res.json()

        // console.log(data)

//   addShopItem({
//     img : img ,
//     productName : productName ,
//     price : price ,
//     discount : discount ,

// })

    //  addHomeAppliancesItem({
    //     img : img ,
    //     productName : productName ,
    //     price : price ,
    //     discount : discount ,
    
    // })

        // addGcaItem({
        //     img : img ,
        //     productName : productName ,
        //     price : price ,
        //     discount : discount ,
        
        // })

    //     addSmartPhoneItem({
    //         img : img ,
    //         productName : productName ,
    //         price : price ,
    //         discount : discount ,
        
    //     })

    //     addFlashSalesItem({
    //         img : img ,
    //         productName : productName ,
    //         price : price ,
    //         discount : discount ,
        
    //     })





    }

    return (
        <div className='products' data-aos="zoom-in-up">
            <img src={img}/>
            <p>{productName}</p>
            <p>
                Reviews
            </p>
            <div className='price'>
               <s>
                    ${discount}
                </s>
                ${price} 
            </div>
            

            <button className={`products__button ${disable === 'true' ? 'hide' : ''} `}   onClick={addProduct}>ADD TO CART <ArrowRightAltIcon/> </button>
            <p  className={`added__button ${disable === 'true' ? 'show' : 'hide'} `}>Added to cart</p>
        </div>
    )
}

export default Products
