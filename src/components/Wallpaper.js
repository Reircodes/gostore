import React , {useRef , useEffect} from 'react'
import './Wallpaper.css'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom';


const Wallpaper = () => {

    const ref  = useRef();
    const q = gsap.utils.selector(ref);
    gsap.registerPlugin(ScrollTrigger)

    // useEffect(() => {
    //     gsap.to(".wallpaper__description" , {
    //         ScrollTrigger: {
    //             trigger: ".wallpaper__description" ,
    //             toggleActions: "restart none none none"
    //         },
    //         x:300,
    //         duration: 1
    //     }
    //     )
     
    // }, [])
    return (
        <section  className='wallpaper'>
            <div  className='wallpaper__container'>
            <div className='wallpaper__description ' data-aos="fade-right">
                <h5>COMING SOON ON MAY</h5>
                <h3>
                    NEW CAMERA <br/> 12MP <span> F/2.2 </span> <br/> 8k  <span> VIDEO </span>
                </h3>
             <Link to='shop'>  <button className='button'>SHOP NOW </button></Link> 
            </div>
            
            <img  data-aos="fade-left" src='https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/slide1-electronic-1.png'/>
       </div>
        </section>
    )
}

export default Wallpaper

