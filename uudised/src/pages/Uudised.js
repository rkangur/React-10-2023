import React from 'react'
import { useTranslation } from 'react-i18next';

function Uudised() {
  const { t } = useTranslation();

  return (
    <div>
    <div>{t("suunaviide")}<a target="_blank" rel="noreferrer" href='https://www.maarjakalma.ee/'>{t("link")}</a></div>
    <iframe title='uudis' src="https://kennelliit.ee/sundmused/" width='95%' height="400"></iframe>
    </div>
  )
}

export default Uudised