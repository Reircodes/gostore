import React from 'react'
import Banner from './Banner'

const BannerSectionThree = () => {
    return (
        <div className='banners__container'>
        <div className='banners'>
        <div className='banners'>
           <div     data-aos="fade-right">
           <Banner 
       
            text='New Arrivals'
            title='Virtual Reality 3d mobile game'
            img='https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/banner-1-electronic-1.jpg'
            
            />
           </div>
        <div  data-aos="fade-left">
        <Banner
            text='ON THE WEEKEND'
            title='ON SALE NOW BLACK FRIDAY'
            img='	https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/banner-2-electronic-1.jpg'
            
            
            />
        </div>
        </div>
        </div>
        </div>
    )
}

export default BannerSectionThree