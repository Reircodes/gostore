import React from 'react'
import './BlogPage.css'
import BlogPost from './BlogPost'
import BlogSideBar from './BlogSideBar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'


const BlogPage = () => {
    
    const blogs = useSelector((state) => state.blogs)
    return (
        <>
        <div className='blogpage'>

   <section className='blogpage__header'>
   <div className='blogpage__headercontainer'>
     <h1>
          Blog Page
      </h1>
      <small>
          Home <span>
             > Blog Page
          </span>
      </small>
      </div>
     </section>

     <section className='blogpage__body'>
     <div className='blogpage__blogs'>
     {
                             blogs.map(blogPost => 
                                <BlogPost
                                blogTitle={blogPost.blogTitle}
                                date={blogPost.date}
                                excerpt={blogPost.excerpt}
                                writer={blogPost.writer}
                                img={blogPost.img}
                                key={blogPost.id}
                                link={`/blogpage/${blogPost.id}`}
                                
                                />
                                )
                         }
                        
             
     </div>

     <div className='blogpage__sidebar'>
     <BlogSideBar/>
     </div>
     </section>

        </div>
        </>
    )
}

export default BlogPage
