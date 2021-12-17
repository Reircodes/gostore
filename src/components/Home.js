import React from 'react'
import Wallpaper from './Wallpaper'
import BlogSection from './BlogSection'
import CompanySection from './CompanySection'
import Footer from './Footer'
import Features from './Features'
import BannerSectionOne from './BannerSectionOne'
import BannerSectionTwo from './BannerSectionTwo'
import BannerSectionThree from './BannerSectionThree'
import BannerSectionFour from './BannerSectionFour'
import FlashSales from './FlashSales'
import SmartPhone from './SmartPhone'
import HomeAppliances from './HomeAppliances'
import Gca from './Gca'
import { BrowserRouter , Route } from 'react-router-dom'


const Home = () => {
    return (
        <div>

   <Wallpaper/>
            <Features/>
            <BannerSectionOne/>
            <FlashSales 
              />
            <BannerSectionOne/>
            <SmartPhone
             />
            <BannerSectionOne/>
            <HomeAppliances
             />
            <BannerSectionOne/>
            <Gca
            />
       <BlogSection/>
     <CompanySection/>

        </div>
    )
}

export default Home
