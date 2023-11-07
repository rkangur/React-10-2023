import React from 'react'
import { useParams } from 'react-router-dom'
import nimedFailist from '../data/nimed.json'

function YksikTagasisideAndja() {
    const { isik } = useParams();
    const nimi = nimedFailist[isik];

  return (
    <div>
        <div>Nimi: {nimi} </div>
        <div>Id: {isik} </div>
    </div>
  )
}

export default YksikTagasisideAndja