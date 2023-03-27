import React from 'react';
import { useTranslation } from "react-i18next";
import ImagenSpain from "../assets/images/spain.jpg";
import ImagenBritish from "../assets/images/british.png"


const Pages = ({onPrevious, onNext}) => {

    const [t, i18n] = useTranslation("global");

  return (

    <nav>
        <h1>{t("header.hello-world")}</h1>
        <ul className='pagination justify-content-end'>
            <li className='page-item'>
                <button onClick={() => i18n.changeLanguage("es")}><img src={ImagenSpain} style={{ maxWidth: '25px' }}></img>🇪🇸</button>
            </li>
            <li className='page-item'>
                <button onClick={() => i18n.changeLanguage("en")}><img src={ImagenBritish} style={{ maxWidth: '25px' }}></img>🇪n</button>
            </li>
        </ul>
    </nav>

  )
}

export default Pages
