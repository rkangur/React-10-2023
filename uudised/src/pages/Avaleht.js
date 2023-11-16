import React from 'react'
import { useTranslation } from 'react-i18next';

function Avaleht() {
  const { t } = useTranslation();

  return (
    <div>
    <div className='tere'>{t("tere")}</div>
    <span>
        <img className='kutsu' src='https://img.dog-learn.com/dog-breeds/irish-setter/irish-setter-i15-large.jpg' alt='kutsu'/>
    </span>
    </div>
  )
}

export default Avaleht