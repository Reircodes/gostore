import React from 'react'
import './Shop.css'
import ShopHeader from './ShopHeader'
import { useSelector } from 'react-redux'
import Products from './Products'


const Shop = () => {
    const storedProducts = useSelector(state => state.products)



    return (
        <>
        
       <section className='shop'>
          <ShopHeader/>
           <div className='shop__body'>
                   <div> </div>

                <div className='shop__Products'>
                {
                       storedProducts.map(item => 
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

           </div>

       
      


       </section>

       </>

    )
}

export default Shop
