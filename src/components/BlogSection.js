import React from 'react'
import BlogPost from './BlogPost'
import './BlogSection.css'
import { useSelector } from 'react-redux'



const BlogSection = () => {
    
    const blogs = useSelector((state) => state.blogs)
    const blogPosts =blogs.filter( (item , i) => i < 2)

    console.log(blogs)

    return (
        <section className='blogsection'>
            <h1>
                Most Popular Blog Posts
            </h1>
            
            <div className='blogposts'>
                         {
                             blogPosts.map(blogPost => 
                                <BlogPost
                                blogTitle={blogPost.blogTitle}
                                date={blogPost.date}
                                excerpt={blogPost.excerpt}
                                writer={blogPost.writer}
                                img={blogPost.img}
                                
                                />
                                )
                         }
                        
                         
                           
                         </div>
           
        </section>
    )
}

export default BlogSection
