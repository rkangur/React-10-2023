import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function KasutajaPostitus() {
    const { kasutajaId } = useParams();
    const [uudisedApist, uuendaUudisedApist] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            const result = data.filter(element => element.userId === Number(kasutajaId));
            uuendaUudisedApist(result);
        })
    }, [kasutajaId]);

    return (
    <div>
        { uudisedApist.map(element => 
        <div key={element.id}>
            <div><i>{element.userId}</i></div>
            <div><u>{element.id}</u></div>
            <div><b>{element.title}</b></div>
            <div>{element.body}</div> 
        </div>)}
    </div>)
}

export default KasutajaPostitus