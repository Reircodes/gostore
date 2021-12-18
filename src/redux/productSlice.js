import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name : 'products',
    initialState : [
        {   id : 1,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-7-450x450.jpg',
            productName:'Microsoft Surface Laptop 3-15” Touch-Screen',
            price:'750.00',
            oldPrice: '950.00' ,
            category:'Laptop'
            
        },
        {   id : 2,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/11/electronic-23-3-450x450.jpg',
            productName:'New Unlocked 128 GB of Storage Smartphone',
            price:'599.00',
            oldPrice: '699.00' ,
            category:'smartphone & Tablet'
            
        },
    {       id : 3,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-24-450x450.jpg',
            productName:'Canon Digital Camera w/ 42x Optical Zoom',
            price:'56.00',
            oldPrice: '66.00' ,  
            category:'Camera & Photos'
            
        },
        {    id : 4,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-51.jpg',
            productName:'Note 9 128GB Factory Unlocked Tablet',
            price:'699.00',
            oldPrice: '999.00' ,
            category:'smartphone & Tablet',
            flashsales : true
            
        },
        {   id : 5,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-37.jpg',
            productName:'Samsung Electronics Samsung Galaxy S21 5G',
            price:'599.00',
            oldPrice: '799.00' ,
            category:'smartphone & Tablet'
            
        },
        {    id : 6,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-42.jpg',
            productName:'Top Freezer Apartment Size Refrigerator Stainless',
            price:'199.00',
            oldPrice: '299.00' ,
            category:'Electronic & Housewares'
            
        },
        {   id : 7,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-59-600x600.jpg',
            productName:'NewAir Portable Evaporative Air Cooler',
            price:'99.00',
            oldPrice: '120.00' ,
            category:'Electronic & Housewares'
            
        },
        {   id : 8,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-11.jpg',
            productName:'Outdoor Security Camera Wireless, 1080p Full HD',
            price:'240.00',
            oldPrice: '250.00' ,
            category:'Electronic & Housewares'
            
        },
        {   id : 9,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-14.jpg',
            productName:'Friendly Zoom Digital Camera, 5X Optical Zoom',
            price:'180.00',
            oldPrice: '250.00' ,
            category:'Camera & Photos',
            flashsales : true
            
        },
        {   id : 10,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-30-600x600.jpg',
            productName:'Sylvania 55″ 4K UHD Android Smart Television',
            price:'400.00',
            oldPrice: '500.00' ,
            category:'TV & Audio'
        },
        {   id : 11,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-26.jpg',
            productName:'LG Ductless Air Conditioning Single-Zone',
            price:'150.00',
            oldPrice: '250.00' ,
            category:'Electronic & Housewares'
        },
        {    id : 12,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-20.jpg',
            productName:'Portable Washing Machine, 11lbs Capacity',
            price:'120.00',
            oldPrice: '200.00' ,
            category:'Electronic & Housewares'
            
        },
        {   id : 13,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-40.jpg',
            productName:'TOSHIBA Electric Rice Cooker Model 18NMFIAN',
            price:'199.00',
            oldPrice: '299.00' ,
            category:'Electronic & Housewares',
            flashsales : true
        },
        {   id : 14,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-36.jpg',
            productName:'Chefman 6.3 Quart Digital Air Fryer',
            price:'160.00',
            oldPrice: '260.00' ,
            category:'smartphone & Tablet'
            
        },
        {   id : 15,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/11/electronic-1.jpg',
            productName:'Blackview A8 Android 10 Smartphone 6.21 in',
            price:'599.00',
            oldPrice: '799.00' ,
            category:'Electronic & Housewares'

            
        },
        {   id : 16,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-50.jpg',
            productName:'Mi TV 4A PRO 32 inch HD Ready Android LED TV',
            price:'550.00',
            oldPrice: '650.00' ,
            category:'TV & Audio'
            
        },
        {   id : 17,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-22.jpg',
            productName:'Apple iMac with Retina 5K, 27-inch Display',
            price:'699.00',
            oldPrice: '499.00' ,
            category:'smartphone & Tablet' ,
            flashsales : true
            
        },
        {   id : 18,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-66.jpg',
            productName:'PlayStation 5 DualSense Wireless Controller',
            price:'120.00',
            oldPrice: '220.00' ,
            category:'Game & Accessories'
            
        },
        {   id : 19,
            img : 'https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-65.jpg',
            price : '199.99',
            oldPrice : '99.00',
            category:'Game & Accessories',
            productName : 'Miles Morales Ultimate Launch Edition'
        }
        ,
        {   id : 20,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-17.jpg',
            productName:'Sony DSCHX8 High Zoom Point & Shoot Camera',
            price:'110.00',
            oldPrice: '220.00' ,
            category:'Camera & Photos'
            
        },
        {   id : 21,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-53.jpg',
            productName:'Canon EF 85mm f/1.8 USM Medium Telephoto Lens',
            price:'99.00',
            oldPrice: '130.00' ,
            category:'Camera & Photos'
            
        },
        {   id : 22,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-5-450x450.jpg',
            productName:'Sony Playstation 3 160GB System',
            price:'90.00',
            oldPrice: '130.00' ,
            category:'Game & Accessories',
            flashsales : true
            
        },
        {   id : 23,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-19.jpg',
            productName:'PlayStation 4 Console – 1TB Slim Edition',
            price:'160.00',
            oldPrice: '190.00' ,
            category:'Game & Accessories'
            
        },
        {   id : 24,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/01/electronic-9.jpg',
            productName:'Simple Mobile 4G LTE Prepaid Smartphone',
            price:'129.00',
            oldPrice: '150.00' ,
            category:'smartphone & Tablet'
            
        },
        {   id : 25,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-60.jpg',
            productName:'Desktop Webcam, HD 720p Widescreen',
            price:'200.00',
            oldPrice: '250.00' ,
            category:'Camera & Photos'
            
        },
        {  id : 26,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-34.jpg',
            productName:'4K UHD LED Smart TV with Chromecast Built-in',
            price:'499.00',
            oldPrice: '499.00' ,
            category:'TV & Audio',
            flashsales : true
            
            
        },
        {   id : 27 ,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-75.jpg',
            productName:'PlayStation 2 Console (Slim Line Version 1)',
            price:'70.00',
            oldPrice: '90.00' ,
            category:'Game & Accessories'
            
            
        },
        {   id : 28 ,
            img:'https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/02/electronic-75.jpg',
            productName:'DualShock Wireless Controller for PlayStation',
            price:'39.00',
            oldPrice: '50.00' ,
            category:'Game & Accessories'
            
            
        },
        {   id : 29,
            img:'https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-25.jpg',
            productName:'HP Pavilion27-Inch Full HD IPS LED Monitor',
            price:'899.00',
            oldPrice: '999.00' ,
            category:'Electronic & Housewares'
            
            
        },
        {   id : 30,
            img:'https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-67.jpg',
            productName:'Wired Over-Ear Gaming Headphones with USB',
            price:'15.00',
            oldPrice: '20.00' ,
            category:'Game & Accessories',
            flashsales : true
            
            
        },
        {   id : 31,
            img:'https://demo.theme-sky.com/gostore/wp-content/uploads/2021/01/electronic-38.jpg',
            productName:'Android 9.0 Pie Unlocked Tablet with SIM Card',
            price:'199.00',
            oldPrice: '250.00' ,
            category:'smartphone & Tablet'
            
        },
        {   id : 32,
            img:'https://demo.theme-sky.com/gostore/wp-content/uploads/2020/11/electronic-52.jpg',
            productName:'ZenBook Duo Nano Edge Bezel Touch Display',
            price:'59.00',
            oldPrice: '60.00',
            category:'smartphone & Tablet',
            flashsales : true
            
        },
        {   id : 33,
            img:'https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-15.jpg',
            productName:'Dell OptiPlex 7000 7480 All-in-One Computer',
            price:'159.00',
            oldPrice: '179.00',
            category:'Game & Accessories',
         
            
        },
        {   id : 34,
            img:'https://demo.theme-sky.com/gostore/wp-content/uploads/2020/11/electronic-43.jpg',
            productName:'Ultra Thin LED Monitor HDMI VGA Full HD 1080P',
            price:'235.00',
            oldPrice: '255.00',
            category:'Game & Accessories',
         
            
        },
    
    ] ,
    reducers : {
        addProduct : (state, action) => {
            const newProduct = {
                id : Date.now(),
                img : action.payload.img ,
                productName : action.payload.productName ,
                price : action.payload.price ,
                discount : action.payload.discount
            };
            state.push(newProduct)
            
        }
      
    }
})

export const { addProduct } = productSlice.actions;
export default productSlice.reducer