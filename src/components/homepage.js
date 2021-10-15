import React from 'react'
import Navigationbar from './Navbar'
import Newsfeeds from './Newsfeed'
import LoadingImage from './LoadingImage'

const homepage = () => 
{
    return (
      <div /*style={{paddingBottom: "2000px"}}*/>
        <LoadingImage/>
        <Navigationbar/>
        <Newsfeeds/>
        <Newsfeeds/>
        <Newsfeeds/>
        <Newsfeeds/>
      </div>
    )
}

export default homepage