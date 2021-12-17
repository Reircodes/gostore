import { createSlice } from '@reduxjs/toolkit'

const BlogSlice = createSlice({
    name : 'blogs',
    initialState : [
        {   id:1,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-2.jpg',
            blogTitle:'Ultra-Thin Laptop Rentals and Rivalry',
            category:'laptops',
            writer:'john',
            date:'May 6 , 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {   id: 2,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-1.jpg',
            blogTitle:'How to Tag Faces in the Android Gallery',
            category:'smartphone',
            writer:'john',
            date:'May 1 , 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {   id :3 ,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-4.jpg',
            blogTitle:'The New Sony Solo Cinematic Dream',
            category:'laptops',
            writer:'john',
            date:'April 30, 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {   id : 4 ,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-6.jpg',
            blogTitle:'Best Audiophile Streaming Services',
            category:'accessories',
            writer:'john',
            date:'April 29, 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {  id : 5 ,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-5.jpg',
            blogTitle:'New Remote Control for Stereo Hub',
            category:'accessories',
            writer:'john',
            date:'April 27, 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {   id : 6,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-7.jpg',
            blogTitle:'DUALSHOCK 4: Hands-on Impressions',
            category:'accessories',
            writer:'john',
            date:'April 27, 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
    
    ] ,
    reducers : {
       
      
    }
})


export default BlogSlice.reducer