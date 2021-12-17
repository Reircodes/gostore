import React , {createContext , useReducer} from 'react';
import AppReducer from './AppReducer'
// initial state

const initialState = {
    blogPost : [
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-2.jpg',
            blogTitle:'Ultra-Thin Laptop Rentals and Rivalry',
            category:'laptops',
            writer:'john',
            date:'May 6 , 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-1.jpg',
            blogTitle:'How to Tag Faces in the Android Gallery',
            category:'smartphone',
            writer:'john',
            date:'May 1 , 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-4.jpg',
            blogTitle:'The New Sony Solo Cinematic Dream',
            category:'laptops',
            writer:'john',
            date:'April 30, 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-6.jpg',
            blogTitle:'Best Audiophile Streaming Services',
            category:'accessories',
            writer:'john',
            date:'April 29, 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-5.jpg',
            blogTitle:'New Remote Control for Stereo Hub',
            category:'accessories',
            writer:'john',
            date:'April 27, 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-7.jpg',
            blogTitle:'DUALSHOCK 4: Hands-on Impressions',
            category:'accessories',
            writer:'john',
            date:'April 27, 2021',
            excerpt:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'
        },
     ] ,

    product : [
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-7-450x450.jpg',
            productName:'Microsoft Surface Laptop 3-15” Touch-Screen',
            price:'750.00',
            oldPrice: '950.00' ,
            category:'Laptop'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/11/electronic-23-3-450x450.jpg',
            productName:'New Unlocked 128 GB of Storage Smartphone',
            price:'599.00',
            oldPrice: '699.00' ,
            category:'smartphone & Tablet'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-24-450x450.jpg',
            productName:'Canon Digital Camera w/ 42x Optical Zoom',
            price:'56.00',
            oldPrice: '66.00' ,  
            category:'Camera & Photos'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-51.jpg',
            productName:'Note 9 128GB Factory Unlocked Tablet',
            price:'699.00',
            oldPrice: '999.00' ,
            category:'smartphone & Tablet'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-37.jpg',
            productName:'Samsung Electronics Samsung Galaxy S21 5G',
            price:'599.00',
            oldPrice: '799.00' ,
            category:'smartphone & Tablet'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-42.jpg',
            productName:'Top Freezer Apartment Size Refrigerator Stainless',
            price:'199.00',
            oldPrice: '299.00' ,
            category:'Electronic & Housewares'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-59-600x600.jpg',
            productName:'NewAir Portable Evaporative Air Cooler',
            price:'99.00',
            oldPrice: '120.00' ,
            category:'Electronic & Housewares'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-11.jpg',
            productName:'Outdoor Security Camera Wireless, 1080p Full HD',
            price:'240.00',
            oldPrice: '250.00' ,
            category:'Electronic & Housewares'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-14.jpg',
            productName:'Friendly Zoom Digital Camera, 5X Optical Zoom',
            price:'180.00',
            oldPrice: '250.00' ,
            category:'Camera & Photos'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-30-600x600.jpg',
            productName:'Sylvania 55″ 4K UHD Android Smart Television',
            price:'400.00',
            oldPrice: '500.00' ,
            category:'TV & Audio'
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-26.jpg',
            productName:'LG Ductless Air Conditioning Single-Zone',
            price:'150.00',
            oldPrice: '250.00' ,
            category:'Electronic & Housewares'
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-20.jpg',
            productName:'Portable Washing Machine, 11lbs Capacity',
            price:'120.00',
            oldPrice: '200.00' ,
            category:'Electronic & Housewares'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-40.jpg',
            productName:'TOSHIBA Electric Rice Cooker Model 18NMFIAN',
            price:'199.00',
            oldPrice: '299.00' ,
            category:'Electronic & Housewares'
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-36.jpg',
            productName:'Chefman 6.3 Quart Digital Air Fryer',
            price:'160.00',
            oldPrice: '260.00' ,
            category:'smartphone & Tablet'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/11/electronic-1.jpg',
            productName:'Blackview A8 Android 10 Smartphone 6.21 in',
            price:'599.00',
            oldPrice: '799.00' ,
            category:'Electronic & Housewares'

            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-50.jpg',
            productName:'Mi TV 4A PRO 32 inch HD Ready Android LED TV',
            price:'550.00',
            oldPrice: '650.00' ,
            category:'TV & Audio'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-22.jpg',
            productName:'Apple iMac with Retina 5K, 27-inch Display',
            price:'699.00',
            oldPrice: '499.00' ,
            category:'smartphone & Tablet'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-66.jpg',
            productName:'PlayStation 5 DualSense Wireless Controller',
            price:'120.00',
            oldPrice: '220.00' ,
            category:'Game & Accessories'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-17.jpg',
            productName:'Sony DSCHX8 High Zoom Point & Shoot Camera',
            price:'110.00',
            oldPrice: '220.00' ,
            category:'Camera & Photos'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-53.jpg',
            productName:'Canon EF 85mm f/1.8 USM Medium Telephoto Lens',
            price:'99.00',
            oldPrice: '130.00' ,
            category:'Camera & Photos'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-5-450x450.jpg',
            productName:'Sony Playstation 3 160GB System',
            price:'90.00',
            oldPrice: '130.00' ,
            category:'Game & Accessories'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-19.jpg',
            productName:'PlayStation 4 Console – 1TB Slim Edition',
            price:'160.00',
            oldPrice: '190.00' ,
            category:'Game & Accessories'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-9.jpg',
            productName:'Simple Mobile 4G LTE Prepaid Smartphone',
            price:'129.00',
            oldPrice: '150.00' ,
            category:'smartphone & Tablet'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-60.jpg',
            productName:'Desktop Webcam, HD 720p Widescreen',
            price:'200.00',
            oldPrice: '250.00' ,
            category:'Camera & Photos'
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-34.jpg',
            productName:'4K UHD LED Smart TV with Chromecast Built-in',
            price:'499.00',
            oldPrice: '499.00' ,
            category:'TV & Audio'
            
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-75.jpg',
            productName:'PlayStation 2 Console (Slim Line Version 1)',
            price:'70.00',
            oldPrice: '90.00' ,
            category:'Game & Accessories'
            
            
        },
        {
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-75.jpg',
            productName:'DualShock Wireless Controller for PlayStation',
            price:'39.00',
            oldPrice: '50.00' ,
            category:'Game & Accessories'
            
            
        },
    ]
    
}




// Create Context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
    const [state , dispatch] = useReducer(AppReducer , initialState);

    // Actions

  function  deleteFromCart (id) {
        dispatch({
            type :  'DELETE_FROM_CART' ,
            payload : id
        })
    }

    function addProducts(product) {
        dispatch(
            {
                type : 'ADD_PRODUCT_TO_CART' ,
                payload : product
            }
        )
    }

    return (
        <GlobalContext.Provider value={{
            product : state.products ,
            blogPost : state.blogPost ,
            addProducts,
            deleteFromCart
        }}>
            { children }
        </GlobalContext.Provider>
    )

}