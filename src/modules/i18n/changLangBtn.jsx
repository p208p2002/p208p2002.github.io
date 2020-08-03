import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

let LangBtnStyle = styled.div`
    position: fixed;
    top: 3px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 3px;
    z-index:1;
    @media(min-width:768px){
        left: 3px;
    }
    @media(max-width:768px){
        right: 3px;
    }
`

export default function ChangLangBtn() {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language)
    console.log(i18n)

    let changLangOnClick = (lang) => {
        i18n.changeLanguage(lang)
        setCurrentLang(lang)
    }

    return (
        <LangBtnStyle>
            <button
                className={`m-1 btn btn-light btn-sm ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => changLangOnClick('en')}>{t('English')}</button>
            <button
                className={`m-1 btn btn-light btn-sm ${currentLang === 'tw' ? 'active' : ''}`}
                onClick={() => changLangOnClick('tw')}>{t('繁體中文')}</button>
        </LangBtnStyle>
    )
}
