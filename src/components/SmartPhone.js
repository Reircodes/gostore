import React from 'react'
import Products from './Products'
import './SmartPhone.css'
import { useSelector } from 'react-redux'

const SmartPhone = () => {
    const products = useSelector((state) => state.products)

const SmartPhones =   products.filter(item => item.category === 'smartphone & Tablet') ;
const FilteredSmartPhones =SmartPhones.filter( (item , i) => i < 8)
console.log(FilteredSmartPhones)

    return (
        <article className='smartphone'>
           <div className='smartphone__header'>
           <h2>
                Smartphone & Tablet
            </h2>
            <div className='smartphone__btn'>
                <button >
                    New 2021
                </button>

                <button>
                    Best Seller
                </button>

                <button>
                    Top Rated
                </button>
            </div>


               </div>
            
                <div  className='smartphone__product'>
               {
                     FilteredSmartPhones.map(item => 
                        <Products
                        img={item.img}
                        productName={item.productName}
                        price={item.price}
                        discount={item.oldPrice}
                        key={item.id}
                
                       />
                        )
               }
                   
                </div>
            
        </article>
    )
}

export default SmartPhone
