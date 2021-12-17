import React from 'react'
import './SideBarSocial.css'
import InstagramIcon from '@mui/icons-material/Instagram';

const SideBarSocial = ({instagram , twitter , youtube , facebook , Icon ,  Socialapp}) => {
  
    return (
        <div className='sidebarsocial '>
          <div className={`sidebarsocial ${instagram ? 'instagram' : ''}  ${twitter ? 'twitter' : ''}  ${facebook ? 'facebook' : ''} ${youtube ? 'youtube' : ''}  `}>
         <Icon/>
            <p>
            {Socialapp}
            </p>
          </div>
        </div>
    )
}

export default SideBarSocial
