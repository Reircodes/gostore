import React , { useState } from 'react'
import './Products.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import db from '../firebase';
import { addDoc , collection} from 'firebase/firestore/lite'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from './Spinner';
import {  getDoc } from 'firebase/firestore/lite';
// import { doc} from "firebase/firestore/lite";
import { doc, setDoc } from "firebase/firestore/lite"; 
import CheckIcon from '@mui/icons-material/Check';




const Products = ({discount , img , price , productName, key}) => {
    AOS.init()
   const [disable , setDisable] = useState('false')
   const [showSpinner , setShowSpinner] = useState('false')
  

    const dispatch = useDispatch();

    const addProduct = async () => {


        // const item = {
        //         img : img ,
        //         productName : productName ,
        //         price : price ,
        //         discount : discount ,
            
        //     }


       

   
     

        // await addDoc(collection(db,"cartItem",productName),
        // {
        //     img : img ,
        //     productName : productName ,
        //     price : price ,
        //     discount : discount ,
        
        // })

        // const ref = doc(db, 'cartItem', productName);
    
    

     
  

    var ref = doc(db,'cartItem',productName);
    const docSnap = await getDoc(ref)

    console.log(docSnap)

        
    if(docSnap.exists()){
     alert('This Product is already in cart')
    

    }else{
        setShowSpinner('true')
        await setDoc(ref,  {
            img : img ,
            productName : productName ,
            price : price ,
            discount : discount ,
        
        }).then(()=> {
            console.log('Added')
        }).catch((err)=> {
            alert(err)
        })
        setDisable('true')
        
    }


      


        


        // console.log(disable)
    
    

     


        dispatch(addProductToCart({
            img : img ,
            productName : productName ,
            price : price ,
            discount : discount ,

        }))
     


    }

    return (
        <div className='products' data-aos="zoom-in-up">

            {/* <Spinner/> */}
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
            

            <button className={`products__button ${disable === 'true' ? 'hide' : ''} `}   onClick={addProduct}>ADD TO CART {showSpinner === 'false' ? <ArrowRightAltIcon/> : <Spinner/>} </button>
            <p  className={`added__button ${disable === 'true' ? 'show' : 'hide'} `}>Added to cart</p>
        </div>
    )
}

export default Products
