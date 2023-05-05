import React from 'react'
import { Link } from 'react-router-dom'






const Header_li = {
  color : 'yellowgreen',
  fontSize : 30 ,
  margin : 20 ,
  fontWeight : 700 ,
  cursor : 'pointer' ,
} 

const Navigate = () => {
  return (
    <div style={{display : 'flex' , justifyContent :'space-between' , backgroundColor : 'black' , height :'100px' }}>
      <div>
        <Link to='/'>
        <img style={{width : '200px' , height :'100px'}} src="navilogo.jpg" alt="naviLogo" />
        </Link>       
      </div>
      <div>
        <ul style={{display : 'flex'}} >
          <Link to='/word'>
             <li className='menuList' style={Header_li}>Word</li>
          </Link>
          <Link to='/sentence'>
             <li className='menuList' style={Header_li}>Sentence</li>
          </Link>
          <Link to='/book'>
             <li className='menuList' style={Header_li}>Book</li>
          </Link>
         
         
          
        
        </ul>
      </div>

    </div>
  )
}

export default Navigate