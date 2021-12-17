import React from 'react'
import './Banners.css'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom';

const Banner = ({title , img , text}) => {
  // const ref  = useRef();
  // const q = gsap.utils.selector(ref);
  // gsap.registerPlugin(ScrollTrigger)

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
        <div className='banner'>
          <figure className='fig2'>  <img src={img}/> </figure>
       <div className='banner__content'>
              <p>
                 {text}
              </p>
              <h3>
                {title}
              </h3>

              <Link to='shop'>  <button className='banner__button'>
                SHOP NOW
              </button></Link> 

       </div>
        </div>
    )
}

export default Banner
