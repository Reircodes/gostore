import React from 'react'
import './BlogSection.css'
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom'

const BlogPost = ({blogTitle, date , excerpt , img , writer,link }) => {
    return (

      
        <article data-aos="fade-up" className='blogpost'>
             <img src={img}/>
            
         <div className='blogpost_content'>
         <small>
             <p> <PersonIcon/>  {writer} / </p>  <p> <CalendarTodayIcon/> {date} / </p>  <p> <ChatBubbleOutlineIcon/> 4
          </p>
            </small>

            <h2>
                
                {blogTitle}
            </h2>

            <p>
           {excerpt}
            </p>
<Link to = {`${link}`} style={{textDecoration : 'none'}}>    <button className='blogpost__btn'> 
        
        Read More <ArrowRightAltIcon/>
        </button>   
     </Link>
         
         </div>
        </article>

      
    )
}

export default BlogPost
