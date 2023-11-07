import React from 'react'
import { useParams } from 'react-router-dom'
import joogidFailist from '../data/joogid.json'


function Jook() {
    const {number} = useParams();
    const jook = joogidFailist[number];

    return (
    <div>
        {jook}
        {jook === undefined && <div>Jooki ei leitud</div>}
    </div>
    )
}

export default Jook