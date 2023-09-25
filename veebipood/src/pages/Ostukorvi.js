import React from 'react'
import { Link } from 'react-router-dom'

function Ostukorvi() {
  return (
    <div>
        <span>Ostukorv on tühi</span>
        <Link to="/avaleht">Lisa ostukorvi</Link>
    </div>
  )
}

export default Ostukorvi