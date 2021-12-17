import React from 'react'
import './ShopHeader.css'
import { Link } from 'react-router-dom'

const ShopHeader = () => {
    return (
        <header className='shopheader'>
        <div className='shopheader__container'>
          <h1>
            SHOP PAGE
        </h1>
      
        <p> <Link to ='/' style={{textDecoration:'none'}} ><span className='span1'>Home</span>  </Link> <span> > Shop Page</span></p>
        </div>
    </header>
    )
}

export default ShopHeader
