import React from 'react'
import './Footer.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
            <section className='footerproduct__link'>
                  <span data-aos="fade-right">
                      Air-condition
                      </span>   
                      <span data-aos="fade-left">
                      Digital Camera
                      </span>  
                      <span data-aos="fade-right">
                      Electrolux
                      </span> 
                      <span data-aos="fade-left">
                      Fridge
                      </span>   
                      <span data-aos="fade-right">
                      Headphone
                      </span>  
                      <span data-aos="fade-right">
                      Ipad
                      </span>  
                      <span data-aos="fade-left">
                     Iphone
                      </span>  
                      <span data-aos="fade-right">
                      Laptop
                      </span>  
                      <span data-aos="fade-left">
                      Macbook
                      </span>  
                      <span data-aos="fade-right">
                      Microwave
                      </span>  
                      <span data-aos="fade-left">
                    Panasonic
                      </span>  
                      <span data-aos="fade-right">
                      PC Accessories
                      </span>  
                      <span data-aos="fade-left">
                      Printer
                      </span>
                      <span data-aos="fade-right">
                       Samsung
                      </span> 
                      <span data-aos="fade-left">
                      Sanzo
                      </span> 
                      <span data-aos="fade-right">
                      Set Computer
                      </span>
                      <span data-aos="fade-left">
                      Smartphone
                      </span>   
                      <span data-aos="fade-right">
                      Smart TV
                      </span> 
                      <span data-aos="fade-left">
                      Smartwatch
                      </span>   
                      <span data-aos="fade-right">
                      Speaker
                      </span>
                      <span data-aos="fade-left">
                     Tablet
                      </span>
                      <span data-aos="fade-right">
                      Vacuum cleaner
                      </span>       
                      <span data-aos="fade-left">
                      Washing machine
                      </span>    
            </section>

            <section   className='footer__content'>
                     <div data-aos="fade-up" className='footer__contentinfo'>
                      <h2>
                          CONTACT INFO.
                      </h2>
                    
                          <article className='footer__grid1'>
                          <PhoneIphoneIcon/>
                 <p>      Line 1:(+84) 8001 8588 79 
                     <br/>
                          Line 2:(+84) 8001 8588 89</p>
                      
                          </article>
                         <article  className='footer__grid1'>
                         <EmailIcon/> 
                         <p>
                      
                          gostoresupport@gmail.com
                          </p>
                            </article>
                        <article  className='footer__grid1'>
                            
                        <LocationOnIcon/>
                        <p>
                        Your Name Road, Your City, United of Kingdom
                          </p>
                            </article>
                        <article  className='footer__grid1'>
                        <CalendarTodayIcon/>
                        <p>
                 
                        Monday-Saturday 9:00pm – 5:00pm
                        Sunday : Closed

                          </p>
                            </article>
                          
                     </div>
                     <div data-aos="fade-up"   className='footer__contentinfo'>
                      <h2>
                          POLICES
                      </h2>
                    
                          <p>
                          Returns & Exchanges
                          </p>
                          <p>
                          
                          Payment Terms
                          </p>
                          <p>
                         Delivery Terms
                          </p>
                          <p>
                            Payment & Pricing

                          </p>
                          <p>
                              Terms of Use
                          </p>
                          <p>
                              Privacy Policy
                          </p>
                          
                     </div>
                     <div data-aos="fade-up"   className='footer__contentinfo'>
                      <h2>
                          INFORMATION
                      </h2>
                    
                          <p>
                          About Us
                          </p>
                          <p>
                          
                          Careers
                          </p>
                          <p>
                        Orders & Shipping
                          </p>
                          <p>
                            Office Supplies

                          </p>
                          <p>
                              Contact Us
                          </p>
                          <p>
                              customer Service
                          </p>
                          
                     </div>
                     <div data-aos="fade-up"  className='footer__contentinfo'>
                      <h2>
                          Stay informed by newletter
                      </h2>
                    
                          <p>
                          *Subscribe to our newsletter to receive early discount offers, updates and new products info for 30% Membership discount.
                          </p>
                          <div>
                           
                              <input placeholder='Your email here...' />
                              <TelegramIcon/>
                              </div>

                              
                          
                     </div>

               

            </section>
            <section className='footer__copy'>
                      <p>   
© <span> GoStore </span>– All Rights Reserved 
</p>
<img src='https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/payments.png'/>
                     </section>
            </div> 
        </footer>
    )
}

export default Footer
