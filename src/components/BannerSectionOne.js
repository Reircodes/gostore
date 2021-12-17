import React , {useRef , useEffect} from 'react'
import Banner from './Banner'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerSectionOne = () => {
    const ref  = useRef();
    const q = gsap.utils.selector(ref);
    gsap.registerPlugin(ScrollTrigger)
  
    // useEffect(() => {
    //     gsap.to(".banners" , {
    //         ScrollTrigger: {
    //             trigger: ".banners" ,
    //             toggleActions: "restart none none none"
    //         },
    //         x:300,
    //         duration: 0.5
    //     }
    //     )
     
    // }, [])

    AOS.init();
    return (
        <div className='banners__container'>
        <div className='banners'>
         <div data-aos="fade-right">
         <Banner 
            text='New Arrivals'
            title='Virtual Reality 3d mobile game'
            img='https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/banner-1-electronic-1.jpg'
            
            />
         </div>
       <div    data-aos="fade-left">
       <Banner
         
            text='ON THE WEEKEND'
            title='ON SALE NOW BLACK FRIDAY'
            img='	https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/banner-2-electronic-1.jpg'
            
            
            />
       </div>
        </div>
        </div>
    )
}

export default BannerSectionOne
