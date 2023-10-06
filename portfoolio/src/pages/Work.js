import React from 'react'
import { Link } from 'react-router-dom';

function Work() {
  return (
    <div>
      <Link to='/'><button className='blue'>Back</button></Link>
      <div>
        <img src='/fox.png' alt="fox" />
      </div>

    </div>
  )
}

export default Work