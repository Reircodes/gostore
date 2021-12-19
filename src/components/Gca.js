import React from 'react'
import Products from './Products'
import './Gca.css'
import { useSelector } from 'react-redux'

const Gca = () => {
    const products = useSelector((state) => state.products)

    const Gca =   products.filter(item => item.category === 'Game & Accessories' ) ;
    const FilteredGca =Gca.filter( (item , i) => i < 8)
    
    return (
        <article className='gca'>
           <div className='gca__header'>
           <h2>
           Game & Accessories
            </h2>
            <div className='gca__btn'>
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
            
                <div  className='gca__product'>
              {
                  FilteredGca.map(item => 
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

export default Gca