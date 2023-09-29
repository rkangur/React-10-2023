import React from 'react'
import { Link } from 'react-router-dom';

function Courses() {
  return (
    <div>
      <Link to='/'><button style={{margin:"20px"}}>Back</button></Link>
      <div>Kursuste sisu</div>
    </div>
  )
}

export default Courses