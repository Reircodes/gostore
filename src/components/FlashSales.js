import React from 'react'
import './FlashSales.css'
import Products from './Products'
import { useSelector } from 'react-redux'


const FlashSales = () => {
    const products = useSelector((state) => state.products)

    const flashsales=   products.filter(item => item.flashsales === true ) ;
    const Filteredflashsales =flashsales.filter( (item , i) => i < 8)
    


   
     


    
    return (
        <section className='flashsales'>
            <div className='flashsales__header'>
              <h2>
              Flash Sale Today!
              </h2>
              <div>
                  <h4>
                      Deals ends in: 
                  </h4>
                   <span>
                         04h : 31m : 13s
                  </span>
              </div>
            </div>

          <div className='flashsales__products'>
         {
                  Filteredflashsales.map(item => 
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
        </section>
    )
}

export default FlashSales
