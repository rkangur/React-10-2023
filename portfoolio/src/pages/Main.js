import React from 'react'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
        <div className='navigation-pictures'>
      <Link to='/work'>
        <img src='https://c2.staticflickr.com/4/3368/3183662462_7d1f50856d_b.jpg' alt=''/>
      </Link>
      <Link to='/courses'>
        <img src='https://d3v84qcuo1n8sg.cloudfront.net/images/media/images/wildlife/living-with-wildlife/red-fox-hero.jpg' alt=''/>
      </Link>
      <Link to='/hobbies'>
        <img src='https://i.pinimg.com/474x/76/28/35/762835e48cc6ba8e06cdb2382cc7641b.jpg' alt=''/>
      </Link>
      </div>
    </div>
  )
}

export default Main