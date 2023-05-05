import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header_li = {
  color : 'yellowgreen',
  fontSize : 30 ,
  margin : 20 ,
  fontWeight : 700 ,
  cursor : 'pointer' ,
} 

const Header = () => {
  return (
    <div style={{ display : 'flex' , justifyContent : 'center' , alignItems :'center', flexDirection : 'column' }}>
      <div >
        <img style={{width : 600 }} src="ABC.jpg" alt="ABClogo" />
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

export default Header