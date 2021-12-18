import React from 'react'
import './BlogSideBar.css'
import SideBarSocial from './SideBarSocial'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BlogSideBar = () => {

  

    return (
        <div className='blogsidebar'>
            <section className='blogsidebar_category'>
               <h1>
                   Categories
               </h1>
               <div>
               <p>
               > Accessories
                </p>
                <p>
                
                >  Cameras
                </p>
                <p>
              >  Laptops
                </p>
                <p>
                  
           >  Quote
                </p>
                <p>
                  
              > SmartPhone
                </p>
                <p>
                   
        >  Video
                </p>
               </div>
            </section>

            <section className='blogsidebar_recentpost'>
                <div>
                    
                </div>

            </section>

            <section className='blogsidebar_socials'>
                <h1>
                    Let's get social
                </h1>

                <p>
                We are a team of dedicated professionals delivering high quality WordPress themes and plugins. 
                </p>

                <div>
                <SideBarSocial
                Icon={TwitterIcon}
                Socialapp='Twitter'
                twitter

                /> 
                <SideBarSocial 
                  Icon={FacebookIcon}
                  Socialapp='Facebook'
                  facebook
                
                />
                <SideBarSocial
                  Icon={YouTubeIcon}
                  Socialapp='YouTube'
                  youtube
                  
                />
                <SideBarSocial
                  Icon={InstagramIcon}
                  Socialapp='Instagram'
                  instagram
                />


                </div>

            </section>
       
            <section className='blogsidebar__newslettercta'>
            <img src='https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/bg-mailchimp-320x211.jpg' />
            <div className='blogsidebar__newsletterctacontent'>

                <h2>
                NEWSLETTER
                </h2>
                <p>
                Enter your email to receive our newsletter.  
                </p>
                <form>
            <input placeholder='Your email here...'/>
             <input type='submit' className='button'/>
             </form>
            </div>


            </section>


        </div>
    )
}

export default BlogSideBar
