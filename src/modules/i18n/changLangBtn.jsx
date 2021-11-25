import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie'
import { useSelector,useDispatch } from 'react-redux'
import { setAppMode } from '../../actions'

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
        display:grid;
        right: 4px;
        padding-top:4px;
    }
    @media print{
        display:none;
    }
`


// var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default function ChangLangBtn() {
    const { t, i18n } = useTranslation();
    let lang = Cookies.get('lang');
    // eslint-disable-next-line
    const [currentLang, setCurrentLang] = useState(lang === undefined?i18n.language:lang)
    // eslint-disable-next-line
    let changLangOnClick = (lang) => {
        i18n.changeLanguage(lang)
        setCurrentLang(lang)
        Cookies.set('lang',lang)
        console.log('lang',lang)
    }

    const appMode = useSelector((state)=>state.appMode)
    const dispatch = useDispatch()

    return (
        <LangBtnStyle>
            {/* <button
                className={`m-1 btn btn-light btn-sm ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => changLangOnClick('en')}>{t('English')}</button>
            <button
                className={`m-1 btn btn-light btn-sm ${currentLang === 'tw' ? 'active' : ''}`}
                onClick={() => changLangOnClick('tw')}>{t('繁體中文')}</button> */}
            <button
                className={`m-1 btn btn-light btn-sm d-none d-md-block`}
                onClick={(e) => {
                    e.preventDefault()
                    window.location.href = appMode==='resume'?'/':'/?mode=resume'
                    // dispatch(setAppMode(appMode==='resume'?'normal':'resume'))
                }}
            >{appMode==='resume'?t('網頁模式'):t('履歷模式')}</button>
        </LangBtnStyle>
    )
}
