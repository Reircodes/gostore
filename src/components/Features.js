import React from 'react'
import Feature from './Feature'
import './Features.css'

const Features = () => {
    return (
        <section  data-aos="fade-down" className='features'>
            <Feature 
            data-aos="fade-up"       img='https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/feature-1.png'
            title='DELIVERY IN 24H'
            feature='Free shipping over $100'
 />
         <Feature 
            img='https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/feature-2.png'
            title='24 HOURS RETURN'
            feature='Free return over $100'
 />
        <Feature 
            img='https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/feature-3.png'
            title='QUALITY GUARANTEE'
            feature='Quality checked by our team'
 />
        <Feature 
            img='https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/feature-4.png'
            title='SUPPORT 24/7'
            feature='Shop with an expert

            '
 />
          

        </section>
    )
}

export default Features
