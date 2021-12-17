import React from 'react'
import './Features.css'

const Feature = ({img  , title , feature}) => {
    return (
        <div className='feature'>

            <img src={img}/>

          <div className='feature__description'>
              <h4>
                  {title}
                  </h4>   
                  <p>{feature}</p> 
          </div>
        </div>
    )
}

export default Feature
