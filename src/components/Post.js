import React from 'react'
import './Post.css'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import BlogSideBar from './BlogSideBar';
import './BlogSection.css'
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Post = () => {
     const blogs = useSelector((state) => state.blogs)

     let { id } = useParams()

     const getData  = blogs[id - 1]

     console.log(getData)
    return (
     
        <div className='singlepost'>
              <header className='singlepost__header'>
        <div className='singlepost__headercontainer'>
        <p> <Link to ='/' style={{textDecoration:'none'}} >
            <span className='span1'>Home</span></Link> 
            > <span className='span3'>{getData.category}</span> 
            <span className='span2'>> {getData.blogTitle}</span> </p>
        </div>
        </header>
        

        <div className='singlepost__grid '>
        <article className='singlepostcontainer'>
            <div className='singlepost_content'>

            <small>
             <p> <PersonIcon/>  {getData.writer} / </p>  <p> <CalendarTodayIcon/> {getData.date} / </p>  <p> <ChatBubbleOutlineIcon/> 4
          </p>
            </small>
            </div>
        
             <img src={getData.img} alt={getData.blogTitle}/>
            
         <div className='singlepost_content'>
         

            <h2 className=''>
                {getData.blogTitle}
            </h2>

            <p>
           {getData.content}
            </p>
            </div>

            </article>

            <BlogSideBar/>

        </div>
        </div>
    
    )
}

export default Post
