import { use } from 'i18next';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Uudised() {
  const { t } = useTranslation();
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return (
    <div>
      <div>{t("suunaviide")}<a target="_blank" rel="noreferrer" href='https://www.maarjakalma.ee/'>{t("link")}</a></div>
      <iframe title='uudis' src="https://kennelliit.ee/sundmused/" width='95%' height="400"></iframe>
      { uudised.length === 0 && <div>Lisame õige pea uudiseid!</div>}
      <div>{ uudised.map((uudis, index) => 
        <div key={index}>
        <Link to={'/uudis' + index}>
         <div>{uudis}</div>
        </Link>
        </div>
      )}</div>
    </div>);
}

export default Uudised