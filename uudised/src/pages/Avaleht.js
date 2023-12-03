import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Avaleht() {
  const { t } = useTranslation();
  const [uudisedApist, uuendaUudisedApist] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => uuendaUudisedApist(json))
  }, []);

  return (
    <div>
    <div className='tere'>{t("tere")}</div>
    <span>
        <img className='kutsu' src='https://img.dog-learn.com/dog-breeds/irish-setter/irish-setter-i15-large.jpg' alt='kutsu'/>
    </span>
    <div>
    { uudisedApist.map(element => 
      <div key={element.id}>
        <div><i>{element.userId}</i></div>
        <div><u>{element.id}</u></div>
        <div><b>{element.title}</b></div>
        <div>{element.body}</div>   
        
        <Link to={"kasutaja-postitus/" + element.userId}>
          <button>Kõik kasutaja postitused</button>
        </Link>
        <Link to={"ykspostitus/" + element.id}>
          <button>Vaata postitust</button>
        </Link>
      </div>)}
      </div>
    </div>
  )
}

export default Avaleht