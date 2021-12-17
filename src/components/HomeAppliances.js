import Products from './Products'
import './HomeAppliances.css'
import { useSelector } from 'react-redux'



const HomeAppliances = () => {
const products = useSelector((state) => state.products)

const HomeAppliances =   products.filter(item => item.category === 'Electronic & Housewares') ;
const FilteredHomeAppliances =HomeAppliances.filter( (item , i) => i < 8)

    return (
        <article className='homeappliances'>
            
           <div className='homeappliances__header'>
           <h2>
                Home Appliances
            </h2>
            <div className='homeappliances__btn'>
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
            
                <div  className='homeappliances__product'>
               
                {
                    FilteredHomeAppliances.map((item) => ( 
                        <Products
                        img={item.img}
                        productName={item.productName}
                        price={item.price}
                        discount={item.oldPrice}
                        key={item.id}
  
                       />
                    ))
                }
                
                </div>
            
        </article>
    )
}

export default HomeAppliances