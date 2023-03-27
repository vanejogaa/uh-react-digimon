import React from 'react';
import { useTranslation } from "react-i18next";


const Pages = ({onPrevious, onNext}) => {

    const [t, i18n] = useTranslation("global");

  return (

    <nav>
        <h1>{t("header.hello-world")}</h1>
        <ul className='pagination justify-content-end'>
            <li className='page-item'>
                <button onClick={() => i18n.changeLanguage("es")}>🇪🇸</button>
            </li>
            <li className='page-item'>
                <button onClick={() => i18n.changeLanguage("en")}>🇪n</button>
            </li>
        </ul>
    </nav>

  )
}

export default Pages
