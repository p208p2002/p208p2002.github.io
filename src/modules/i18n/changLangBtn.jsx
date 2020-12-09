import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie'

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
        position: absolute;
        right: 4px;
        padding-top:6px;
    }
    @media print{
        display:none;
    }
`

let url = new URL(window.location.href)
let resumeMode = (url.searchParams.get('mode') === 'resume' ? true : false)

export default function ChangLangBtn() {
    const { t, i18n } = useTranslation();
    let lang = Cookies.get('lang');
    const [currentLang, setCurrentLang] = useState(lang === undefined?i18n.language:lang)

    let changLangOnClick = (lang) => {
        i18n.changeLanguage(lang)
        setCurrentLang(lang)
        Cookies.set('lang',lang)
        console.log('lang',lang)
    }

    return (
        <LangBtnStyle>
            <button
                className={`m-1 btn btn-light btn-sm ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => changLangOnClick('en')}>{t('English')}</button>
            <button
                className={`m-1 btn btn-light btn-sm ${currentLang === 'tw' ? 'active' : ''}`}
                onClick={() => changLangOnClick('tw')}>{t('繁體中文')}</button>
            <button
                className={`d-none d-md-inline-block m-1 btn btn-light btn-sm`}
                onClick={(e) => {
                    e.preventDefault()
                    window.location.href = resumeMode?'/':'/?mode=resume'
                }}
            >{resumeMode?t('網頁模式'):t('履歷模式')}</button>
        </LangBtnStyle>
    )
}
