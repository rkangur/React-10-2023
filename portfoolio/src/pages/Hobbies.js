import React from 'react'
import { Link } from 'react-router-dom';


function Hobbies() {
  return (
    <div>
      <Link to='/'><button className='nupp'>Back</button></Link>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/woTnvEF3ylw?si=Do4Uz1KN1CkgoQlC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Hobbies